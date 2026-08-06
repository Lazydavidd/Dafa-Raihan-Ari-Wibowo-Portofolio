import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Gundam Verse",
    role: "FRONTEND DEVELOPER",
    date: "DECEMBER 2025",
    category: "fullstack",
    description: [
      "Developed a highly responsive Single Page Application (SPA) showcasing Gundam data.",
      "Integrated external RESTful APIs to fetch and display dynamic items efficiently.",
      "Implemented real-time search, catalog sorting, and fluid filtering features for seamless navigation.",
    ],
    tags: ["react.js", "tailwindcss", "restfulapis", "vercel"],
    githubUrl: "https://github.com/Lazydavidd/GundamVerse.git",
  },
  {
    title: "Acara Tiket",
    role: "FULLSTACK DEVELOPER",
    date: "JULY 2025",
    category: "fullstack",
    description: [
      "Developed a complete event ticketing platform with CRUD operations for managing events, orders, and payment transactions.",
      "Integrated Midtrans Snap SDK to handle online payments securely, including Webhook transaction updates.",
      "Built a clean user ticket ordering flow and an administration dashboard for event organizers.",
    ],
    tags: [
      "react",
      "typescript",
      "node.js",
      "express",
      "mongodb",
      "midtransapi",
    ],
    githubUrl: "https://github.com/Lazydavidd/front-end-acara.git",
  },
  {
    title: "Website Wedding Jewepe",
    role: "FULLSTACK DEVELOPER",
    date: "JULY 2024",
    category: "fullstack",
    description: [
      "Developed Jewepe, a wedding website allowing users to browse packages, make reservations, and manage bookings.",
      "Built an integrated administrative dashboard to manage CRUD operations for reservations.",
      "Organized the backend architecture using MVC (Model-View-Controller) structure for scalability.",
    ],
    tags: ["php", "codeigniter", "bootstrap", "mysql"],
    githubUrl: "https://github.com/yourusername/wedding-jewepe",
  },
  {
    title: "Lunar Kitchen (Food Ordering Site)",
    role: "FULLSTACK DEVELOPER",
    date: "AUGUST 2023",
    category: "fullstack",
    description: [
      "Created a responsive, interactive online menu for food ordering.",
      "Stored orders and customer queries securely inside a MySQL relational database.",
      "Integrated WhatsApp API dynamically via JS client to push immediate orders directly to admin.",
    ],
    tags: ["javascript", "php", "mysql", "bootstrap", "whatsappapi"],
    githubUrl: "https://github.com/Lazydavidd/Fullstack-F-B-Order-online.git",
  },
  {
    title: "DQ Fashion Lab | Retail Sales & Revenue Performance Analytics",
    role: "PORTOFOLIO | DATA ANALYST",
    date: "AUGUST 2026",
    category: "data & ai",
    description: [
      "Analyzed over 236,000+ sold units and Rp 59.9B+ in total revenue across 5 fashion categories, evaluating transactional values and key revenue drivers.",
      "Structured data aggregation models using advanced Excel logic (SUMPRODUCT) and DAX relational measures (SUMX + RELATED) for dynamic financial reporting.",
      "Uncovered key performance metrics across monthly sales trends, holiday seasonality impacts (e.g., Idul Fitri spikes), and top-selling product categories (Gaun & Atasan).",
    ],
    tags: ["excel", "dax", "power-bi", "pivot-tables", "data-modeling"],
    githubUrl: "https://github.com/yourusername/predictive-sales-ml",
  },
];
