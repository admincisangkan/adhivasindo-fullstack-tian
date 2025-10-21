import React from "react";
import "./RightPanel.css";
import { ChevronRight } from "lucide-react";

function RightPanel() {
  return (
    <aside className="right-panel">
      {/* === User Info === */}
      <div className="user-info">
        <img
          src="/avatar.png"
          alt="User"
          className="user-avatar"
        />
        <h4>Selamat Datang, Juliana</h4>
        <p>Di LMS by Adhivasindo</p>
      </div>

      {/* === Calendar Section === */}
      <div className="calendar-section">
        <div className="calendar-header">
          <h5>April 2025</h5>
        </div>
        <div className="calendar-days">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span className="active">Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>
      </div>

      {/* === Schedule Section === */}
      <div className="schedule-section">
        <h5>JADWAL PEMATERI</h5>
        <div className="schedule-list">
          <div className="schedule-item blue">
            <div className="color-dot"></div>
            <div className="schedule-info">
              <p className="title">Storytelling dalam Pemasaran</p>
              <span>09:00 - 10:30 WIB · mr. Joram</span>
            </div>
            <ChevronRight size={18} />
          </div>

          <div className="schedule-item coral">
            <div className="color-dot"></div>
            <div className="schedule-info">
              <p className="title">Pemrograman Frontend Modern</p>
              <span>12:00 - 14:00 WIB · mr. Firman</span>
            </div>
            <ChevronRight size={18} />
          </div>

          <div className="schedule-item yellow">
            <div className="color-dot"></div>
            <div className="schedule-info">
              <p className="title">Pengembangan API</p>
              <span>14:30 - 15:30 WIB · mr. Panjo</span>
            </div>
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RightPanel;
