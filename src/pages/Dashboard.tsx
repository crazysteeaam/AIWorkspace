import React, { useMemo, useState } from "react";
import { DashboardData, Stat, Property, InboxItem, Activity } from "../types";
import { formatCurrency } from "../utils/format";

interface Props {
  data: DashboardData;
  onOpenInbox: () => void;
}

const StatIcon: React.FC<{ statId: string }> = ({ statId }) => {
  if (statId === "notifications") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 8.5a6 6 0 0 1 12 0v3.5l1.5 2.4c.5.8 0 1.8-.9 1.8H5.4c-.9 0-1.4-1-.9-1.8L6 12V8.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 19c.3.6 1 1 2 1s1.7-.4 2-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (statId === "profit") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8.5 8.2C9.6 7 12 6.5 13.6 7.6c2.3 1.6.8 3.8-1.2 4.3-2.2.6-3.9 1.4-3.2 3.2.6 1.6 3.7 2.2 6 .4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14 5.3a4 4 0 1 1 4.7 4.7l-.8.3-.8 5.2a2 2 0 0 1-2 1.7H8.9a2 2 0 0 1-2-1.7L6 10.3l-.8-.3A4 4 0 1 1 9.8 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const TrendBadge: React.FC<{ stat: Stat }> = ({ stat }) => {
  if (!stat.trend) return null;
  const directionClass = stat.trend.direction === "up" ? "up" : "down";
  const symbol = stat.trend.direction === "up" ? "▲" : "▼";
  return (
    <span className={`trend ${directionClass}`}>
      {symbol} {stat.trend.value}
      {stat.id === "profit" ? "%" : ""}
    </span>
  );
};

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
  <div className="stat-card">
    <div className="stat-icon">
      <StatIcon statId={stat.id} />
    </div>
    <div style={{ flex: 1 }}>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-value">
        <span>{stat.value}</span>
        <TrendBadge stat={stat} />
      </div>
    </div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: "#9ca3af" }}>
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const PropertiesTable: React.FC<{ properties: Property[] }> = ({ properties }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Value</th>
        <th>Monthly Revenue</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {properties.map((property) => (
        <tr key={property.id}>
          <td className="property-cell">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6 15 12 9 18" stroke="#c5c7cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{property.address}</span>
          </td>
          <td>{property.type}</td>
          <td>{formatCurrency(property.value)}</td>
          <td>{formatCurrency(property.monthlyRevenue)}</td>
          <td>
            <a href="#">Edit</a>&nbsp;&nbsp;
            <a href={`mailto:${property.contactEmail}`}>Contact</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const InboxHighlightCard: React.FC<{ item: InboxItem; onClick: () => void }> = ({ item, onClick }) => {
  const labelColor =
    item.label === "Maintenance" ? "purple" : item.label === "Tenant" ? "blue" : item.label === "Payments" ? "green" : "orange";
  return (
    <div className="inbox-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="inbox-meta">
        <span className="inbox-title">{item.subject}</span>
        <span className="inbox-time">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="#b9bccc" strokeWidth="1.6" />
            <path d="M12 7v5l3 2" stroke="#b9bccc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {item.timestamp}
        </span>
      </div>
      <div style={{ margin: "6px 0 2px", color: "#2a2f3a", fontWeight: 700 }}>{item.sender}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6b7280", fontSize: 13, fontWeight: 600 }}>
        <span className={`tag ${labelColor}`} style={{ fontSize: 11, fontWeight: 700 }}>
          {item.label}
        </span>
        <span>{item.preview}</span>
      </div>
    </div>
  );
};

const ActivityList: React.FC<{ activities: Activity[] }> = ({ activities }) => (
  <div className="section section-plain timeline">
    <div className="section-title">
      <h3 style={{ margin: 0 }}>Recent Activity</h3>
    </div>
    {activities.map((activity, index) => {
      const tone =
        activity.status === "success"
          ? { bg: "#d2f3e0", color: "#0b9b67", icon: "$" }
          : activity.status === "warning"
          ? { bg: "#ffe7b8", color: "#d18b00", icon: "!" }
          : { bg: "#e4ecff", color: "#2b6ff4", icon: "✓" };
      return (
        <div key={activity.id} className="activity-item">
          <div className="timeline-dot" style={{ background: tone.bg, color: tone.color }}>
            <span className="timeline-icon">{tone.icon}</span>
          </div>
          <div className="activity-text">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ fontWeight: 700, color: "#1f2937", fontSize: 16 }}>{activity.title}</div>
              <div className="activity-time">{activity.timeAgo}</div>
            </div>
            <div style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.45 }}>{activity.detail}</div>
          </div>
          {index < activities.length - 1 && <div className="timeline-line" />}
        </div>
      );
    })}
  </div>
);

