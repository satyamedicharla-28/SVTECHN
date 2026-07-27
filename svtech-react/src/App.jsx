import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// Website Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";

// Service Details
import TelecomDesign from "./Pages/serviceDetails/TelecomDesign";
import CadServices from "./Pages/serviceDetails/CadServices";
import GisSolutions from "./Pages/serviceDetails/GisSolutions";

// Admin Pages
import Login from "./admin/pages/Login";
import VerifyOTP from "./admin/pages/VerifyOTP";
import Dashboard from "./admin/pages/Dashboard";
import ManageJobs from "./admin/pages/ManageJobs";
import Applicants from "./admin/pages/Applicants";
import Users from "./admin/pages/Users";
import ContactMessages from "./admin/pages/ContactMessages";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

       


                 <Route
          path="/services/telecom-design"
          element={
            <Layout>
              <TelecomDesign />
            </Layout>
          }
        />

        <Route
          path="/services/cad-services"
          element={
            <Layout>
              <CadServices />
            </Layout>
          }
        />

        <Route
          path="/services/gis-solutions"
          element={
            <Layout>
              <GisSolutions />
            </Layout>
          }
        />






        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      
        {/* Admin Routes */}
        <Route path="/admin" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<ManageJobs />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact-messages" element={<ContactMessages />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;