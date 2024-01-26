import React from "react";
import Navbar from "./Navbar";
import Home from "../Home";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Home />
      <Footer />
    </>
  );
}

export default MainLayout;
