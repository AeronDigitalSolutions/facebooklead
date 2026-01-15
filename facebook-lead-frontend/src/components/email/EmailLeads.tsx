import { useState, useMemo, useEffect } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import styles from "../../styles/dashbaord/emailLeads.module.css";
import { saveEmailLeadsGroup } from "../../api/emailLeads";
import { fetchAllEmailLeads } from "../../api/emailLeads";


type Lead = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  website: string;
  groupId?: {
    _id: string;
    name: string;
  };
};

const REQUIRED_HEADERS = [
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

  const [groupName, setGroupName] = useState("");
  const [fileToProcess, setFileToProcess] = useState<File | null>(null);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [dbLeads, setDbLeads] = useState<Lead[]>([]);
  const [error, setError] = useState<string | null>(null);

  /* VIEW MODE */
  const [viewMode, setViewMode] = useState<"upload" | "db">("upload");

  /* FILTER STATES */
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [groupFilter, setGroupFilter] = useState("");
const [rawData] = useState<Record<string, any>[]>([]);
const [headers] = useState<string[]>([]);
const [fieldMap, setFieldMap] = useState<Record<string, string>>({
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  position: "",
  phone: "",
  website: "",
});
const [showMapping, setShowMapping] = useState(false);




  /* =========================
     FETCH DB LEADS
  ========================= */
  useEffect(() => {
    if (viewMode === "db") {
      fetchAllEmailLeads().then((res) => {
        setDbLeads(res.data);
      });
    }
  }, [viewMode]);

  /* =========================
     FILE SELECT
  ========================= */
  const handleFileSelect = (file: File) => {
    setError(null);
    setFileToProcess(file);
    setGroupName("");
    setShowGroupModal(true);
    setShowUpload(false);
  };

  /* =========================
     IMPORT CSV / EXCEL
  ========================= */
  const importLeads = async () => {
    if (!fileToProcess) return;
    if (!groupName.trim()) {
      setError("Lead group name is required");
      return;
    }

    const fileName = fileToProcess.name.toLowerCase();

    if (fileName.endsWith(".csv")) {
      Papa.parse(fileToProcess, {
        header: true,
        skipEmptyLines: true,
        complete: async (results: Papa.ParseResult<Record<string, any>>) => {
          validateAndSave(results.data, results.meta.fields || []);
        },
      });
    } else {
      const data = await fileToProcess.arrayBuffer();
      const workbook = XLSX.read(data);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet) as Record<string, any>[];
      validateAndSave(json, Object.keys(json[0] || {}));
    }
  };

  const validateAndSave = async (data: Record<string, any>[], headers: string[]) => {
    const lowerHeaders = headers.map((h) => h.toLowerCase());
    const missing = REQUIRED_HEADERS.filter(
      (h) => !lowerHeaders.includes(h)
    );

    if (missing.length > 0) {
      setError(`Missing fields: ${missing.join(", ")}`);
      return;
    }

    await saveEmailLeadsGroup(groupName, data);
    setLeads(data as Lead[]);
    setShowGroupModal(false);
    setViewMode("upload");
  };

  /* =========================
     DATA SOURCE SWITCH
  ========================= */
  const sourceLeads = viewMode === "db" ? dbLeads : leads;

  /* =========================
     FILTERED LEADS
  ========================= */
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

  const companies = useMemo(
    () => Array.from(new Set(sourceLeads.map((l) => l.company))),
    [sourceLeads]
  );

  const groups = useMemo(
    () =>
      Array.from(
        new Set(
          dbLeads
            .map((l) => l.groupId?.name)
            .filter(Boolean)
        )
      ),
    [dbLeads]
  );

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
                Upload CSV
                <input
                  type="file"
                  accept=".csv"
                  hidden
                  onChange={(e) =>
                    e.target.files && handleFileSelect(e.target.files[0])
                  }
                />
              </label>

              <label className={styles.uploadOption}>
                Upload Excel
                <input
                  type="file"
                  accept=".xlsx,.xls"
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

      {/* FILTER BAR */}
      {sourceLeads.length > 0 && (
        <div className={styles.filters}>
          <input
            placeholder="Search name, email, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
          >
            <option value="">All Companies</option>
            {companies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {viewMode === "db" && (
            <select
              value={groupFilter}
              onChange={(e) => setGroupFilter(e.target.value)}
            >
              <option value="">All Groups</option>
              {groups.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          )}

          <span className={styles.count}>
            {filteredLeads.length} leads
          </span>
        </div>
      )}


{showMapping && (
  <div className={styles.modalOverlay}>
    <div className={styles.modalLarge}>
      <h3>Map Fields</h3>

      {Object.keys(fieldMap).map((key) => (
        <div key={key} className={styles.mapRow}>
          <label>{key.replace("_", " ")}</label>
          <select
            value={fieldMap[key]}
            onChange={(e) =>
              setFieldMap({
                ...fieldMap,
                [key]: e.target.value,
              })
            }
          >
            <option value="">Ignore</option>
            {headers.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className={styles.modalActions}>
        <button onClick={() => setShowMapping(false)}>
          Cancel
        </button>
        <button
          className={styles.primary}
          onClick={async () => {
            const mapped = rawData.map((row) => ({
              first_name: row[fieldMap.first_name],
              last_name: row[fieldMap.last_name],
              email: row[fieldMap.email],
              company: row[fieldMap.company],
              position: row[fieldMap.position],
              phone: row[fieldMap.phone],
              website: row[fieldMap.website],
            }));

            await saveEmailLeadsGroup(groupName, mapped);
            setLeads(mapped);
            setShowMapping(false);
            setShowGroupModal(false);
          }}
        >
          Save Leads
        </button>
      </div>
    </div>
  </div>
)}


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
            {filteredLeads.length === 0 && (
              <tr>
                <td colSpan={viewMode === "db" ? 8 : 7} className={styles.empty}>
                  No email leads found
                </td>
              </tr>
            )}

            {filteredLeads.map((l, i) => (
              <tr key={i}>
                <td>{l.first_name}</td>
                <td>{l.last_name}</td>
                <td>{l.email}</td>
                <td>{l.company}</td>
                <td>{l.position}</td>
                <td>{l.phone}</td>
                <td>
                  <a href={l.website} target="_blank">
                    {l.website}
                  </a>
                </td>
                {viewMode === "db" && (
                  <td>{l.groupId?.name}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* GROUP MODAL */}
      {showGroupModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Create Lead Group</h3>

            <input
              placeholder="Lead group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />

            <div className={styles.modalActions}>
              <button onClick={() => setShowGroupModal(false)}>
                Cancel
              </button>
              <button className={styles.primary} onClick={importLeads}>
                Import Leads
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
