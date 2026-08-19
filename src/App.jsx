import React, { useState } from 'react';
import { 
  Mail, 
  Code, 
  Users, 
  Terminal,
  Cpu,
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Award,
  Layers,
  Database,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

// Custom Brand SVGs to guarantee zero export errors
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.81 9.81 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.17 8.17 0 0 1-5.82 2.41c-1.46 0-2.9-.39-4.17-1.13l-.3-.18-3.1 0.81.83-3.02-.2-.32a8.18 8.18 0 0 1-1.25-4.39c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.4c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06s-1.05-.39-2-1.23c-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.18-.48-.31z"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  const profile = {
    name: "SHUBHA V N",
    role: "Senior Full Stack Developer & Tech Lead",
    experience: "4+ Years",
    location: "Shivamogga, Karnataka, India",
    email: "nadigshubhav@gmail.com",
    whatsapp: "https://wa.me/918217493872",
    linkedin: "https://www.linkedin.com/in/shubha-v-n-871405226",
    resumeLink: "/Nadig-Shubha.pdf",
    summary: "Experienced Full stack developer with 4+ years of experience in designing, and developing web application. Proficient in Laravel framework and PHP to build secure and high-performance applications. Expertise in REST API development and third party API integrations."
  };

  const engineeringPrinciples = [
    { title: "API-First Architecture", desc: "Decoupled, strictly-typed RESTful endpoints built for modularity and high performance." },
    { title: "Defensive Security & Reliability", desc: "Automated failovers, zero-downtime ledger consistency, and strict transaction verification." },
    { title: "Team Engineering Standards", desc: "Sprint planning in Jira, strict PR code reviews, and mentoring junior engineers." }
  ];

  const skills = [
    { 
      category: "Backend Developer", 
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      items: ["PHP / Laravel", "Node.js / Express", "Python (Django/Flask)", "RESTful APIs", "Cron Schedulers", "Database Optimization"] 
    },
    { 
      category: "Front-End Developer", 
      icon: <Layers className="w-5 h-5 text-teal-400" />,
      items: ["HTML/CSS", "Bootstrap", "JavaScript", "Angular", "Tailwind CSS","React.js"] 
    },
    { 
      category: "Databases & Cloud Ops", 
      icon: <GitBranch className="w-5 h-5 text-cyan-400" />,
      items: ["MySQL", "PostgreSQL", "MsSQL", "Azure App Services", "Git Flow", "Application Deployment"] 
    },
    { 
      category: "Integrations & Leadership", 
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      items: ["Payment Gateways (Razorpay)", "OpenAI & HeyGen APIs", "Team Leadership", "Code Reviews", "Mentorship", "Project Management"] 
    }
  ];

  const projects = [
    {
      title: "Trading Application",
      category: "trade",
      desc: "Trading application through which trader can buy and sell stock automatically. Fetch live stock data, built automated trading logic for pre-defined strategies. ",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      metric: "Project"
    },
    {
      title: "HRMS",
      category: "enterprise",
      desc: "Engineered real-time sync for hardware biometric terminals handling concurrent attendance records for 1,000+ active personnel.",
      tech: ["HTML","CSS","JavaScript","Laravel", "MsSQL"],
      metric: "Project"
    },
    {
      title: "AI Chatbot",
      category: "ai",
      desc: "Integrated the OpenAI Chat API, HeyGen AI Video generator to generate a video.",
      tech: ["Python", "Flask", "OpenAI API", "HeyGen AI API"],
      metric: "Project"
    },
    {
      title: "Education ERP Solutions",
      category: "enterprise",
      desc: "Solution for complete College administration, finance section & exam section & Academic activities of student attendances, section allocations.",
      tech: ["Laravel", "MySQL", "JavaScript", "HTML/CSS"],
      metric: "Team Lead"
    },
    {
      title: "Logistic Solutions",
      category: "enterprise",
      desc: "Application for booking to transport goods from source to destination.",
      tech: ["HTML", "CSS", "Django","JavaScript", "Node.js", "MsSQL"],
      metric: "Worked on Existing Project"
    },
    {
      title: "Warehouse Management System ",
      category: "enterprise",
      desc: "Warehouse Management System for efficient inventory tracking, stock management, and order processing.",
      tech: ["Angular", "Python", "Django", "PostgreSQL"],
      metric: "Personal Project"
    }
  ];

  const experiences = [
    {
      role: "Full Stack Developer & Team Lead",
      company: "Step In Technologies",
      period: "Nov 2021 – July-2026",
      location: "Shivamogga, Karnataka",
      highlights: [
        "Responsible for designing and development of new requirement features, by implementing the new modern technologies.",
        "Experience in leading a team of 5-6 individuals for achieving project goals and requirements.",
        "Provided guidance, support, and mentorship to team members to enhance performance and professional development.",
        "Experience in API integrations like Payment gateway."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Government First Grade College",
      location: "Shivamogga, Karnataka",
      year: "Graduated 2021",
      score: "89% Aggregate (Distinction)",
      highlights: [
        "Specialized in Software Engineering, Database Management Systems, and Algorithmic Logic.",
        "Graduated with top academic honors (89% distinction score)."
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans tracking-normal antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Sticky Header */}
      <nav className="border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-black tracking-tight text-emerald-400 flex items-center gap-2">
            Shubha V N
          </span>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
          </div>

          <a 
            href={profile.resumeLink}
            download
            className="px-4 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition-all text-sm font-bold flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <header id="about" className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-6 md:w-2/3">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Opportunities</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{profile.name}</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            {profile.summary}
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            {/* <a 
              href={profile.whatsapp} 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all flex items-center gap-2 text-sm shadow-lg shadow-emerald-950/50"
            >
              <WhatsAppIcon /> Let's Talk on WhatsApp
            </a> */}

            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center gap-2 text-sm shadow-lg shadow-blue-950/50"
            >
              <LinkedInIcon /> LinkedIn Profile
            </a>

            <a 
              href={`mailto:${profile.email}`} 
              className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold transition-all flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4 text-emerald-400" /> Email
            </a>
          </div>
        </div>

        {/* Engineering Specs Card */}
        <div className="w-full md:w-1/3 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Users className="text-emerald-400 w-5 h-5" />
            <h3 className="font-bold text-slate-200 text-sm tracking-wider uppercase"></h3>
          </div>

          <div className="space-y-4 pt-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-normal">Leadership:</span>
              <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 text-xs">Team Lead (5–6 Devs)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-normal">Total Experience:</span>
              <span className="text-slate-200 font-semibold">4+ Years</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-normal">Primary Stack:</span>
              <span className="text-slate-200 font-semibold">Laravel / PHP</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-normal">Degree:</span>
              <span className="text-emerald-400 font-semibold">BCA (89% Distinction)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-normal">Infrastructure:</span>
              <span className="text-slate-200 font-semibold">Azure & Web Hosting</span>
            </div>
          </div>
        </div>
      </header>

      {/* Leadership & System Philosophy */}
      {/* <section id="leadership" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringPrinciples.map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-slate-100 font-bold text-base mb-1.5">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Technical Stack */}
      <section id="skills" className="bg-slate-900/40 py-20 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-emerald-400 w-7 h-7" />
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Technical Architecture & Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-2.5 mb-4">
                  {group.icon}
                  <h3 className="text-slate-100 text-base font-bold tracking-wide">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-950 text-slate-300 rounded-md text-xs font-semibold border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <Cpu className="text-emerald-400 w-7 h-7" /> Quantified Engineering Projects
            </h2>
            <p className="text-slate-400 text-base mt-2 font-normal">Enterprise platforms, high-concurrency engines, and AI pipelines.</p>
          </div>

          <div className="flex gap-2 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-semibold">
            {['all', 'enterprise', 'ai', 'fintech'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded capitalize transition-all ${
                  activeTab === tab 
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
              <div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20 inline-block mb-3">
                  {project.metric}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2.5">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-normal">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="bg-slate-900/40 py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="text-emerald-400 w-7 h-7" />
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Professional Leadership & Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-8 relative pl-8 border-l-4 border-l-emerald-500 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-emerald-400 font-semibold text-sm mt-0.5">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3 text-sm text-slate-300 pt-2 font-normal">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standalone Education Section */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="text-emerald-400 w-7 h-7" />
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Education & Background</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    {edu.score}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{edu.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-slate-400 text-sm font-medium mb-4">{edu.institution}, {edu.location}</p>

                <ul className="space-y-2.5 text-sm text-slate-300 border-t border-slate-800/80 pt-4 font-normal">
                  {edu.highlights.map((point, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Senior Developer Footer / Contact Bar */}
      <footer className="border-t border-slate-800 bg-slate-900/80 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-extrabold text-white tracking-tight">Shubha V N</span>
            <p className="text-xs text-slate-400 mt-1 font-normal">Full Stack Developer & Team Lead • {profile.location}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2">
              <WhatsAppIcon /> Let's Chat
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition-all flex items-center gap-2">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-white transition-all flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> {profile.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}