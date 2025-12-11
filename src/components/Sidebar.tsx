import React from "react";

type View = "dashboard" | "inbox";

interface Props {
  active: View;
  onNavigate: (view: View) => void;
}

const icons = {
  home: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 9.5 12 3l8 6.5V21a1 1 0 0 1-1 1h-4.5V14h-5V22H5a1 1 0 0 1-1-1V9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  building: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="10" height="18" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 7h4a1 1 0 0 1 1 1v11h-5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 7h3M7.5 11h3M7.5 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  dollar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16M15.5 7.5c-1.5-1.5-5.5-1.5-5.5 1.2 0 3 6.5 1.8 6.5 5 0 3-4 3.3-5.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  wrench: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M13.5 11.5 20 5a5 5 0 0 0-6.8 6.8L7 18l-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  ),
  doc: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  settings: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="m19.4 15.5-.9 1.6 1.2 2.1-1.8 1.8-2.1-1.2-1.6.9-.3 2.3h-2.6l-.3-2.3-1.6-.9-2.1 1.2-1.8-1.8 1.2-2.1-.9-1.6-2.3-.3v-2.6l2.3-.3.9-1.6L4.2 7.6l1.8-1.8 2.1 1.2 1.6-.9.3-2.3h2.6l.3 2.3 1.6.9 2.1-1.2 1.8 1.8-1.2 2.1.9 1.6 2.3.3v2.6l-2.3.3Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  help: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9.5 8.5c.4-1 1.3-1.5 2.5-1.5 1.3 0 2.5.8 2.5 2.2 0 1.6-1.4 2-2.4 2.7-.6.5-.6 1.1-.6 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="17.5" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
};

const Sidebar: React.FC<Props> = ({ active, onNavigate }) => {
  return (
    <aside className="sidebar">
      <div className="logo">Li</div>
      <button className={`nav-button ${active === "dashboard" ? "active" : ""}`} onClick={() => onNavigate("dashboard")} aria-label="Dashboard">
        {icons.home}
      </button>
      <button className={`nav-button ${active === "inbox" ? "active" : ""}`} onClick={() => onNavigate("inbox")} aria-label="Inbox">
        {icons.mail}
      </button>
      <button className="nav-button" aria-label="Properties">
        {icons.building}
      </button>
      <button className="nav-button" aria-label="Financials">
        {icons.dollar}
      </button>
      <button className="nav-button" aria-label="Maintenance">
        {icons.wrench}
      </button>
      <button className="nav-button" aria-label="Documents">
        {icons.doc}
      </button>
      <div className="sidebar-spacer" />
      <button className="nav-button" aria-label="Settings">
        {icons.settings}
      </button>
      <button className="nav-button" aria-label="Help">
        {icons.help}
      </button>
    </aside>
  );
};

export default Sidebar;
