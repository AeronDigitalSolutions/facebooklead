import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/dashbaord/FormList.module.css";
import { API_BASE } from "@/config/api";

export default function Forms() {
  const [forms, setForms] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/api/forms`)
      .then((res) => res.json())
      .then(setForms)
      .catch(console.error);
  }, []);

  const copyIframe = (id: string) => {
    const code = `<iframe src="${window.location.origin}/forms/${id}" width="100%" height="600" style="border:none;"></iframe>`;
    navigator.clipboard.writeText(code);
    alert("Iframe code copied");
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Your Forms</h2>

      <div className={styles.list}>
        {forms.map((form) => (
          <div key={form._id} className={styles.card}>
            <div className={styles.formName}>{form.name}</div>

            <div className={styles.actions}>
              <button
                className={styles.button}
                onClick={() =>
                  navigate(`/dashboard/forms/${form._id}`)
                }
              >
                View Submissions
              </button>

              <button
                className={`${styles.button} ${styles.secondary}`}
                onClick={() => copyIframe(form._id)}
              >
                Copy Embed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
