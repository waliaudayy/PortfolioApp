"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Award,
  GraduationCap,
  Code,
  Database,
  Wrench,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "education",
        "awards",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    programming: ["Java", "Python", "JavaScript", "HTML", "CSS"],
    frameworks: [
      "SpringBoot",
      "Hibernate",
      "React.js",
      "Tailwind CSS",
      "Next.js",
    ],
    database: ["SQL", "MySQL", "MongoDB"],
    tools: ["MySQL Workbench", "VS Code", "GitHub", "Postman"],
  };

  const projects = [
    {
      title: "GenVWebsters.com",
      reference: "https://genvwebsters.com/",
      description:
        "Contributed to designing and developing the website's UI using Next.js, Tailwind CSS, and Framer Motion, ensuring a responsive and visually appealing layout.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      highlights: [
        "Built responsive UI design components for the Components page",
        "Enhanced user engagement and maintained design consistency",
      ],
    },
    {
      title: "Spread the Smile: Donation Platform",
      reference:
        "https://github.com/waliaudayy/Spread-the-Smile-Donation-Platform",
      description:
        "Designed and developed scalable backend services using Spring Boot, following REST architecture principles.",
      technologies: ["Spring Boot", "MySQL", "REST API", "Postman"],
      highlights: [
        "Managed database operations with schema design and query optimization",
        "Unit Testing and validation of RESTful APIs using Postman",
        "Ensured performance optimization, reusability, and maintainability",
      ],
    },
  ];

  const awards = [
    { platform: "HackerRank", skill: "SQL", stars: 4 },
    { platform: "HackerRank", skill: "Java", stars: 3 },
    { platform: "HackerRank", skill: "Python", stars: 3 },
  ];

  const strengths = [
    "Good Communicator",
    "Problem-solving",
    "Quick learner with growth mindset",
    "Attention to detail",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Uday Walia
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "About",
                "Skills",
                "Projects",
                "Education",
                "Awards",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Uday Walia
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              B Tech graduate in ECE with a PGD in Advanced Computing,
              specializing in software and full-stack development. Adept at
              managing complex tasks in fast-paced environments with a sharp eye
              for detail and process optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Professional Profile
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      As a B Tech graduate in Electronics and Communication
                      Engineering with a Post Graduate Diploma in Advanced
                      Computing, I specialize in software and full-stack
                      development. My expertise lies in managing complex tasks
                      in fast-paced environments while maintaining attention to
                      detail and optimizing processes.
                    </p>
                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>Kurukshetra, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>waliaudayy23@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-purple-400" />
                      <span>9467412356</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Core Strengths
                    </h3>
                    <div className="space-y-3">
                      {strengths.map((strength) => (
                        <div key={strength} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                          <span className="text-gray-300">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Code className="w-5 h-5 text-blue-400" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Wrench className="w-5 h-5 text-purple-400" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Database className="w-5 h-5 text-green-400" />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Wrench className="w-5 h-5 text-orange-400" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-orange-500/20 text-orange-300 border-orange-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    <a
                      href="#"
                      onClick={() =>
                        project.reference &&
                        window.open(project.reference, "_blank")
                      }
                    >
                      {project.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-blue-400/30 text-blue-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Courses
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  Post Graduation Diploma in Advanced Computing
                </CardTitle>
                <CardDescription className="text-gray-300">
                  CDAC Delhi, New Delhi • March 2024 - August 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3">
                  Topics covered: C++, Java, web applications, web servers,
                  Spring Boot, .NET, C#, operating systems, and Software
                  development methodologies
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  B.Tech in Electronics and Communication Engineering
                </CardTitle>
                <CardDescription className="text-gray-300">
                  The University Institute of Engineering & Technology,
                  Kurukshetra University • September 2019 - June 2023
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Award className="w-5 h-5 text-green-400" />
                  Introduction to Data Analytics
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Coursera (affiliated by Meta) • July 2023 - August 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3">
                  Topics covered: MS Excel, SQL, Power BI, OSEMN framework, Data
                  visualization
                </p>
                <p className="text-gray-300">
                  Built hands-on proficiency in Excel dashboards, Power BI, SQL
                  queries, and the OSEMN framework for data wrangling and
                  visualization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Award className="w-12 h-12 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {award.platform}
                  </h3>
                  <p className="text-gray-300 mb-3">{award.skill}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < award.stars
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {award.stars} Stars
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm always interested in new opportunities and exciting
                    projects. Let's connect and discuss how we can work
                    together!
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <a
                    href="mailto:waliaudayy23@gmail.com"
                    className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400 text-sm">
                        waliaudayy23@gmail.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:9467412356"
                    className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group"
                  >
                    <Phone className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400 text-sm">9467412356</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/uday-walia-a34a6723b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <p className="text-gray-400 text-sm">Connect with me</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Uday Walia. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
