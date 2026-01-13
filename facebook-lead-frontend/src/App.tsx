import { Routes, Route, Navigate } from "react-router-dom";

/* AUTH */
import Signin from "./pages/signin";
import Signup from "./pages/signup";

/* PUBLIC */
import Home from "./pages/home/Home";
import PublicForm from "./pages/form/PublicForm";

/* DASHBOARD LAYOUT */
import Dashboard from "./pages/Dashboard";

/* DASHBOARD CORE */
import AddAccounts from "./components/dashboard/AddAccounts";
import Campaigns from "./components/dashboard/Campaigns";
import Leads from "./components/dashboard/leads/Leads";

/* META */
import MetaIntro from "./components/dashboard/integrations/MetaIntro";
import MetaProcessing from "./components/dashboard/integrations/MetaProcessing";
import MetaAssets from "./components/dashboard/integrations/MetaAssets";
import MetaReview from "./components/dashboard/integrations/MetaReview";
import MetaSuccess from "./components/dashboard/integrations/MetaSuccess";
import MetaError from "./components/dashboard/integrations/MetaError";
import MetaSettings from "./components/dashboard/settings/MetaSettings";
import MetaHelp from "./components/dashboard/help/MetaHelp";

/* FORMS */
import FormBuilder from "./components/dashboard/formbuilder/FormBuilder";
import Forms from "./components/dashboard/FormList";
import FormSubmissions from "./components/dashboard/FormSubmission";

/* 🔥 GOOGLE ADS */
import GoogleDashboard from "./pages/google/GoogleDashboard";
import GoogleAccounts from "./components/dashboard/google/GoogleAccounts";
import GoogleCampaigns from "./components/dashboard/google/GoogleCampaigns";
import GoogleLeads from "./components/dashboard/google/GoogleLeads";
import GoogleSuccess from "./pages/google/GoogleSuccess";
import AboutPage from "./pages/AboutPages/AboutPage";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <Routes>
      {/* 🌐 PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/aboutpage" element={<AboutPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* 🔐 DASHBOARD */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* DEFAULT DASHBOARD */}
        <Route index element={<Navigate to="add-accounts" replace />} />

        {/* CORE */}
        <Route path="add-accounts" element={<AddAccounts />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="leads" element={<Leads />} />

        {/* META */}
        <Route path="integrations/meta" element={<MetaIntro />} />
        <Route path="integrations/meta/processing" element={<MetaProcessing />} />
        <Route path="integrations/meta/assets" element={<MetaAssets />} />
        <Route path="integrations/meta/review" element={<MetaReview />} />
        <Route path="integrations/meta/success" element={<MetaSuccess />} />
        <Route path="integrations/meta/error" element={<MetaError />} />
        <Route path="settings/meta" element={<MetaSettings />} />
        <Route path="help/meta" element={<MetaHelp />} />

        {/* 🔥 GOOGLE ADS (SEPARATE SECTION) */}
        <Route path="google" element={<GoogleDashboard />}>
          {/* DEFAULT GOOGLE TAB */}
          <Route index element={<Navigate to="accounts" replace />} />

          <Route path="accounts" element={<GoogleAccounts />} />
          <Route path="campaigns" element={<GoogleCampaigns />} />
          <Route path="leads" element={<GoogleLeads />} />
          <Route path="success" element={<GoogleSuccess />} />
        </Route>

        {/* FORMS */}
        <Route path="form" element={<FormBuilder />} />
        <Route path="forms" element={<Forms />} />
        <Route path="forms/:formId" element={<FormSubmissions />} />
      </Route>

      {/* 🌍 PUBLIC FORM (IFRAME / SHAREABLE) */}
      <Route path="/forms/:formId" element={<PublicForm />} />

      {/* ❌ FALLBACK */}
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
}