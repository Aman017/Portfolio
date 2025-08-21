import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I’m a passionate full stack developer who loves building web applications that are easy to use and look great. I enjoy working with front-end technologies like React.js and Next.js, and back-end tools like Node.js and MongoDB. As a fresher, I’m eager to learn, grow my skills, and create projects that provide a smooth and enjoyable experience for users.`;

export const ABOUT_TEXT = `I’m a dedicated and enthusiastic full stack developer with a love for building efficient and user-friendly web applications. I enjoy working with technologies like React, Next.js, Node.js, and MongoDB. I started learning web development out of curiosity, and now I’m excited to keep learning, take on new challenges, and create projects that make a difference. I enjoy collaborating with others, solving problems, and exploring new tools and technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Finance-Tracker",
    image: project1,
    description:
      "A modern personal finance tracker built with React.js and Firebase. It lets users add, edit, and categorize income and expenses, visualize spending patterns with interactive charts, and manage budgets seamlessly in a responsive interface.",
    technologies: ["HTML", "CSS", "React.js", "ReactDOM", "Firebase"],
    link: "https://finance-tracker-mu-lemon.vercel.app/",
    
  },
  {
  title: "Weather App",
  image: project2,
  description:
    "A responsive weather application that provides real-time weather updates by city search. It displays temperature, humidity, and conditions with a clean and user-friendly interface.",
  technologies: ["HTML", "CSS", "React.js", "API Integration"],
  link: "https://weather-app-ten-xi-12.vercel.app/",
 
},

{
  title: "PassOp+ Password Manager",
  image: project3,
  description:
    "A secure and efficient password manager web application that allows users to store, manage, and protect their credentials safely.",
  technologies: ["HTML", "CSS","React", "Tailwind CSS", "Local Storage"],
  link: "https://pass-op-plus.vercel.app/",
  
},
 {
  title: "Hotel Landing Page",
  image: project4,
  description:
    "A responsive hotel landing page designed to showcase hotel services, amenities, and booking options with a modern UI.",
  technologies: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
  link: "https://hotle-page.vercel.app/",
},

];

export const CONTACT = {
  address: "FARIDABAD || HARYANA || 12004 ",
  
  email: "amanmalik0135@gmail.com",
};
