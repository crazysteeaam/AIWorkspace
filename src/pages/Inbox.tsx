import React, { useMemo, useState } from "react";
import { InboxData, InboxItem, InboxThread } from "../types";

interface Props {
  data: InboxData;
}

const labelTone: Record<InboxItem["label"], { bg: string; color: string }> = {
  Tenant: { bg: "var(--badge-blue)", color: "#0f58ff" },
  Maintenance: { bg: "var(--badge-purple)", color: "#5c4dd1" },
  Payments: { bg: "var(--badge-green)", color: "#0f8c5f" },
  Agencies: { bg: "var(--badge-orange)", color: "#c87300" },
  Legal: { bg: "#f9e8ff", color: "#8c2fb8" },
  Advertisements: { bg: "#fff2e0", color: "#d46600" },
  General: { bg: "#eef2f7", color: "#4b5563" }
};

const MailRow: React.FC<{
  item: InboxItem;
  active: boolean;
  onSelect: () => void;
}> = ({ item, active, onSelect }) => {
  const tone = labelTone[item.label];
  return (
    <div className={`mail-row ${active ? "active" : ""}`} onClick={onSelect}>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 2 }}>{item.sender}</div>
        <div style={{ fontWeight: 700, color: "#1f2937", fontSize: 15 }}>{item.subject}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
          <span className="mail-preview" style={{ fontSize: 13 }}>
            {item.preview}
          </span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, minWidth: 80 }}>
        <span
          className="mail-badge"
          style={{ background: tone.bg, color: tone.color, padding: "4px 10px", borderRadius: 12, border: `1px solid ${tone.color}` }}
        >
          {item.label}
        </span>
        <span style={{ color: "#6b7280", fontSize: 12 }}>{item.timestamp}</span>
      </div>
    </div>
  );
};

const ThreadView: React.FC<{ thread: InboxThread }> = ({ thread }) => (
  <div className="thread">
    <div className="page-header" style={{ marginBottom: 14 }}>
      <div>
        <div style={{ color: "#94a3b8", fontSize: 13, letterSpacing: 0.1 }}>Inbox</div>
        <div className="greeting" style={{ fontSize: 22, marginTop: 4, marginBottom: 0 }}>
          {thread.subject}
        </div>
      </div>
    </div>

    <div className="summary-row">
      <div className="summary-card">
        <div className="ai-title">AI Summary</div>
        <div style={{ color: "#374151", lineHeight: 1.6 }}>{thread.summary}</div>
        <div style={{ marginTop: 10, fontWeight: 700, color: "#1f2937" }}>Action Items:</div>
        <ul className="action-list">
          {thread.actionItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="summary-actions">
        <button className="summary-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M7 7h10M7 12h10M7 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          Regenerate Summary
        </button>
        <div className="summary-ask">
          <div style={{ fontWeight: 700, marginBottom: 6, color: "#1f2937" }}>Any questions?</div>
          <div className="ask-input">
            <input className="ask-field" placeholder="Ask something..." />
            <button className="ask-send" aria-label="Send question">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
      <div className="avatar-circle">{thread.conversationWith.slice(0, 2)}</div>
      <div>
        <div style={{ fontWeight: 800, fontSize: 15 }}>{thread.conversationWith}</div>
        <div style={{ color: "#6b7280", fontSize: 13 }}>to me</div>
      </div>
    </div>
    {thread.messages.map((message) => (
      <div key={message.id} style={{ marginBottom: 16 }}>
        <div style={{ color: "#6b7280", fontSize: 13, marginBottom: 6 }}>{message.timestamp}</div>
        <div style={{ lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{message.body}</div>
      </div>
    ))}

    <div className="composer-wrap">
      <div className="avatar-circle muted">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" fill="#b5bdcc" />
          <path d="M5.5 19.5c0-3 2.9-4.5 6.5-4.5s6.5 1.5 6.5 4.5" stroke="#b5bdcc" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="composer">
        <textarea placeholder="Type something..." />
        <div className="composer-actions">
          <div className="composer-toolbar">
            <button className="icon-btn" aria-label="Formatting">Aa</button>
            <button className="icon-btn" aria-label="Bold">B</button>
            <button className="icon-btn" aria-label="Italic">I</button>
            <button className="icon-btn" aria-label="Underline">U</button>
            <button className="icon-btn" aria-label="Strikethrough">S</button>
            <button className="icon-btn" aria-label="Attach">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12.8 14.3 7.5c1.5-1.5 3.6-1.5 5 0 1.4 1.4 1.4 3.5 0 4.9l-6.7 6.7c-2.3 2.3-5.9 2.3-8.2 0-2.3-2.3-2.3-5.9 0-8.2L11 6" stroke="#9aa3b5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 12a4 4 0 0 1 4-4h2.2" stroke="#9aa3b5" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M16 12a4 4 0 0 1-4 4H9.8" stroke="#9aa3b5" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M10 12h4" stroke="#9aa3b5" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <button className="icon-btn" aria-label="More">⋯</button>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn ghost">Draft an Email</button>
            <button className="btn primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InboxPage: React.FC<Props> = ({ data }) => {
  const [selectedThreadId, setSelectedThreadId] = useState<string>(data.items[0]?.threadId ?? data.threads[0]?.id ?? "");
  const [selectedItemId, setSelectedItemId] = useState<string>(data.items[0]?.id ?? "");

  const selectedThread = useMemo(
    () => data.threads.find((thread) => thread.id === selectedThreadId) ?? data.threads[0],
    [data.threads, selectedThreadId]
  );

  return (
    <div className="page">
      <div className="inbox-layout">
        <div className="mail-list">
          <div className="mail-toolbar">
            <button className="btn ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M8 12h8m-6 6h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="6" r="1" fill="currentColor" />
                <circle cx="14" cy="12" r="1" fill="currentColor" />
                <circle cx="12" cy="18" r="1" fill="currentColor" />
              </svg>
              Filter
            </button>
            <button className="btn primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              New Message
            </button>
          </div>
          <div className="mail-items">
            {data.items.map((item) => (
              <MailRow
                key={item.id}
                item={item}
                active={item.id === selectedItemId}
                onSelect={() => {
                  setSelectedItemId(item.id);
                  setSelectedThreadId(item.threadId ?? data.threads[0]?.id ?? "");
                }}
              />
            ))}
          </div>
        </div>
        {selectedThread && <ThreadView thread={selectedThread} />}
      </div>
    </div>
  );
};

export default InboxPage;
