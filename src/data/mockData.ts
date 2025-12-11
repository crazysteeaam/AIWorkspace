import { AppData } from "../types";

export const mockData: AppData = {
  dashboard: {
    user: { name: "George" },
    stats: [
      {
        id: "notifications",
        label: "New notifications",
        value: "7",
        trend: { direction: "up", value: 7 }
      },
      {
        id: "profit",
        label: "Monthly rent profit",
        value: "$65,580",
        trend: { direction: "up", value: 3 }
      },
      {
        id: "maintenance",
        label: "Maintenance requests",
        value: "5",
        trend: { direction: "down", value: 2 }
      }
    ],
    properties: [
      {
        id: "p1",
        address: "456 River Rd, Chicago, IL",
        type: "Apartment",
        value: 4428000,
        monthlyRevenue: 52800,
        contactName: "Alex T.",
        contactEmail: "alex.t@propertymail.com"
      },
      {
        id: "p2",
        address: "3025 Meadow Ridge Ct, Boston, MA",
        type: "Townhouse",
        value: 4428000,
        monthlyRevenue: 52800,
        contactName: "Jocelyn Gu",
        contactEmail: "jocelyn.gu@propertymail.com"
      },
      {
        id: "p3",
        address: "1182 Cypress Grove Rd, Vancouver, BC",
        type: "Single Family",
        value: 4428000,
        monthlyRevenue: 52800,
        contactName: "Aaron K.",
        contactEmail: "aaron.k@propertymail.com"
      },
      {
        id: "p4",
        address: "589 Wesbrook Ave, Vancouver, BC",
        type: "Apartment",
        value: 4428000,
        monthlyRevenue: 52800,
        contactName: "Dustin Wang",
        contactEmail: "dustin.wang@propertymail.com"
      },
      {
        id: "p5",
        address: "821 Pine Hollow Dr, Austin, TX",
        type: "Multiplex",
        value: 4428000,
        monthlyRevenue: 52800,
        contactName: "Alex T.",
        contactEmail: "alex.t@propertymail.com"
      },
      {
        id: "p6",
        address: "1840 Ridgecrest Dr, Portland, OR",
        type: "Townhouse",
        value: 4428000,
        monthlyRevenue: 52800,
        contactName: "Aaron K.",
        contactEmail: "aaron.k@propertymail.com"
      },
      {
        id: "p7",
        address: "729 Harbor Bend Rd, Miami, FL",
        type: "Townhouse",
        value: 4428000,
        monthlyRevenue: 52800,
        contactName: "Jocelyn Gu",
        contactEmail: "jocelyn.gu@propertymail.com"
      }
    ],
    inboxHighlights: [
      {
        id: "ih1",
        sender: "Jocelyn Gu",
        subject: "Inquiry About Fixtures",
        preview: "Hi George, I was writing...",
        label: "Maintenance",
        timestamp: "5 hrs ago",
        unread: true
      },
      {
        id: "ih2",
        sender: "Dustin Wang",
        subject: "Plumbing Follow-Up",
        preview: "Need a quick check on...",
        label: "Maintenance",
        timestamp: "7 hrs ago"
      },
      {
        id: "ih3",
        sender: "Aaron K.",
        subject: "Lease Extension",
        preview: "Can we review the lease...",
        label: "Tenant",
        timestamp: "Yesterday"
      }
    ],
    activities: [
      {
        id: "a1",
        title: "Payment received",
        detail: "Monthly from Alex T. · 456 River Rd, Chicago",
        timeAgo: "4 hrs ago",
        status: "success"
      },
      {
        id: "a2",
        title: "Payment received",
        detail: "Monthly from Aaron K. · 589 Wesbrook Ave, Vancouver",
        timeAgo: "12 hrs ago",
        status: "success"
      },
      {
        id: "a3",
        title: "Maintenance completed",
        detail: "HVAC Repair · 821 Pine Hollow Dr, Austin",
        timeAgo: "1d ago",
        status: "info"
      },
      {
        id: "a4",
        title: "Maintenance request",
        detail: "Plumbing issue",
        timeAgo: "2d ago",
        status: "warning"
      }
    ]
  },
  inbox: {
    items: [
      {
        id: "m1",
        threadId: "t1",
        sender: "Spark Chen",
        subject: "Lease Renewal Contract",
        preview: "Hi George, I was writing to inquire about...",
        label: "Tenant",
        timestamp: "1d",
        unread: true
      },
      {
        id: "m2",
        threadId: "t1",
        sender: "Spark Chen",
        subject: "Lease Renewal Contract",
        preview: "Hi George, I was writing to inquire about...",
        label: "Maintenance",
        timestamp: "1d"
      },
      {
        id: "m3",
        threadId: "t1",
        sender: "Spark Chen",
        subject: "Lease Renewal Contract",
        preview: "Hi George, I was writing to inquire about...",
        label: "Payments",
        timestamp: "1d"
      },
      {
        id: "m4",
        threadId: "t1",
        sender: "Spark Chen",
        subject: "Lease Renewal Contract",
        preview: "Hi George, I was writing to inquire about...",
        label: "Tenant",
        timestamp: "1d"
      },
      {
        id: "m5",
        threadId: "t1",
        sender: "Spark Chen",
        subject: "Lease Renewal Contract",
        preview: "Hi George, I was writing to inquire about...",
        label: "Agencies",
        timestamp: "1d"
      },
      {
        id: "m6",
        threadId: "t1",
        sender: "Spark Chen",
        subject: "Lease Renewal Contract",
        preview: "Hi George, I was writing to inquire about...",
        label: "Payments",
        timestamp: "1d"
      },
      {
        id: "m7",
        threadId: "t1",
        sender: "Spark Chen",
        subject: "Lease Renewal Contract",
        preview: "Hi George, I was writing to inquire about...",
        label: "Legal",
        timestamp: "1d"
      },
      {
        id: "m8",
        threadId: "t1",
        sender: "Spark Chen",
        subject: "Lease Renewal Contract",
        preview: "Hi George, I was writing to inquire about...",
        label: "Advertisements",
        timestamp: "1d"
      }
    ],
    threads: [
      {
        id: "t1",
        subject: "Lease Renewal Contract",
        summary:
          "The tenant acknowledges the upcoming lease renewal and asks the property manager for proposed terms, rent changes, and renewal options. They ask about maintenance items and want a draft agreement.",
        actionItems: [
          "Send proposed renewal terms and any rent updates",
          "Draft agreement and share maintenance follow-ups",
          "Offer a call before finalizing and returning documents"
        ],
        conversationWith: "Spark Chen",
        messages: [
          {
            id: "msg1",
            from: "Spark Chen",
            to: "George Wang",
            body:
              "Hi George,\n\nI hope you’re doing well. Since my lease is coming up for renewal, could you share the proposed terms, including any rent changes and available renewal options? I also have a couple of small maintenance items I’d like to clarify before finalizing next steps.\n\nIf possible, please send over a draft of the renewal agreement. I’m happy to hop on a quick call if that’s easier, and I’ll review and return the documents once received.\n\nThanks so much!\nBest,\nGeorge Wang",
            timestamp: "Today, 9:32 AM",
            direction: "inbound"
          }
        ]
      }
    ]
  }
};
