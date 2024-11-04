import { Outlet } from "react-router-dom";
import "./dashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout">
      {/* Sidebar with chats info and history */}
      <div className="menu">MENU</div>

      {/* ========DASHBOARD . contains DashboardPage and ChatPage ===================*/}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
