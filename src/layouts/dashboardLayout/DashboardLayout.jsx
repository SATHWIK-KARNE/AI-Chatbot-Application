import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChatList from "../../components/chatList/ChatList";

const DashboardLayout = () => {
  // Route protection: Only signedIn users should see dashboard
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  //so non-signedIn users => redirect to sign-in
  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);
  if (!isLoaded) return "Loading....";

  return (
    <div className="dashboardLayout">
      {/* Sidebar with chat options and history */}
      <div className="menu">
        <ChatList />
      </div>

      {/* ========DASHBOARD . contains DashboardPage and ChatPage ===================*/}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
