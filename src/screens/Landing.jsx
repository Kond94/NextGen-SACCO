import Contact from "../components/Sections/Contact";
import Fees from "../components/Sections/Fees";
import Footer from "../components/Sections/Footer";
import Header from "../components/Sections/Header";
import React from "react";
import Services from "../components/Sections/Services";
import Team from "../components/Sections/Team";
import TopNavbar from "../components/Nav/TopNavbar";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Team />
      <Fees />
      <Contact />
      <Footer />
    </>
  );
}