const DashboardPage: React.FC<Props> = ({ data, onOpenInbox }) => {
  const [properties, setProperties] = useState<Property[]>(data.properties);
  const [filterTerm, setFilterTerm] = useState<string>("");

  const filteredProperties = useMemo(() => {
    if (!filterTerm.trim()) return properties;
    const term = filterTerm.toLowerCase();
    return properties.filter(
      (p) => p.address.toLowerCase().includes(term) || p.type.toLowerCase().includes(term)
    );
  }, [properties, filterTerm]);

  const handleFilter = () => {
    const term = window.prompt("Filter properties by address or type:");
    if (term === null) return;
    setFilterTerm(term);
  };

  const handleAddProperty = () => {
    const address = window.prompt("New property address:");
    if (!address) return;
    const type = window.prompt("Property type (e.g., Apartment, Townhouse):") || "Apartment";
    const valueStr = window.prompt("Estimated value (numbers only):", "4428000");
    const revenueStr = window.prompt("Monthly revenue (numbers only):", "52800");
    const value = Number(valueStr) || 0;
    const monthlyRevenue = Number(revenueStr) || 0;
    const now = Date.now().toString();
    const newProperty: Property = {
      id: `new-${now}`,
      address,
      type,
      value,
      monthlyRevenue,
      contactName: "New Contact",
      contactEmail: "contact@example.com"
    };
    setProperties((prev) => [newProperty, ...prev]);
    setFilterTerm("");
  };

  return (
    <div className="page">
      <div className="dashboard-hero">
        <div className="greeting">Good Afternoon, {data.user.name}</div>
        <div className="search-shell">
          <div className="search-bar" style={{ maxWidth: 620 }}>
            <input className="search-input" placeholder="Ask Lintel anything about your properties" />
            <button className="search-send" aria-label="Ask">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h14M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="model-tag">Model: ChatGPT 5.1</div>
        </div>
      </div>

      <div className="dashboard-layout">
        <div className="main-column">
          <div className="stats-grid">
            {data.stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
          <div className="section section-outline">
            <div className="section-title">
              <h3 style={{ margin: 0 }}>All Properties</h3>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn ghost" onClick={handleFilter}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M8 12h8m-6 6h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="8" cy="6" r="1.2" fill="currentColor" />
                    <circle cx="14" cy="12" r="1.2" fill="currentColor" />
                    <circle cx="12" cy="18" r="1.2" fill="currentColor" />
                  </svg>
                  Filter
                </button>
                <button className="btn primary" onClick={handleAddProperty}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  Add Property
                </button>
              </div>
            </div>
            <PropertiesTable properties={filteredProperties} />
          </div>
        </div>

        <div className="right-pane">
          <div className="section section-plain">
            <div className="section-title">
              <h3 style={{ margin: 0 }}>Inbox</h3>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--primary)", fontWeight: 700 }}>
                View all
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {data.inboxHighlights.map((item) => (
                <InboxHighlightCard key={item.id} item={item} onClick={onOpenInbox} />
              ))}
            </div>
          </div>
          <ActivityList activities={data.activities} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
