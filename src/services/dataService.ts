import { AppData, DashboardData, InboxData } from "../types";
import { mockData } from "../data/mockData";

// Simulates backend endpoints to make it easy to swap with real APIs later.
class DataService {
  async fetchAppData(): Promise<AppData> {
    return mockData;
  }

  async fetchDashboard(): Promise<DashboardData> {
    return mockData.dashboard;
  }

  async fetchInbox(): Promise<InboxData> {
    return mockData.inbox;
  }
}

export const dataService = new DataService();
