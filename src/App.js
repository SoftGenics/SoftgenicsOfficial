import { BrowserRouter, Routes, Route } from "react-router-dom";
//Trying
// import Videotest from './components/Test/index'
import Home from "./components/Home";
import FinacialServies from './components/Industrius/FinacialServies'

// Product
import ERP from './components/Product/ERP'
import AssestManagement from './components/Product/AssestManagement'
import ContactManagment from './components/Product/ContactManagment'
import DataAnalist from './components/Product/DataAnalist'
import DocumentManagment from './components/Product/DocumentManagment'
import Ecommerce from './components/Product/Ecommerce'
import ELearning from './components/Product/ELearning'
import FinacialManagment from './components/Product/FinacialManagment'
import FleetManagment from './components/Product/FleetManagment'
import HumanResorce from './components/Product/HumanResorce'
import KioskSoftware from './components/Product/KioskSoftware'
import MarketingAndAdv from './components/Product/MarketingAndAdv'
import OprationManagment from './components/Product/OprationManagment'
import ProjectManagment from './components/Product/ProjectManagment'
import SupplyChainMang from './components/Product/SupplyChainMang'
import WebPortal from './components/Product/WebPortal'
import CRM from './components/Product/CRM'
import PaymentManagment from './components/Product/PaymentManagment'

// Servises
import Application from "./components/Servises/Application";
import MobileDev from './components/Servises/MobileDev'
import ApplicationAndServer from './components/Servises/ApplicationAndServer'
import InfrastrucherServies from './components/Servises/InfrastrucherServies'
import TestingAndQA from './components/Servises/TestingAndQA'
import UIandUX from './components/Servises/UIandUX'
import WebDev from './components/Servises/WebDev'
import WordPress from './components/Servises/WordPress'


// Technology 
import JavaScript from './components/Technology/JavaScript'
import AspDotNet from './components/Technology/AspDotNet'
import C from './components/Technology/C++'
import Golang from './components/Technology/Golang'
import Java from './components/Technology/Java'
import Node from './components/Technology/Node'
import PHP from './components/Technology/PHP'
import Python from './components/Technology/Python'
import ReactNative from './components/Technology/ReactNative'

// Resorce
import ManageItServies from './components/Resorce/ManageItServies'
import CyberSecurity from './components/Resorce/CyberSecurity'
import ItOutsourcing from './components/Resorce/ItOutsourcing'
import ItSupport from './components/Resorce/ItSupport'

// About Us
import Aboutus from './components/Aboutus/About'
import ClientReview from './components/Aboutus/ClientReview'
import Experts from './components/Aboutus/Experts'
import Location from './components/Aboutus/Location'
import OurPartner from './components/Aboutus/OurPartner'

// Email
import Email from './components/Email'
import ContactBtn from './components/ContactBtn'

// policy
import ContactUs from './components/Policy/ContactUs'
import PrivacyPolicy from './components/Policy/PrivacyPolicy'
import Refund from './components/Policy/Refund'
import TermsAndConditions from './components/Policy/TermsAndConditions'

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/video-test" element={<Videotest />} /> */}
      {/* Servies */}
      <Route exact path="/application" element={<Application />} />
      <Route exact path="/mobile-devlopment" element={<MobileDev />} />
      <Route exact path="/application-and-server" element={<ApplicationAndServer />} />
      <Route exact path="/Infrastrucher-servies" element={<InfrastrucherServies />} />
      <Route exact path="/testing-andQA" element={<TestingAndQA />} />
      <Route exact path="/ux-and-ui" element={<UIandUX />} />
      <Route exact path="/web-dev" element={<WebDev />} />
      <Route exact path="/word-press" element={<WordPress />} />

      {/* Product */}
      <Route exact path="/erp" element={<ERP />} />
      <Route exact path="/assest-management" element={<AssestManagement />} />
      <Route exact path="/contact-managment" element={<ContactManagment />} />
      <Route exact path="/data-analist" element={<DataAnalist />} />
      <Route exact path="/document-managment" element={<DocumentManagment />} />
      <Route exact path="/ecommerce" element={<Ecommerce />} />
      <Route exact path="/e-learning" element={<ELearning />} />
      <Route exact path="/finacial-managment" element={<FinacialManagment />} />
      <Route exact path="/fleet-managment" element={<FleetManagment />} />
      <Route exact path="/human-resorce" element={<HumanResorce />} />
      <Route exact path="/kiosk-software" element={<KioskSoftware />} />
      <Route exact path="/marketing-and-adv" element={<MarketingAndAdv />} />
      <Route exact path="/opration-managment" element={<OprationManagment />} />
      <Route exact path="/project-managment" element={<ProjectManagment />} />
      <Route exact path="/supply-chainMang" element={<SupplyChainMang />} />
      <Route exact path="/web-portal" element={<WebPortal />} />
      <Route exact path="/crm" element={<CRM />} />
      <Route exact path="/payment-managment" element={<PaymentManagment />} />

      {/* Technology */}
      <Route exact path="/javaScript" element={<JavaScript />} />
      <Route exact path="/asp-dot-net" element={<AspDotNet />} />
      <Route exact path="/c" element={<C />} />
      <Route exact path="/golang" element={<Golang />} />
      <Route exact path="/java" element={<Java />} />
      <Route exact path="/node" element={<Node />} />
      <Route exact path="/php" element={<PHP />} />
      <Route exact path="/python" element={<Python />} />
      <Route exact path="/react-native" element={<ReactNative />} />

      {/* Resorce */}
      <Route exact path="/manage-it-servies" element={<ManageItServies />} />
      <Route exact path="/cyber-security" element={<CyberSecurity />} />
      <Route exact path="/itOut-sourcing" element={<ItOutsourcing />} />
      <Route exact path="/It-support" element={<ItSupport />} />

      {/* About Us */}
      <Route exact path="/about-us" element={<Aboutus />} />
      <Route exact path="/client-review" element={<ClientReview />} />
      <Route exact path="/Experts" element={<Experts />} />
      <Route exact path="/location" element={<Location />} />
      <Route exact path="/our-partner" element={<OurPartner />} />


      <Route exact path="/finacial-servies" element={<FinacialServies />} />
      <Route exact path="/email" element={<Email />} />
      <Route exact path="/contact-us" element={<ContactBtn />} />

      {/* Policy */}
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/refund" element={<Refund />} />
      <Route exact path="/terms" element={<TermsAndConditions />} />

    </Routes>
  </BrowserRouter>
);
export default App;
