import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/dashbaord/FormSubmissions.module.css";
import { API_BASE } from "@/config/api";

export default function FormSubmissions() {
  const { formId } = useParams();
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/forms/${formId}/submissions`)
      .then((res) => res.json())
      .then(setSubmissions)
      .catch(console.error);
  }, [formId]);

  if (!submissions.length) {
    return <p className={styles.empty}>No submissions yet</p>;
  }

  const columns = submissions[0].answers.map(
    (a: any) => a.label
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Form Submissions</h2>

      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              {columns.map((c: string) => (
                <th key={c}>{c}</th>
              ))}
              <th>Submitted At</th>
            </tr>
          </thead>

          <tbody>
            {submissions.map((s) => (
              <tr key={s._id}>
                {s.answers.map((a: any) => (
                  <td key={a.fieldId}>
                    {String(a.value)}
                  </td>
                ))}
                <td>
                  {new Date(s.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
