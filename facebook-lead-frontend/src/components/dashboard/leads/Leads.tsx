import { useEffect, useRef, useState } from "react";
import { getLeads } from "../../../api/api";
import { fetchCampaigns } from "../../../api/campaigns";
import { socket } from "@/lib/socket";

import LeadsHeader from "./LeadsHeader";
import LeadsFilters from "./LeadFilters";
import LeadsMetrics from "./LeadsMetrics";
import PipelineBoard from "./PipelineBoard";
import LeadsTable from "./LeadsTable";

import styles from "../../../styles/dashbaord/leads.module.css";
import type { Campaign } from "@/types/campaign";

interface AdAccount {
  id: string; // act_XXXX
  name: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [filters, setFilters] = useState<any>({});
  const [view, setView] = useState<"pipeline" | "table">("pipeline");
  const [selectedAccount, setSelectedAccount] =
    useState<AdAccount | null>(null);

  // 🔒 keep latest filters for socket callback
  const filtersRef = useRef(filters);
  useEffect(() => {
    filtersRef.current = filters;
  }, [filters]);

  /* 🔹 Load selected ad account */
  useEffect(() => {
    const stored = localStorage.getItem("selected_ad_account");
    if (stored) {
      setSelectedAccount(JSON.parse(stored));
    }
  }, []);

  const adAccountId = selectedAccount?.id?.replace("act_", "");

  /* 🔹 Load campaigns for this account */
  useEffect(() => {
    if (!adAccountId) {
      setCampaigns([]);
      return;
    }

    fetchCampaigns(adAccountId).then(setCampaigns);
  }, [adAccountId]);

  /* 🔹 Fetch leads when filters change (REST) */
  useEffect(() => {
    getLeads(filters).then((res) => {
      setLeads(res.data || []);
    });
  }, [filters]);

  /* 🔥 REALTIME SOCKET LISTENER */
  useEffect(() => {
    const handleNewLead = (lead: any) => {
      const f = filtersRef.current;

      // ✅ FILTER-AWARE REALTIME CHECK
      if (f.campaignId && lead.campaignId !== f.campaignId) return;
      if (f.source && lead.source !== f.source) return;
      if (f.status && lead.status !== f.status) return;
      if (f.agent && lead.assignedAgent !== f.agent) return;

      // Date range filter
      if (f.startDate && f.endDate) {
        const created = new Date(lead.createdAt).getTime();
        const start = new Date(f.startDate).getTime();
        const end = new Date(f.endDate).setHours(23, 59, 59, 999);

        if (created < start || created > end) return;
      }

      // ✅ PREVENT DUPLICATES
      setLeads((prev) => {
        if (prev.some((l) => l._id === lead._id)) return prev;
        return [lead, ...prev];
      });
    };

    socket.on("new-lead", handleNewLead);

    return () => {
      socket.off("new-lead", handleNewLead);
    };
  }, []);

  return (
    <div className={styles.page}>
      <LeadsHeader view={view} onViewChange={setView} />

      <LeadsFilters
        campaigns={campaigns}
        onChange={(newFilter) =>
          setFilters((prev: any) => ({ ...prev, ...newFilter }))
        }
      />

      <LeadsMetrics leads={leads} />

      {view === "pipeline" ? (
        <PipelineBoard leads={leads} />
      ) : (
        <LeadsTable leads={leads} />
      )}
    </div>
  );
}
