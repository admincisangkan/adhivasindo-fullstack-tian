import React from "react";
import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";
import "./Dashboard.css";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <div className="main-area">
        <Header />
        <div className="content-area">
          <Sidebar />
          <MainContent />
        </div>
      </div>

      <RightPanel />
    </div>
  );
}

export default Dashboard;
