import { useState } from "react";
import styles from "../../../styles/dashbaord/FormBuilder.module.css";
import type {
  Field,
  CreatedForm,
  FieldType,
  FormTheme,
} from "../../../types/form";
import { API_BASE } from "@/config/api";

const defaultTheme: FormTheme = {
  textColor: "#111827",
  borderColor: "#d1d5db",
  buttonColor: "#4f46e5",
};

export default function FormBuilder() {
const [tab, setTab] = useState<"field" | "theme">("field");

  const [formName, setFormName] = useState("");
  const [fields, setFields] = useState<Field[]>([]);
  const [activeFieldId, setActiveFieldId] = useState<string | null>(null);
  const [createdForms, setCreatedForms] = useState<CreatedForm[]>([]);
  const [theme, setTheme] = useState<FormTheme>(defaultTheme);

  const activeField = fields.find((f) => f.id === activeFieldId);

  /* ---------- ADD FIELD ---------- */
  const addField = (type: FieldType) => {
    const field: Field = {
      id: crypto.randomUUID(), // ✅ OK (UI only)
      type,
      label: type === "button" ? "Submit" : "New Field",
      placeholder: "Enter value",
      required: false,
      options:
        type === "select" || type === "radio"
          ? ["Option 1", "Option 2"]
          : undefined,
    };

    setFields([...fields, field]);
    setActiveFieldId(field.id);
  };

  /* ---------- UPDATE FIELD ---------- */
  const updateField = (key: keyof Field, value: any) => {
    if (!activeFieldId) return;

    setFields((prev) =>
      prev.map((f) =>
        f.id === activeFieldId ? { ...f, [key]: value } : f
      )
    );
  };

  /* ---------- CREATE FORM (BACKEND) ---------- */
  const createForm = async () => {
    if (!formName || fields.length === 0) return;

    const res = await fetch(`${API_BASE}/forms`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formName,
        fields,
        theme,
      }),
    });

    const savedForm: CreatedForm = await res.json();

    setCreatedForms([...createdForms, savedForm]);

    setFormName("");
    setFields([]);
    setActiveFieldId(null);
    setTheme(defaultTheme);
  };

  /* ---------- RENDER FIELD ---------- */
  const renderBuilderField = (field: Field) => {
    const style = {
      color: theme.textColor,
      borderColor: theme.borderColor,
    };

    switch (field.type) {
      case "textarea":
        return <textarea disabled style={style} />;
      case "select":
        return (
          <select disabled style={style}>
            {field.options?.map((o, i) => (
              <option key={i}>{o}</option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className={styles.radioGroup}>
            {field.options?.map((o, i) => (
              <label key={i}>
                <input type="radio" disabled /> {o}
              </label>
            ))}
          </div>
        );
      case "checkbox":
        return <input type="checkbox" disabled />;
      case "button":
        return (
          <button
            className={styles.submitBtn}
            style={{ background: theme.buttonColor }}
          >
            {field.label}
          </button>
        );
      default:
        return <input disabled style={style} />;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.form_h1}>Form Bulider</h1>
      <div className={styles.topBar}>
        <input
          placeholder="Form name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
        <button onClick={createForm}>Create Form</button>
      </div>

      <div className={styles.builder}>
        <aside className={styles.palette}>
          <h4>Add Fields</h4>
          <button onClick={() => addField("text")}>Text</button>
          <button onClick={() => addField("email")}>Email</button>
          <button onClick={() => addField("textarea")}>Textarea</button>
          <button onClick={() => addField("select")}>Select</button>
          <button onClick={() => addField("radio")}>Radio</button>
          <button onClick={() => addField("checkbox")}>Checkbox</button>
          <button onClick={() => addField("button")}>Submit Button</button>
        </aside>

        <main className={styles.canvas}>
          {fields.map((field) => (
            <div
              key={field.id}
              className={`${styles.field} ${activeFieldId === field.id ? styles.active : ""
                }`}
              onClick={() => setActiveFieldId(field.id)}
            >
              <label style={{ color: theme.textColor }}>
                {field.label}
              </label>
              {renderBuilderField(field)}
            </div>
          ))}
        </main>

        {/* <aside className={styles.settings}>
          
          <h4 >Field Settings</h4>
          <input type="text" placeholder="Filed Label" />
          <input type="text" placeholder="Filed Label" />

          {activeField && (
            <>
              <label>Label</label>
              <input
                value={activeField.label}
                onChange={(e) =>
                  updateField("label", e.target.value)
                }
              />

              {(activeField.type === "select" ||
                activeField.type === "radio") && (
                  <>
                    <label>Options (comma separated)</label>
                    <input
                      value={activeField.options?.join(",")}
                      onChange={(e) =>
                        updateField(
                          "options",
                          e.target.value.split(",")
                        )
                      }
                    />
                  </>
                )}
            </>
          )}

          <hr />

          <h4>Form Theme</h4>

          <input
            type="color"
            value={theme.textColor}
            onChange={(e) =>
              setTheme({ ...theme, textColor: e.target.value })
            }
          />
          <input
            type="color"
            value={theme.borderColor}
            onChange={(e) =>
              setTheme({ ...theme, borderColor: e.target.value })
            }
          />
          <input
            type="color"
            value={theme.buttonColor}
            onChange={(e) =>
              setTheme({ ...theme, buttonColor: e.target.value })
            }
          />
        </aside> */}
        <aside className={styles.settings}>
  <div className={styles.tabs}>
    <button onClick={() => setTab("field")} className={tab==="field"?styles.active:""}>Field</button>
    <button onClick={() => setTab("theme")} className={tab==="theme"?styles.active:""}>Theme</button>
  </div>

  {/* {tab === "field" && activeField && (
    <>
      <input
        value={activeField.label}
        onChange={(e)=>updateField("label", e.target.value)}
      />

      {(activeField.type==="select"||activeField.type==="radio") && (
        <input
          value={activeField.options?.join(",")}
          onChange={(e)=>updateField("options", e.target.value.split(","))}
        />
      )}
    </>
  )} */}
{tab === "field" && (
  <>
    <h4>Field Settings</h4>

    {/* <label>Field Label</label> */}
    <input
      value={activeField?.label || ""}
      onChange={(e)=>updateField("label", e.target.value)} placeholder="Field label"
    />

    {/* <label>Placeholder</label> */}
    <input
      value={activeField?.placeholder || ""}
      onChange={(e)=>updateField("placeholder", e.target.value)} placeholder="Planceholder"
    />

    <div className={styles.toggle}>
      <span>Required?</span>
      {/* <input
        type="checkbox"
        checked={activeField?.required}
        onChange={(e)=>updateField("required", e.target.checked)}
      /> */}
      
<label className={styles.switch}>
  <input type="checkbox"/>
  <span className={styles.slider}></span>
</label>
    </div>

    {/* <p className={styles.tip}>Tip: Drag and drop fields to reorder.</p> */}
  </>
)}

  {tab === "theme" && (
    <>
      <input type="color" value={theme.textColor}
        onChange={(e)=>setTheme({...theme,textColor:e.target.value})}/>
      <input type="color" value={theme.borderColor}
        onChange={(e)=>setTheme({...theme,borderColor:e.target.value})}/>
      <input type="color" value={theme.buttonColor}
        onChange={(e)=>setTheme({...theme,buttonColor:e.target.value})}/>
    </>
  )}
</aside>

      </div>

      {/* <div className={styles.output}>
        <h2>Created Forms</h2>

        {createdForms.map((form) => (
          <div key={form._id}>
            <p>{form.name}</p>
            <input
              readOnly
              value={`<iframe src="${window.location.origin}/forms/${form._id}" width="100%" height="600" style="border:none;"></iframe>`}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
