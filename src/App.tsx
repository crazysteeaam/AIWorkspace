import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
import InboxPage from "./pages/Inbox";
import { DashboardData, InboxData } from "./types";
import { dataService } from "./services/dataService";

type View = "dashboard" | "inbox";

const App: React.FC = () => {
  const [view, setView] = useState<View>("dashboard");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [inboxData, setInboxData] = useState<InboxData | null>(null);

  useEffect(() => {
    dataService.fetchDashboard().then(setDashboardData);
    dataService.fetchInbox().then(setInboxData);
  }, []);

  if (!dashboardData || !inboxData) {
    return <div style={{ padding: 40, fontWeight: 700 }}>Loading workspace...</div>;
  }

  const pageTitle = view === "dashboard" ? "Dashboard" : "Inbox";

  return (
    <div className="app-shell">
      <Sidebar active={view} onNavigate={setView} />
      <div className="frame">
        <header className="top-bar">
          <div className="top-title">{pageTitle}</div>
        </header>
        <main className="content">
          {view === "dashboard" ? (
            <DashboardPage data={dashboardData} onOpenInbox={() => setView("inbox")} />
          ) : (
            <InboxPage data={inboxData} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
