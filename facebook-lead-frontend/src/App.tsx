import { Routes, Route } from "react-router-dom";
// import Signin from "./pages/signin";
import './index.css'
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
// import { useEffect } from "react";

export default function App() {
  //  useEffect(() => {
  //    const ring = document.querySelector(".cursor-ring");
  //    const dot = document.querySelector(".cursor-dot");
 
  //    const move = (e) => {
  //      const x = e.clientX;
  //      const y = e.clientY;
 
  //      dot.style.transform = `translate(${x}px, ${y}px)`;
  //      ring.style.transform = `translate(${x}px, ${y}px)`;
  //    };
 
  //    window.addEventListener("mousemove", move);
  //    return () => window.removeEventListener("mousemove", move);
  //  }, []);
  return (
    <>
    <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
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
</>
  );
}
