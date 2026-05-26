import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import SelectedWork from "../components/SelectedWork";
import WasUnsere from "../components/WasUnsere";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const StartPage = () => {
  return (
    <div
      id="outer-container"
      className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900"
    >
      <main id="page-wrap">
        <Navigation />
        <Header />
        <AboutSection />
        <Services />
        <SelectedWork />
        <WasUnsere />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default StartPage;
