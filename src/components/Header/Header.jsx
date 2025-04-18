import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";

const SelectedTab = {
  Home: 'home',
  Education: 'education',
  Experience: 'experience',
  Skills: 'skills',
  Contact: 'contact'
};

function Header() {
  const [activeTab, setActiveTab] = useState(SelectedTab.Home);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false); // Cierra el menú al hacer clic
  };

  return (
    <header className="header">
      <a href="#" className="logo">Rodrigo Guillen</a>
      <div id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        {Object.entries(SelectedTab).map(([key, value]) => (
          <a
            key={key}
            href={`#${value}`}
            className={activeTab === value ? 'active' : ''}
            onClick={() => handleLinkClick(value)}
          >
            {key}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
