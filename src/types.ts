export type TrendDirection = "up" | "down";

export interface Trend {
  direction: TrendDirection;
  value: number;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  trend?: Trend;
}

export interface Property {
  id: string;
  address: string;
  type: string;
  value: number;
  monthlyRevenue: number;
  contactName: string;
  contactEmail: string;
}

export interface InboxItem {
  id: string;
  threadId?: string;
  sender: string;
  subject: string;
  preview: string;
  label: "Tenant" | "Maintenance" | "Payments" | "Agencies" | "Legal" | "Advertisements" | "General";
  timestamp: string;
  unread?: boolean;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  body: string;
  timestamp: string;
  direction: "inbound" | "outbound";
}

export interface InboxThread {
  id: string;
  subject: string;
  summary: string;
  actionItems: string[];
  conversationWith: string;
  messages: Message[];
}

export interface Activity {
  id: string;
  title: string;
  detail: string;
  timeAgo: string;
  status: "success" | "info" | "warning";
}

export interface DashboardData {
  user: {
    name: string;
  };
  stats: Stat[];
  properties: Property[];
  inboxHighlights: InboxItem[];
  activities: Activity[];
}

export interface InboxData {
  items: InboxItem[];
  threads: InboxThread[];
}

export interface AppData {
  dashboard: DashboardData;
  inbox: InboxData;
}
