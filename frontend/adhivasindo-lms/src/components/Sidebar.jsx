import React from "react";
import {
  LayoutGrid,
  BookOpen,
  Users,
  MessageSquare,
  User,
  Settings,
  Calendar,
  LogOut,
  Pentagon
} from "lucide-react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="menu-section">
        <a href="#" className="menu-item active">
          <LayoutGrid size={18} />
          <span>Dashboard</span>
        <Pentagon size={18} color="burlywood" />
        </a>
        <a href="#" className="menu-item">
          <BookOpen size={18} />
          <span>Modul</span>
        </a>
        <a href="#" className="menu-item">
          <Users size={18} />
          <span>Peserta</span>
        </a>
        <a href="#" className="menu-item">
          <MessageSquare size={18} />
          <span>Group Chat</span>
        </a>
        <a href="#" className="menu-item">
          <User size={18} />
          <span>Pemateri</span>
        </a>
      </nav>

      <div className="profile-section">
        <h5>PROFILE</h5>
        <a href="#" className="menu-item">
          <Settings size={18} />
          <span>Settings</span>
        </a>
        <a href="#" className="menu-item">
          <Calendar size={18} />
          <span>Kalender</span>
        </a>
      </div>

      <div className="logout-section">
        <a href="#" className="logout-btn">
          <LogOut size={18} />
          <span>Log Out</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
