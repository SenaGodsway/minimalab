interface Project {
  id: number;
  name: string;
  tagline: string;
  links: { label: string; url: string }[];
  description: string;
  images: string[];
}

export const getProjects = async () => {
  const projects: Project[] = [
    {
        id: 4,
        name: "Scoutweave",
        tagline: "AI-powered recruiting made simple",
        description:
          "ScoutWeave is a modern ATS that helps HR teams and recruiters attract, manage, and hire the best talent faster. It streamlines hiring with smart job campaigns, AI-powered resume parsing, and intelligent candidate matching—plus collaboration workflows and analytics to support better, faster decisions.",
        links: [{ label: "Website", url: "https://www.scoutweave.com" }],
        images: [],
      },

    {
      id: 2,
      name: "Code & Cocktails",
      tagline: "Streamline Your Event Check-Ins",
      description:
        "Code & Cocktails is a Flutter-based ticket verification and management app for events. It enables organizers to scan QR codes for instant verification and real-time status checks, view analytics on ticket sales, check-ins, and attendance, search and filter attendees by name, email, or phone number, track check-in status with visual indicators, export verified ticket data to Excel or CSV, filter tickets by type (Early Bird, Squad packages, etc.) and view ticket details (pricing, quantity, coupon codes), and maintain a complete history of scanned tickets with offline caching for reliable access.",
      links: [],
      images: [],
    },
    {
      id: 3,
      name: "MyHealth",
      tagline: "MyHealth: Your Holistic Digital Health Companion",
      description:
        "MyHealth is your comprehensive digital health companion designed to help you take control of your well-being. With an intuitive interface and a multitude of features, MyHealth aims to streamline and enhance your health management experience in today’s fast-paced world.",
      links: [],
      images: [],
    },

    {
        id: 4,
        name: "BaddieSociety",
        tagline: "Tap Into Your Inner Baddie",
        description:
          "BaddieSociety is the ultimate m-commerce app for women who love fashion and want to slay the game. With BaddieSociety you can shop the latest trends and styles from top brands and designers, get inspired by curated collections, lookbooks and influencers and shop the looks you love with just a few taps, enjoy exclusive deals, discounts, and rewards you won’t find anywhere else, and join a community of fierce and fabulous women who support each other and share their passion for fashion.",
        links: [],
        images: [],
      },

    {
      id: 5,
      name: "Accraaa",
      tagline: "Ghana's #1 Dining & Nightlife App",
      description:
        "Where Should You Go? Find the perfect restaurant, bar, or club. See live crowd levels. Book your table in seconds. Every spot in Accra, one app.",
      links: [],
      images: [],
    },
  ];
  return projects;
};

export const getProjectById = async (id: number) => {
  const projects = await getProjects();
  const project = projects.find((project) => project.id === id);
  return project;
};
