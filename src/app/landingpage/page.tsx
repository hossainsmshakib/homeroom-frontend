// src/pages/index.tsx or your main page component

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/landingPage/Hero";
import Features from "../../components/landingPage/Features";
import FeaturedProperties from "../../components/landingPage/FeaturedProperties";
import HowToFind from "../../components/landingPage/HowToFind";
import FeaturedOn from "../../components/landingPage/FeaturedOn";
import Awards from "../../components/landingPage/Awards";
import Footer from "../../components/landingPage/Footer";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {" "}
        {/* Added pt-16 to account for Navbar height */}
        <Hero />
        <Features />
        <FeaturedProperties />
        <HowToFind />
        <FeaturedOn />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
