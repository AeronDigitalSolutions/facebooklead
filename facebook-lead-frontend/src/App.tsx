import { Routes, Route } from "react-router-dom";
// import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home/Home";
import Dashboard from "./pages/Dashboard";
import AddAccounts from "./components/dashboard/AddAccounts";
import Campaigns from "./components/dashboard/Campaigns";
import  Leads from "./components/dashboard/Leads";
import MetaIntro from "./components/dashboard/integrations/MetaIntro";
import MetaProcessing from "./components/dashboard/integrations/MetaProcessing";
import MetaAssets from "./components/dashboard/integrations/MetaAssets";
import MetaReview from "./components/dashboard/integrations/MetaReview";
import MetaSuccess from "./components/dashboard/integrations/MetaSuccess";
import MetaSettings from "./components/dashboard/settings/MetaSettings";
import MetaError from "./components/dashboard/integrations/MetaError";
import MetaHelp from "./components/dashboard/help/MetaHelp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
            {/* <Route path="/" element={<Dashboard/>} /> */}
        <Route
          path="/dashboard/add-accounts"
          element={<AddAccounts/>}
        />
        <Route
          path="/dashboard/campaigns"
          element={<Campaigns/>}
        />
        <Route
          path="/dashboard/leads"
          element={<Leads/>}
        />

        <Route
  path="/dashboard/integrations/meta"
  element={<MetaIntro/>}
/>
<Route
  path="/dashboard/integrations/meta/processing"
  element={<MetaProcessing/>}
/>
<Route
  path="/dashboard/integrations/meta/assets"
  element={<MetaAssets/>}
/>
<Route
  path="/dashboard/integrations/meta/review"
  element={<MetaReview/>}
/>
<Route
  path="/dashboard/integrations/meta/success"
  element={<MetaSuccess/>}
/>
<Route
  path="/dashboard/settings/meta"
  element={<MetaSettings/>}
/>
<Route
  path="/dashboard/integrations/meta/error"
  element={<MetaError/>}
/>
<Route
  path="/dashboard/help/meta"
  element={<MetaHelp/>}
/>


      </Routes>

  );
}
