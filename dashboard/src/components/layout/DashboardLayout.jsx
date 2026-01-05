import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="left-layout">
        <Sidebar />
      </div>
      <aside className="right-layout">
        <header style={{ color: "white" }}>
          <Header />
        </header>
        <main>{children}</main>
      </aside>
    </div>
  );
};

export default DashboardLayout;
