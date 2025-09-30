import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { applyThemeToRoot } from "./theme";

// PUBLIC_INTERFACE
export default function App() {
  /**
   * Root application component that wires together
   * the standard multi-section layout and applies
   * the Ocean Professional theme to CSS variables.
   */
  useEffect(() => {
    applyThemeToRoot();
  }, []);

  const handleNavigate = (id) => {
    // For now, we just scroll to top or future route handling
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Placeholder: route or section logic can be added here
    // console.log("Navigate to:", id);
  };

  return (
    <div className="app-shell">
      <Header />
      <Navbar onNavigate={handleNavigate} />
      <Content />
      <Footer />
    </div>
  );
}
