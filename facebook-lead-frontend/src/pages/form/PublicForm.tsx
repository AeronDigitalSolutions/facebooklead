import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/dashbaord/FormBuilder.module.css";
import type { CreatedForm } from "../../types/form";

export default function PublicForm() {
  const { formId } = useParams();
  const [form, setForm] = useState<CreatedForm | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/forms/${formId}`)
      .then((res) => res.json())
      .then(setForm);
  }, [formId]);

  if (!form) return <p>Loading...</p>;
  if (submitted) return <h3>Thank you! Form submitted.</h3>;

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const answers = form.fields
      .filter((f) => f.type !== "button")
      .map((field) => ({
        fieldId: field.id,
        label: field.label,
        value: formData[field.id],
      }));

    await fetch(
      `http://localhost:5000/api/forms/${form._id}/submit`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      }
    );

    setSubmitted(true);
  };

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        style={{ color: form.theme.textColor }}
      >
        <h2>{form.name}</h2>

        {form.fields.map((field) => (
          <div key={field.id} className={styles.field}>
            {field.type !== "button" && <label>{field.label}</label>}

            {(field.type === "text" || field.type === "email") && (
              <input
                onChange={(e) =>
                  handleChange(field.id, e.target.value)
                }
              />
            )}

            {field.type === "textarea" && (
              <textarea
                onChange={(e) =>
                  handleChange(field.id, e.target.value)
                }
              />
            )}

            {field.type === "select" && (
              <select
                onChange={(e) =>
                  handleChange(field.id, e.target.value)
                }
              >
                {field.options?.map((o, i) => (
                  <option key={i}>{o}</option>
                ))}
              </select>
            )}

            {field.type === "radio" &&
              field.options?.map((o, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={field.id}
                    value={o}
                    onChange={(e) =>
                      handleChange(field.id, e.target.value)
                    }
                  />
                  {o}
                </label>
              ))}

            {field.type === "checkbox" && (
              <input
                type="checkbox"
                onChange={(e) =>
                  handleChange(field.id, e.target.checked)
                }
              />
            )}

            {field.type === "button" && (
              <button
                type="submit"
                className={styles.submitBtn}
                style={{
                  background: form.theme.buttonColor,
                }}
              >
                {field.label}
              </button>
            )}
          </div>
        ))}
      </form>
    </div>
  );
}
