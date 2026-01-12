export type FieldType =
  | "text"
  | "email"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "button";

export interface Field {
  id: string; // UI-only (UUID is OK)
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export interface FormTheme {
  textColor: string;
  borderColor: string;
  buttonColor: string;
}

export interface CreatedForm {
  _id: string; // 🔥 MongoDB ID
  name: string;
  fields: Field[];
  theme: FormTheme;
}
