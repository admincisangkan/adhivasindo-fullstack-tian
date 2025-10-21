import React from "react";
import "./Header.css";
import {
  Search, Bell, Mail
} from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        {/* === Left Section === */}
        <div className="header-left">
          <img
            src="/adhi-logo.png"
            alt="Adhivasindo Logo"
            className="logo"
          />
          <h2 className="title">LEARNING MANAGEMENT SYSTEM</h2>
        </div>

        {/* === Right Section === */}
        <div className="header-right">
          <div className="searchbar">
            <Search size={18} color="#333" />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="icons">
<Bell size={18} color="#333" />
<Mail size={18} color="#333" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
