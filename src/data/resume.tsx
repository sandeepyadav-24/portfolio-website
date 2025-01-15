import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sandeep Yadav",
  initials: "SY",
  url: "https://sandeepyadav.io",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer. I love building things and helping people. Very active on Twitter.",
  summary:
    "I am a full-stack developer skilled in [React, Node.js, Express.js, and MongoDB](#skills), with a strong focus on building scalable and efficient web applications. I also have experience in AI, Blockchain, and Web3 development. I have participated in [12+ hackathons across the country](/#hackathons), where I developed innovative projects and enjoyed collaborating in dynamic teams. Additionally, I completed an internship at [Triposaints](https://triposaints.com/), where I gained hands-on experience in building real-world applications and enhancing my technical skills.",
  avatarUrl: "https://avatars.githubusercontent.com/u/103882286?v=4",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "TailwindCSS",
    "MongoDB",
    "GraphQL",
    "Recoil",
    "C++",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sandeepyadav004343@gmail.com",
    tel: "+8076846925",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sandeepyadav-24",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sandeep-yadav-027500219/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sandeepyadav_24",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@sandeepyadav.24",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "sandeep yadav",
        url: "#sandeepyadav004343@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "tripo Saints",
      href: "https://www.triposaints.com/",
      badges: [],
      location: "Greater Noida",
      title: "Full Stack Developer Intern",
      logoUrl: "https://www.triposaints.com/jpeg%20logo.jpg",
      start: "July 2024",
      end: "September 2024 ",
      description:
        "Converted a website from Zoho to the MERN Stack by designing and implementing a scalable backend with Express.js and Node.js, optimizing features, and contributing valuable insights during team meetings.",
    },
  ],
  education: [
    {
      school: "ITS Engineering College, Greater Noida",
      href: "https://itsengg.edu.in/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAMFBMVEVHcEyfHiOfHiOfHiOfHiOfHiOfHiOfHiOfHiOfHiOfHiOfHiOfHiOfHiOfHiOfHiNTxVaJAAAAD3RSTlMAfs2Z8iwdPhFu2F2Psb01OoZmAAAA7ElEQVQ4jbWTSYKEIAxFiSABg+b+t62ESRHL7k39DUpeZjXmR6LwYlxhYfZfjIF2znoE0DpuGoDV7SXuRQXwkI+DOQ1WZ7EFlDNuwO4CbCDeIR7lTQC5ImjWg9Q1nbUEBU5ntR5DtmBCdY3itUjBV16T6c0e9aEAPfhObTS5IQwFwNJFwnFAMr21AFotTHvYuAM257lrOQGZh3sFSIuPIIqE4QG4TkVEMzAuhXECtMzbbG+AjmZFpAi2LmsGmmK+70AP2OVbEQWQ5miO0AEPSWQH1e+hAhs/yvwBpL6sL0Dt23tv8gLuevsB/60PuE0Y7fXsSVQAAAAASUVORK5CYII=",
      start: "2021",
      end: "2025",
    },
    {
      school: "Lingaya's Public School, Faridabad",
      href: "https://www.lps.edu.in/",
      degree: "Higher Secondary School",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1223109449558024194/XdmIf_cm_400x400.jpg",
      start: "2018",
      end: "2020",
    },
    {
      school: "The Cambridge International School, South Delhi",
      href: "https://cambridgeedu.in/",
      degree: "Secondary School",
      logoUrl: "https://cambridgeedu.in/assets/img/logo/2.png",
      start: "2013",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "AI Trip Planner",
      href: "https://enchanting-nougat-de94c1.netlify.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Your personal travel curator creating custom itineraries tailored to your interests, style, and budget. Experience travel planning reimagined.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://enchanting-nougat-de94c1.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sandeepyadav-24/ai-planner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aiplanner.png",
      video:
        "#https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Task Manager",
      href: "https://effervescent-donut-c37d8b.netlify.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed a task management app with a responsive dashboard for dynamic project tracking, task categorization, and real-time updates.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://effervescent-donut-c37d8b.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sandeepyadav-24/task-manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/taskmanager.png",
      video: "https://www.youtube.com/watch?v=_BNZLgxUUaI",
    },

    {
      title: "Conference Website",
      href: "https://icac2n.in",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a dynamic website for college conferences, serving 20,000+ visitors, while collaborating with clients to ensure a user-friendly design, managing the project timeline, and providing technical support for a seamless attendee experience.",
      technologies: [
        "React.js",
        "Typescript",
        "Javascript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Material UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://icac2n.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sandeepyadav-24/conference-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/conference.png",
      video:
        "#https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack With Delhi",
      dates: "May 20th, 2024",
      location: "GL Bajaj INstitute of technology, Greater Noida",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://hackwithdelhi.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fdf1717ea60f549a0851db2faafd29053%2Fassets%2Ffavicon%2F599.png&w=1440&q=75",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/sandeep-yadav-027500219_we-are-a-team-future-layoff-and-recently-activity-7198990361002692608--zEG?utm_source=combined_share_message&utm_medium=member_desktop_web",
        },
      ],
    },
    {
      title: "Code Cubicle",
      dates: "May 15th, 2024",
      location: "Eccosphere, Noida",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://code-cubicle-3.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fe83dad652a18447b9d4457187f23486a%2Fassets%2Ffavicon%2F287.png&w=1440&q=75",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/sandeep-yadav-027500219_hackathon-teamwork-innovation-activity-7197587724239867904-2E5o?utm_source=combined_share_message&utm_medium=member_desktop_web",
        },
      ],
    },
    {
      title: "Hack With India",
      dates: "April 6th, 2024",
      location: "Microsoft, Gurugram",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://hackwithindia.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F93bb38f73b0c4de89f7e5e53776a734d%2Fassets%2Ffavicon%2F238.png&w=1440&q=75",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sandeepyadav24.hashnode.dev/journey-of-innovation-from-hackwithindia-selection-to-microsoft-gurugram-pitch",
        },
        {
          title: "LinkedIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/sandeep-yadav-027500219_codefusion-microsoft-innovation-activity-7189888838394118144-BoAi?utm_source=combined_share_message&utm_medium=member_desktop_web",
        },
      ],
    },
    {
      title: "Hack Hound 2.0",
      dates: "April 5th, 2024",
      location: "SRM, Ghaziabad",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://hackhound-2.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F2f326f5b55db4afa9b453f7e43e3a2ec%2Fassets%2Ffavicon%2F803.jpeg&w=1440&q=75",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sandeepyadav-24/ArmorAssist/tree/main",
        },

        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sandeepyadav24.hashnode.dev/pushing-boundaries-my-journey-from-sleep-deprivation-to-success-at-srm-university-hackathon",
        },
      ],
    },
    {
      title: "Electrothon 6.0",
      dates: "March 8th, 2024",
      location: "NIT Hamirpur, Himachal Pradesh",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://electrothon6.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F37bbc16b525141d8ba22237d8aae592d%2Fassets%2Ffavicon%2F287.png&w=1440&q=75",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sandeepyadav-24/Avatar.AI",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=zmQRVH7C6Dk",
        },
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sandeepyadav24.hashnode.dev/embarking-on-an-electrifying-journey-my-experience-at-electrothon-60-nit-hamirpur",
        },
      ],
    },
    {
      title: "Hacked 2.0",
      dates: "March 1th, 2024",
      location: "BML Munjal University, Haryana",
      description:
        "Transform journaling: AI-powered platform for efficient creation, summarization & knowledge sharing.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65cc8fa0b6db1_hacked.jpg?d=200x200",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sandeepyadav-24/Notify",
        },
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: " https://sandeepyadav24.hashnode.dev/a-chronicle-of-creativity-my-unforgettable-journey-at-the-bml-munjal-college-hackathon",
        },
      ],
    },
    {
      title: "Open Hack",
      dates: "February 24th, 2024",
      location: "IISC, Bangalore",
      description:
        "Developed an advanced platform, integrating cutting-edge tech for seamless information retrieval, summarization and curation at Open Hack.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65bdd2d203d52_open_hack.png?d=200x200",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sandeepyadav-24/Article.Ai",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=KCcpZm_n9r0",
        },
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: " https://sandeepyadav24.hashnode.dev/navigating-the-open-hack-hackathon-a-fusion-of-web-development-and-machine",
        },
      ],
    },
    {
      title: "Hack Street",
      dates: "February 7th, 2024",
      location: "Jaypee Institute Of Information Technology, Noida",
      description:
        "Book Bridge, a community-driven platform for sharing and borrowing books! Explore our diverse collection by browsing or searching for titles, authors, or genres. Found a book you love? Request it and arrange a convenient pickup or delivery with the lender. Have books to share? Add them to the collection and connect with fellow readers. Enjoy your borrowed books and return them on time to keep our community thriving. Join us in building connections and sharing the joy of reading!",
      image:
        "https://hackstreet.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fa835955286a4480b9fb76f93bc11d7e9%2Fassets%2Ffavicon%2F288.png&w=1440&q=75",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sandeepyadav-24/BookBridge",
        },
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: " https://sandeepyadav24.hashnode.dev/bridging-minds-my-jaypee-noida-hackathon-journey",
        },
      ],
    },
    {
      title: "Smart India hackathon",
      dates: "November 7th, 2023",
      location: "ITS Engineering College, Greater Noida",
      description:
        "Developed a mock website of student dropout analysis system for Tackling School Dropout Rates in Gujarat Villages ",
      image: "https://qasih.mic.gov.in/img/favicon-sih.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aditya-AKP/Sih2k23",
        },
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sandeepyadav24.hashnode.dev/my-experience-at-the-smart-india-hackathon-tackling-school-dropout-rates-in-gujarat-villages",
        },
      ],
    },
    {
      title: "Hack Xtreme",
      dates: "October 5, 2023",
      location: "IIT Delhi",
      description:
        "CodeMeet is a real-time code collaboration web application that allows multiple users to collaborate on code in the same virtual room. It's built using the MERN (MongoDB, Express.js, React, Node.js) stack and Socket.IO for real-time communication.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65170274b7c11_screenshot_2023-09-08-23-24-24-00_92460851df6f172a4592fca41cc2d2e6.jpg?d=200x200",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sandeepyadav-24/CodeMeet/tree/main",
        },
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: " https://sandeepyadav24.hashnode.dev/cracking-the-code-my-experience-at-the-iit-delhi-hackathon",
        },
      ],
    },
  ],
} as const;
