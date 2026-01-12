import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import FormBuilder from "../components/dashboard/formbuilder/FormBuilder";
import PublicForm from "../pages/form/PublicForm";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/form-builder"
          element={<FormBuilder />}
        />

        {/* 🔥 PUBLIC FORM ROUTE (REQUIRED FOR IFRAME) */}
        <Route path="/forms/:formId" element={<PublicForm />} />

        {/* OPTIONAL: FALLBACK */}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
