import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { FlightBooking } from "./pages/FlightBooking";
import { VisaServices } from "./pages/visa/VisaServices";
import { TourPackages } from "./pages/TourPackages";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { FAQ } from "./pages/Cancellation & Refund Policy";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { OtherServices } from "./pages/OtherServices";
import BlogPost from "./pages/blogpost";
import Gallery from "./pages/gallery";
import ServiceDetails from "./pages/service";
import SchemaMarkup from "./SchemaMarkup";
import Loader from "./components/loader"; // ✅ Loader Component
import AgraOneDayTourPage from "./pages/trips/Agra-One-Day"; // ✅ Agra One Day Tour Page
import VrindavanOneDayTourPage from "./pages/trips/Vrindavan-One-Day"; // ✅ Vrindavan One Day Tour Page
import ChoptaTourPage from "./pages/trips/Chopta-Tungnath";
import KhatuShyamTourPage from "./pages/trips/Khatushyam";
import ManaliTourPage from "./pages/trips/Manali-Group-Trips";
import SpitiTourPage from "./pages/trips/Spiti Valley";
import JibhiValleyTourPage from "./pages/trips/Jibhi-Tirthan-Valley";
import VeitnamTourPage from "./pages/trips/Vietnam";
import ThailandTourPage from "./pages/trips/Thailand";
import KazakhstanTourPage from "./pages/trips/Kazakhstan";
import BaliTourPage from "./pages/trips/Bali";
import DubaiTourPage from "./pages/trips/Dubai"; 
import BhutanTourPage from "./pages/trips/Bhutan";
import HimachalTourPage from "./pages/trips/Himachal";
import KashmirTourPage from "./pages/trips/kashmir";
import NepalTourPage from "./pages/trips/Nepal";
import RajasthanTourPage from "./pages/trips/Rajasthan";
import UttarakhandTourPage from "./pages/trips/Uttarakhand";
import MeghalayaTourPage from "./pages/trips/Meghalaya";
import LehTourPage from "./pages/trips/Leh-Ladakh"; 

import ThailandVisa from "./pages/visa/thailand";
import UAEVisa from "./pages/visa/UnitedArabEmirates";

import Japanvisa from "./pages/visa/japan-visa";
import Hongkongvisa from "./pages/visa/HongKong";

import SwitzerlandVisa from "./pages/visa/Switzerland";
import UnitedStatesVisa from "./pages/visa/UnitedStates";
import UnitedKingdomVisa from "./pages/visa/UnitedKingdom"; 
import CanadaVisa from "./pages/visa/Canada";
import AustraliaVisa from "./pages/visa/Australia";
import FranceVisa from "./pages/visa/France";
import GermanyVisa from "./pages/visa/Germany";
import ItalyVisa from "./pages/visa/Italy";
import OmanVisa from "./pages/visa/Oman";
import HongKongVisa from "./pages/visa/HongKong";
import SouthKoreaVisa from "./pages/visa/SouthKorea";
import MalaysiaVisa from "./pages/visa/Malaysia";
import SingaporeVisa from "./pages/visa/Singapore";
import TurkeyVisa from "./pages/visa/Turkey";
import SaudiArabiaVisa from "./pages/visa/SaudiArabia";
import QatarVisa from "./pages/visa/Qatar";
import NetherlandsVisa from "./pages/visa/Netherlands";
import SouthAfricaVisa from "./pages/visa/SouthAfrica";


import PassportRanking from "@/ppt";


import PassportGallery from "./pages/passport/PassportGallery";
import PassportDetail from "./pages/passport/PassportDetail";










