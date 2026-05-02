// Mock job data - Replace with API calls in production
export const jobsData = {
  1: {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "TechFlow Seattle",
    location: "Seattle, WA",
    description:
      "We are looking for a Senior Frontend Engineer specialized in React and modern tools to build immersive experiences for our cloud platform.",
    salary: "$90k - $270k",
    type: "Full-time",
    experience: "Senior",
    category: "Engineering",
    postedDaysAgo: "7 days ago",
    logo: "/home/demo_company_log_1.png",
    about:
      "We are looking for a talented and experienced Senior Frontend Engineer to join our team in the Pacific Northwest. We are building a next-generation cloud optimization platform to disrupt the market and we need bright and passionate minds to join us. The ideal candidate will bring their expertise in React, TypeScript, Next.js, and modern frontend architecture to craft high-quality user experiences that our customers love. As a Senior Frontend Engineer, you will lead the development of our platform's user interface, ensuring top performance, accessibility, and UX. You are a detail-oriented professional who thrives in a fast-paced environment and has a passion for writing clean, maintainable code.",
    responsibilities: [
      "Lead the design and development of web-based user interface and dashboard product",
      "Mentor junior and mid level engineers through code reviews and workshops",
      "Collaborate with Product Designers to implement intuitive seamless, accessible UX",
      "Optimize application performance for large datasets",
    ],
    requirements: [
      "5+ years of professional experience with React and TypeScript",
      "Proficiency in modern build tools (Webpack, Vite, Turbopack)",
      "Experience with state management (Redux, Zustand, or XState)",
      "Strong understanding of web performance optimization techniques",
    ],
    benefits: [
      {
        title: "Competitive salary and equity package",
      },
      {
        title: "Full health, dental, and vision insurance",
      },
      {
        title: "Flexible working hours and hybrid options",
      },
      {
        title: "Annual learning and development budget",
      },
    ],
    companyAbout:
      "TechFlow Seattle is a pioneering technology company based in the heart of Seattle, dedicated to building innovative cloud solutions that empower businesses to scale efficiently. With a team of passionate engineers, designers, and product managers, we're shaping the future of cloud infrastructure.",
  },
  2: {
    id: 2,
    title: "Product Designer",
    company: "Creative Portland",
    location: "Portland, OR",
    description:
      "Join our design team to revolutionize how people connect in the Pacific Northwest through beautiful and functional UX.",
    salary: "$80k - $150k",
    type: "Full-time",
    experience: "Mid-level",
    category: "Design",
    postedDaysAgo: "1 day ago",
    logo: "/home/demo_company_log_2.png",
    about:
      "Join our design team to revolutionize how people connect in the Pacific Northwest through beautiful and functional UX. We're looking for a creative and strategic Product Designer to help us build intuitive, user-centered products that make a real difference in people's lives.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with engineers to ensure design implementation",
      "Maintain and evolve design systems",
    ],
    requirements: [
      "3+ years of product design experience",
      "Proficiency in Figma and design systems",
      "Strong portfolio demonstrating UX/UI skills",
      "Understanding of accessibility standards",
    ],
    benefits: [
      {
        title: "Competitive compensation",
        icon: "DollarSign",
      },
      {
        title: "Health and wellness benefits",
        icon: "Heart",
      },
      {
        title: "Remote-friendly culture",
        icon: "Home",
      },
      {
        title: "Creative workspace",
        icon: "Palette",
      },
    ],
    companyAbout:
      "Creative Portland is a design-first company that creates beautiful digital experiences for modern users. We believe in the power of great design to transform businesses and improve lives.",
  },
  3: {
    id: 3,
    title: "Marketing Specialist",
    company: "Banner Media",
    location: "Portland, OR",
    description:
      "Drive growth and brand awareness for the top tech companies in the PNW area.",
    salary: "$60k - $90k",
    type: "Full-time",
    experience: "Entry-level",
    category: "Marketing",
    postedDaysAgo: "4 days ago",
    logo: "/home/demo_company_log_3.png",
    about:
      "Drive growth and brand awareness for the top tech companies in the PNW area. We're looking for an energetic Marketing Specialist to join our growing team and help our clients reach new heights.",
    responsibilities: [
      "Develop and execute marketing campaigns",
      "Manage social media channels",
      "Create compelling content for various platforms",
      "Analyze campaign performance and metrics",
    ],
    requirements: [
      "2+ years of marketing experience",
      "Strong written and verbal communication skills",
      "Experience with marketing automation tools",
      "Data-driven mindset",
    ],
    benefits: [
      {
        title: "Competitive salary",
        icon: "DollarSign",
      },
      {
        title: "Professional development",
        icon: "BookOpen",
      },
      {
        title: "Flexible schedule",
        icon: "Clock",
      },
      {
        title: "Team events",
        icon: "Users",
      },
    ],
    companyAbout:
      "Banner Media is a leading marketing agency helping tech companies amplify their brand and reach. We combine creativity with data-driven strategies to deliver exceptional results.",
  },
  4: {
    id: 4,
    title: "Mobile App Developer",
    company: "Evergreen Apps",
    location: "Portland, OR",
    description:
      "Develop high-performance iOS and Android applications using React Native.",
    salary: "$85k - $130k",
    type: "Full-time",
    experience: "Senior",
    category: "Engineering",
    postedDaysAgo: "10 days ago",
    logo: "/home/demo_company_log_4.png",
    about:
      "Develop high-performance iOS and Android applications using React Native. We're seeking a talented Mobile App Developer to build the next generation of mobile experiences that delight users and drive business growth.",
    responsibilities: [
      "Build cross-platform mobile applications",
      "Optimize app performance and user experience",
      "Integrate with backend APIs and services",
      "Collaborate with designers and product managers",
    ],
    requirements: [
      "4+ years of mobile development experience",
      "Expert knowledge of React Native",
      "Experience with native iOS/Android development",
      "Understanding of mobile app deployment processes",
    ],
    benefits: [
      {
        title: "Competitive compensation",
        icon: "DollarSign",
      },
      {
        title: "Full benefits package",
        icon: "Heart",
      },
      {
        title: "Work from anywhere",
        icon: "Globe",
      },
      {
        title: "Latest tech & tools",
        icon: "Cpu",
      },
    ],
    companyAbout:
      "Evergreen Apps creates innovative mobile solutions that help businesses connect with their customers. We're passionate about crafting beautiful, performant mobile experiences.",
  },
};

// Get all jobs as an array
export const getAllJobs = () => {
  return Object.values(jobsData);
};

// Get a single job by ID
export const getJobById = (id) => {
  return jobsData[id] || null;
};

// Get featured jobs (first 4)
export const getFeaturedJobs = () => {
  return getAllJobs().slice(0, 4);
};
