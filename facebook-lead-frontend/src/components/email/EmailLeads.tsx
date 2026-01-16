import { useState, useMemo, useEffect } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import styles from "../../styles/dashbaord/emailLeads.module.css";
import {
  saveEmailLeadsGroup,
  fetchAllEmailLeads,
  fetchEmailLeadGroups,
} from "../../api/emailLeads";

type Lead = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  website: string;
  [key: string]: any; // 🔥 dynamic columns
  groupId?: {
    _id: string;
    name: string;
  };
};

const SYSTEM_FIELDS = [
  "first_name",
  "last_name",
  "email",
  "company",
  "position",
  "phone",
  "website",
];

export default function EmailLeads() {
  const [showUpload, setShowUpload] = useState(false);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [showMapping, setShowMapping] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [selectedGroupId, setSelectedGroupId] = useState<string>("");

  const [fileToProcess, setFileToProcess] = useState<File | null>(null);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [dbLeads, setDbLeads] = useState<Lead[]>([]);
  const [groups, setGroups] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  /* RAW DATA */
  const [rawData, setRawData] = useState<Record<string, any>[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  /* 🔥 NEW: COLUMN CONFIG (ADDED, NOT REPLACED) */
  const [columnConfig, setColumnConfig] = useState<
    Record<
      string,
      {
        target: string;
        type: "system" | "custom" | "ignore";
      }
    >
  >({});

  /* VIEW MODE */
  const [viewMode, setViewMode] = useState<"upload" | "db">("upload");

  /* FILTER STATES */
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [groupFilter, setGroupFilter] = useState("");

  /* =========================
     FETCH DATA
  ========================= */
  useEffect(() => {
    fetchEmailLeadGroups().then((res) => setGroups(res.data));
  }, []);

  useEffect(() => {
    if (viewMode === "db") {
      fetchAllEmailLeads().then((res) => setDbLeads(res.data));
    }
  }, [viewMode]);

  /* =========================
     FILE SELECT
  ========================= */
  const handleFileSelect = (file: File) => {
    setError(null);
    setFileToProcess(file);
    setShowGroupModal(true);
    setShowUpload(false);
  };

  /* =========================
     INIT COLUMN CONFIG
  ========================= */
  const initColumnConfig = (cols: string[]) => {
    const cfg: any = {};
    cols.forEach((c) => {
      cfg[c] = {
        target: c,
        type: SYSTEM_FIELDS.includes(c) ? "system" : "custom",
      };
    });
    setColumnConfig(cfg);
  };

  /* =========================
     IMPORT CSV / EXCEL
  ========================= */
  const importLeads = async () => {
    if (!fileToProcess) return;

    const name = fileToProcess.name.toLowerCase();

    if (name.endsWith(".csv")) {
      Papa.parse(fileToProcess, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setRawData(results.data as any[]);
          setHeaders(results.meta.fields || []);
          initColumnConfig(results.meta.fields || []);
          setShowMapping(true);
          setShowGroupModal(false);
        },
      });
    } else {
      const buf = await fileToProcess.arrayBuffer();
      const wb = XLSX.read(buf);
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet) as any[];
      setRawData(json);
      const cols = Object.keys(json[0] || {});
      setHeaders(cols);
      initColumnConfig(cols);
      setShowMapping(true);
      setShowGroupModal(false);
    }
  };

  /* =========================
     SAVE MAPPED LEADS
  ========================= */
  const saveMappedLeads = async () => {
    if (
      !Object.values(columnConfig).some(
        (c) => c.type === "system" && c.target === "email"
      )
    ) {
      setError("Email mapping is required");
      return;
    }

    const mapped = rawData.map((row) => {
      const lead: any = {};

      Object.entries(columnConfig).forEach(([csvCol, cfg]) => {
        if (cfg.type === "ignore") return;
        if (!cfg.target) return;
        lead[cfg.target] = row[csvCol];
      });

      return lead;
    });

    await saveEmailLeadsGroup(
      groupName,
      mapped,
      selectedGroupId || undefined
    );

    setLeads(mapped);
    setShowMapping(false);
    setViewMode("upload");
  };

  /* =========================
     FILTERED DATA
  ========================= */
  const sourceLeads = viewMode === "db" ? dbLeads : leads;

  const filteredLeads = useMemo(() => {
    return sourceLeads.filter((l) => {
      const text = `${l.first_name} ${l.last_name} ${l.email} ${l.company}`.toLowerCase();
      return (
        text.includes(search.toLowerCase()) &&
        (companyFilter ? l.company === companyFilter : true) &&
        (groupFilter ? l.groupId?.name === groupFilter : true)
      );
    });
  }, [sourceLeads, search, companyFilter, groupFilter]);

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1>Email Leads</h1>

        <div className={styles.actions}>
          <button
            className={styles.secondaryBtn}
            onClick={() => setViewMode("db")}
          >
            Leads
          </button>

          <button
            className={styles.addBtn}
            onClick={() => setShowUpload(!showUpload)}
          >
            + Add Leads
          </button>

          {showUpload && (
            <div className={styles.dropdown}>
              <label className={styles.uploadOption}>
                Upload CSV / Excel
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  hidden
                  onChange={(e) =>
                    e.target.files && handleFileSelect(e.target.files[0])
                  }
                />
              </label>
            </div>
          )}
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {/* GROUP MODAL */}
      {showGroupModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Select Lead Group</h3>

            <select
              value={selectedGroupId}
              onChange={(e) => setSelectedGroupId(e.target.value)}
            >
              <option value="">➕ Create new group</option>
              {groups.map((g) => (
                <option key={g._id} value={g._id}>
                  {g.name}
                </option>
              ))}
            </select>

            {!selectedGroupId && (
              <input
                placeholder="New group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            )}

            <div className={styles.modalActions}>
              <button onClick={() => setShowGroupModal(false)}>Cancel</button>
              <button className={styles.primary} onClick={importLeads}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FIELD MAPPING */}
      {showMapping && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalLarge}>
            <h3>Map & Rename Columns</h3>

            {headers.map((h) => (
              <div key={h} className={styles.mapRow}>
                <strong>{h}</strong>

                <select
                  value={columnConfig[h]?.type}
                  onChange={(e) =>
                    setColumnConfig({
                      ...columnConfig,
                      [h]: {
                        ...columnConfig[h],
                        type: e.target.value as any,
                      },
                    })
                  }
                >
                  <option value="system">System</option>
                  <option value="custom">Custom</option>
                  <option value="ignore">Ignore</option>
                </select>

                {columnConfig[h]?.type !== "ignore" && (
                  <input
                    placeholder="Column name"
                    value={columnConfig[h]?.target}
                    onChange={(e) =>
                      setColumnConfig({
                        ...columnConfig,
                        [h]: {
                          ...columnConfig[h],
                          target: e.target.value,
                        },
                      })
                    }
                  />
                )}
              </div>
            ))}

            <div className={styles.modalActions}>
              <button onClick={() => setShowMapping(false)}>Cancel</button>
              <button className={styles.primary} onClick={saveMappedLeads}>
                Save Leads
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FILTERS */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by company"
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
        />
        {viewMode === "db" && (
          <select
            value={groupFilter}
            onChange={(e) => setGroupFilter(e.target.value)}
          >
            <option value="">All groups</option>
            {groups.map((g) => (
              <option key={g._id} value={g.name}>
                {g.name}
              </option>
            ))}
          </select>
        )}
        <div className={styles.count}>
          {filteredLeads.length} leads
        </div>
      </div>

      {/* TABLE */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Company</th>
              <th>Position</th>
              <th>Phone</th>
              <th>Website</th>
              {viewMode === "db" && <th>Group</th>}
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((l, i) => (
              <tr key={i}>
                <td>{l.first_name}</td>
                <td>{l.last_name}</td>
                <td>{l.email}</td>
                <td>{l.company}</td>
                <td>{l.position}</td>
                <td>{l.phone}</td>
                <td>{l.website}</td>
                {viewMode === "db" && <td>{l.groupId?.name}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