function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  // Show loader while loading
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Loader />
      </div>
    );
  }

  return (
    <Router basename="/nppm">
      <SchemaMarkup />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero /><TrustSection /></>} />
            <Route path="/nppm" element={<Navigate to="/" replace />} />
            <Route path="/flights" element={<FlightBooking />} />
            <Route path="/visas" element={<VisaServices />} />
            <Route path="/packages" element={<TourPackages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/other-services" element={<OtherServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/Cancellation & Refund Policy" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/Agra-Tour" element={<AgraOneDayTourPage />} />
            <Route path="/Vrindavan-Tour" element={<VrindavanOneDayTourPage />} />
            <Route path="/chopta-Tungnath" element={<ChoptaTourPage />} />
            <Route path="/Khatushyam-Tour" element={<KhatuShyamTourPage />} />
            <Route path="/manali-sissu-kasol" element={<ManaliTourPage />} />
            <Route path="/jibhi-tour" element={<JibhiValleyTourPage />} />
            <Route path="/Spiti-Valley" element={<SpitiTourPage />} />
            <Route path="/Veitnam" element={<VeitnamTourPage />} />
            <Route path="/Thailand" element={<ThailandTourPage />} />
            <Route path="/Kazakhstan" element={<KazakhstanTourPage />} />
            <Route path="/Bali" element={<BaliTourPage />} />
            <Route path="/Dubai" element={<DubaiTourPage />} />
            <Route path="/Bhutan" element={<BhutanTourPage />} />
            <Route path="/Himachal" element={<HimachalTourPage />} />
            <Route path="/Kashmir" element={<KashmirTourPage />} />
            <Route path="/Nepal" element={<NepalTourPage />} />
            <Route path="/Rajasthan" element={<RajasthanTourPage/>} />
            <Route path="/Uttarakhand" element={<UttarakhandTourPage/>} />
            <Route path="/Meghalaya" element={<MeghalayaTourPage/>} />
            <Route path="/Leh-Trips" element={<LehTourPage />} />
            <Route path="/Himachal-Tour" element={<VeitnamTourPage />} />
            <Route path="/service/:title" element={<ServiceDetails />} />


            <Route path="/visa/thailand-visa" element={<ThailandVisa />} />
            <Route path="/visa/uae-visa" element={<UAEVisa />} />
            <Route path="/visa/japan-visa" element={<Japanvisa />} />
            <Route path="/visa/hongkong-visa" element={<Hongkongvisa />} />


            <Route path="/visa/thailand-visa" element={<ThailandVisa />} />
            <Route path="/visa/uae-visa" element={<UAEVisa />} />
            <Route path="/visa/switzerland-visa" element={<SwitzerlandVisa />} />
            <Route path="/visa/united-states-visa" element={<UnitedStatesVisa />} />
            <Route path="/visa/united-kingdom-visa" element={<UnitedKingdomVisa />} />
            <Route path="/visa/canada-visa" element={<CanadaVisa />} />
            <Route path="/visa/australia-visa" element={<AustraliaVisa />} />
            <Route path="/visa/france-visa" element={<FranceVisa />} />
            <Route path="/visa/germany-visa" element={<GermanyVisa />} />
            <Route path="/visa/italy-visa" element={<ItalyVisa />} />
            <Route path="/visa/oman-visa" element={<OmanVisa />} />
            <Route path="/visa/hong-kong-visa" element={<HongKongVisa />} />
            <Route path="/visa/south-korea-visa" element={<SouthKoreaVisa />} />
            <Route path="/visa/malaysia-visa" element={<MalaysiaVisa />} />
            <Route path="/visa/singapore-visa" element={<SingaporeVisa />} />
            <Route path="/visa/turkey-visa" element={<TurkeyVisa />} />
            <Route path="/visa/saudi-arabia-visa" element={<SaudiArabiaVisa />} />
            <Route path="/visa/qatar-visa" element={<QatarVisa />} />
            <Route path="/visa/netherlands-visa" element={<NetherlandsVisa />} />
            <Route path="/visa/south-africa-visa" element={<SouthAfricaVisa />} />

            <Route path="/passport-ranking" element={<PassportRanking />} />
            <Route path="/passport" element={<PassportGallery />} />
            <Route path="/passport/:country" element={<PassportDetail />} />




            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
