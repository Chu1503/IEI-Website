import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// export default function Home() {
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      {/* <Navbar /> */}

      <section id="hero" className="snap-center">
        {" "}
        {/* WARNING: SNAP CENTER */}
        <Hero />
      </section>

      <Footer />

      {/* Hero */}

      {/* About */}

      {/* Gallery */}

      {/* Events */}

      {/* Team */}

      {/* Contact Us or Footer */}
    </div>
  );
};

export default Home;
