import baddieSocietyImg from "../../assets/images/works//Screenshot from 2025-12-04 09-45-21.png";
import codeAndCocktailsImg from "../../assets/images/works/cokeandcocktails.png";
import myHealthImg from "../../assets/images/works/myHealth.png";
import nourishNowImg from "../../assets/images/works/nourishNow.png";
import accraImg from "../../assets/images/works/Screenshot from 2025-06-28 04-34-30.png";
import scoutWeaveImg from "../../assets/images/works/scoutWeave.png";


export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  content: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Baddies Society",
    description:
      "Tap Into Your Inner Baddie",
    imageSrc: baddieSocietyImg,
    content: "BaddieSociety is the ultimate m-commerce app for women who love fashion and want to slay the game. With BaddieSociety, you can shop the latest trends from top brands, get inspired by curated collections, enjoy exclusive deals, and join a community of fierce, fabulous women who share a passion for fashion.",
  },
  {
    id: 2,
    title: "Code&Cocktails",
    description:
      "Streamline Your Event Check-Ins",
    imageSrc: codeAndCocktailsImg,
    content: "Code & Cocktails is a Flutter-based ticket verification and management app for event organizers. It enables instant QR code scanning, real-time attendance analytics, attendee search, and check-in status tracking. Organizers can export data, filter by ticket type, and maintain a complete scan history with offline caching for efficient entry management.",
  },
  {
    id: 3,
    title: "MyHealth",
    description:
      "MyHealth: Your Holistic Digital Health Companion",
    imageSrc: myHealthImg,
    content: "In today's fast-paced world, staying on top of your health can be a challenge. MyHealth is your comprehensive digital health companion designed to empower you in taking control of your well-being. With its intuitive interface and a multitude of features, MyHealth aims to streamline and enhance your health management experience.",
  },
  {
    id: 4,
    title: "NourishNow",
    description:
      "Your Personalized Nutrition Journey",
    imageSrc: nourishNowImg,
    content: "Deliver personalized nutrition coaching, meal planning, and education online, now enhanced with vital check-up record integration to support clients with health conditions or wellness goals.",
  },
  {
    id: 5,
    title: "Accra",
    description:
      "Ghana's #1 Dining & Nightlife App",
    imageSrc: accraImg,
    content: "Where should you go? Find the perfect restaurant, bar, or club. See live crowd levels. Book your table in seconds. Every spot in Accra, all in one app.",
  },
  {
    id: 6,
    title: "ScoutWeave",
    description:
      "Transform Your Hiring Process with AI-Powered Insights",
    imageSrc: scoutWeaveImg,
    content: "ScoutWeave is the modern ATS that helps HR teams and recruiters attract, manage, and hire the best talent faster. Streamline your entire hiring workflow with intelligent automation and powerful candidate matching.",
  },
];