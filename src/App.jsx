import React, { useState, useEffect } from 'react';
import { 
  Mail, Linkedin, Github, FileText, Database, 
  Cpu, Layout, ChevronRight, Moon, Sun, 
  Terminal, Code2, Monitor, Rocket, Zap, Target
} from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["High-Scale Backend Systems", "Intelligent Finance Platforms", "AI-Driven Infrastructure"];

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = titles[loopIndex % titles.length];
      const updatedText = isDeleting 
        ? currentFullText.substring(0, displayText.length - 1)
        : currentFullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex, typingSpeed]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-100 dark:selection:bg-indigo-900 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter text-indigo-700 dark:text-indigo-400 uppercase">
            Tusar Ranjan Mahapatra
          </span>
          
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-900 rounded-full p-1 border border-slate-200 dark:border-slate-800">
              <a href="/tusar-portfolio/retro.html" target="_blank" className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all text-slate-500 hover:text-indigo-600" title="Retro Mode"><Monitor size={18} /></a>
              <a href="/tusar-portfolio/editor.html" target="_blank" className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all text-slate-500 hover:text-indigo-600" title="IDE Mode"><Code2 size={18} /></a>
              <a href="/tusar-portfolio/console.html" target="_blank" className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all text-slate-500 hover:text-indigo-600" title="System Console"><Terminal size={18} /></a>
            </div>

            <button onClick={() => setIsDark(!isDark)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:ring-2 ring-indigo-500 transition-all">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* DOWNLOAD CTA */}
            <a 
              href="/tusar-portfolio/Tusar-Ranjan-Mahapatra.pdf" 
              download 
              className="bg-slate-900 dark:bg-indigo-500 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all shadow-sm flex items-center gap-2"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('/tusar-portfolio/profile.png')`, backgroundSize: 'cover', backgroundPosition: 'right 20%' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/10 to-transparent dark:from-slate-950 dark:via-slate-950/20 dark:to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-4xl space-y-8">
            
            {/* Career Status Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-xs font-bold border border-indigo-600/20 dark:border-indigo-400/20 backdrop-blur-md shadow-sm">
              <Rocket size={14} className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <span>Sr. Software Engineer @ Providence Global Center</span>
            </div>
            
            <h1 className="font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white">
              <span className="text-6xl md:text-8xl">Designing</span> <br />
              <span className="relative text-5xl md:text-6xl min-h-[1.2em] inline-flex items-center mt-2">
                {displayText.split(' ').map((word, index, array) => {
                  const isLastWord = index === array.length - 1 && array.length > 1;
                  return (
                    <span 
                      key={index} 
                      className={isLastWord 
                        ? "text-slate-950 dark:text-white font-black drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" 
                        // UPDATED: Opacity set to 100% in dark mode (removed /30)
                        : "text-indigo-600/70 dark:text-indigo-400"
                      }
                    >
                      {word}{index !== array.length - 1 ? '\u00A0' : ''}
                    </span>
                  );
                })}
                <span className="ml-1 inline-block bg-indigo-600 dark:bg-indigo-400 animate-pulse" style={{ width: '2px', height: '1em', verticalAlign: 'middle' }}></span>
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
              Specializing in high-performance cloud systems and AI infrastructure. Currently developing 
              simulation engines that transform complex financial data into actionable enterprise intelligence.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a href="https://www.linkedin.com/in/tusar-ranjan-mahapatra/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110"><Linkedin size={28}/></a>
              <a href="https://github.com/tusarmahapatra" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110"><Github size={28}/></a>
              <a href="mailto:tusar.mahapatra@gmail.com" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110"><Mail size={28}/></a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Impact Section */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-4xl font-black mb-16 text-slate-900 dark:text-white">Featured Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImpactCard 
            icon={<Rocket className="text-orange-500" />}
            title="AI-Integrated Workflows"
            description="Revolutionized collaboration by architecting a Python-based MCP framework, bringing LLM capabilities directly into enterprise communication streams."
            metric="System Lead"
          />
          <ImpactCard 
            icon={<Zap className="text-yellow-500" />}
            title="Performance Engineering"
            description="Engineered a 30% reduction in report latency for executive dashboards through deep SQL Server optimization and intelligent indexing strategies."
            metric="30% Faster"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 bg-slate-50/50 dark:bg-slate-900/20 rounded-[3rem]">
        <h2 className="text-4xl font-black mb-16 text-slate-900 dark:text-white">Professional Journey</h2>
        <div className="space-y-32">
          <WorkStory 
            role="Senior Software Engineer" 
            company="Providence India" 
            period="Apr 2024 – Present"
            story="Leading backend architecture for an enterprise Finance Data Reporting platform. I built a financial data simulation engine that reduced planning cycle time by 40% and optimized SQL Server performance to cut report latency by 30%. Architected and developed a scalable Python-based MCP framework to enable deterministic AI responses via Microsoft Teams."
            tags={[".NET", "Azure", "Python", "SQL Server", "MCP", "Terraform"]}
          />
          <WorkStory 
            role="Software Engineer 1" 
            company="Providence India" 
            period="Jul 2022 – Apr 2024"
            story="Developed a computer vision and NLP-based diagnostic platform for blood smear analysis, currently under patent evaluation. I also implemented automated API unit testing using xUnit to ensure regression safety and integrated SuccessFactors data through Azure Data Factory pipelines."
            tags={["React", "Python", "MLOps", "Azure Data Factory", "xUnit"]}
          />
          <WorkStory 
            role="Software Engineering Intern" 
            company="Providence India" 
            period="Jan 2022 – Jun 2022"
            story="Architected an ML-driven incident intelligence platform using Python and NLP to automate service incident classification. This system reduced average resolution time from 3 hours to ~35 minutes. I also delivered real-time Power BI dashboards to visualize key incident KPIs."
            tags={["Python", "NLP", "Machine Learning", "Power BI", "ServiceNow"]}
          />
          <WorkStory 
            role="Engineering & UX Design Intern" 
            company="HighRadius" 
            period="Jan 2021 – Jan 2022"
            story="Contributed to a B2B Fintech platform using Java and React, incorporating ML-based anomaly detection. I optimized REST APIs and SQL queries to improve response times by 20% and conducted UX research to prototype autonomous accounting workflows."
            tags={["Java", "SQL", "React", "UX Research", "Fintech"]}
          />
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-4xl font-black mb-16 text-slate-900 dark:text-white">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SkillCard icon={<Database className="text-indigo-600" />} title="Infrastructure" skills={[".NET", "Python", "SQL Server", "Azure", "Distributed Systems"]} />
          <SkillCard icon={<Cpu className="text-indigo-600" />} title="Intelligence" skills={["MCP", "NLP", "LLMs", "MLOps", "Azure Databricks"]} />
          <SkillCard icon={<Layout className="text-emerald-600" />} title="Experience" skills={["React", "Figma", "UX Lifecycle", "Product Thinking"]} />
        </div>
      </section>

      <footer className="py-12 text-center border-t border-slate-100 dark:border-slate-800">
        <p className="text-slate-400 font-medium italic">"Building Scalable Data-Intensive Systems"</p>
        <p className="text-slate-500 text-sm mt-4">© {new Date().getFullYear()} Tusar Ranjan Mahapatra. All rights reserved.</p>
      </footer>
    </div>
  );
};

const ImpactCard = ({ icon, title, description, metric }) => (
  <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">{icon}</div>
      <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full">{metric}</span>
    </div>
    <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">{description}</p>
  </div>
);

const WorkStory = ({ role, company, period, story, tags }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div className="lg:col-span-4">
      <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-2 uppercase tracking-wider">{period}</p>
      <h3 className="text-3xl font-black text-slate-900 dark:text-white">{role}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-bold text-lg">{company}</p>
      <div className="flex flex-wrap gap-2 mt-6">
        {tags.map(t => <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 rounded uppercase">{t}</span>)}
      </div>
    </div>
    <div className="lg:col-span-8">
      <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
        {story}
      </p>
    </div>
  </div>
);

const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all group">
    <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-800 inline-block rounded-2xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">{icon}</div>
    <h3 className="text-xl font-bold mb-6 dark:text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map(s => <span key={s} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-300 rounded-md text-xs font-bold">{s}</span>)}
    </div>
  </div>
);

export default App;