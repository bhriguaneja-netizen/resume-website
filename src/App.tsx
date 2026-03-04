import { Mail, MapPin, Phone, Cpu, Briefcase, GraduationCap, Code } from 'lucide-react';
import './App.css';

function App() {
  const experiences = [
    {
      company: "APPLE",
      title: "Project Data Manager",
      period: "Sep 2025 – Present",
      bullets: [
        "Leading the design of GenAI agents to manage end-to-end data insights, specifically automating WoW TDM analysis.",
        "Directing the automated WW BPR Portfolio Health Report in Jazz for global leadership.",
        "Managing the induction of regional project data into Apple-internal Data Platform (AiDP)."
      ]
    },
    {
      company: "AMAZON MUSIC",
      title: "Data PM / BI Strategist",
      period: "Jun 2024 – Sep 2025",
      bullets: [
        "Owned data product roadmap for engagement analytics, leveraging AI for 7% uplift in weekly users.",
        "Managed global data vendor relationships and DQ integrations for competitor platforms.",
        "Designed strategic BI dashboards in QuickSight for high-stakes investment decisions."
      ]
    },
    {
      company: "APPLE",
      title: "Data Analysis and Insights Strategy",
      period: "Jun 2023 – Feb 2024",
      bullets: [
        "Managed lifecycle of massive-scale vehicle fleet data (Radar/Sensor) for autonomous systems safety.",
        "Directed development of telemetry data pipelines and critical program milestones."
      ]
    },
    {
      company: "META",
      title: "Data Analyst / Program Lead",
      period: "Jun 2021 – Jun 2023",
      bullets: [
        "Managed data product roadmap for global facilities, optimizing culinary and infrastructure expenditures.",
        "Partnered with Finance to identify $12M in cost-savings through supply chain optimization."
      ]
    }
  ];

  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <h1>Bhrigu Aneja</h1>
          <p className="subtitle">Senior Data Product Manager</p>
          <div className="contact-info">
            <span><MapPin size={16} /> San Francisco Bay Area</span>
            <span><Phone size={16} /> 650-919-3898</span>
            <span><Mail size={16} /> bhriguaneja@gmail.com</span>
          </div>
          <p className="summary">
            Senior Data Product Manager with 15+ years of experience leading high-stakes data operations and AI automation at <strong>Apple, Amazon, Meta, Walmart, and IBM</strong>. Expert at architecting end-to-end insights portals and GenAI agents that automate complex business processes.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h2 className="section-title"><Cpu size={20} /> Core Competencies</h2>
          <div className="competencies-grid">
            <div className="card competency">
              <h3>Hybrid Management</h3>
              <p>Product Roadmaps, BPR, Value Stream Mapping, Stakeholder Strategy.</p>
            </div>
            <div className="card competency">
              <h3>AI & Automation</h3>
              <p>GenAI Agent Development, Automated WoW Analysis, LLM Data Ingestion.</p>
            </div>
            <div className="card competency">
              <h3>Technical Expertise</h3>
              <p>SQL (Expert), Snowflake, Python, dbt, AWS QuickSight, Tableau.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title"><Briefcase size={20} /> Professional Experience</h2>
          <div className="timeline">
            {experiences.map((exp, i) => (
              <div key={i} className="timeline-item card">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="bullets">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="two-col">
          <section className="section">
            <h2 className="section-title"><Code size={20} /> Technical Skills</h2>
            <div className="card">
              <div className="skill-group">
                <strong>Data:</strong> SQL (Expert), Snowflake, Python, dbt, AWS, Splunk.
              </div>
              <div className="skill-group">
                <strong>Tools:</strong> Tableau, Looker, Jira, Wrike, Jazz, Radar.
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title"><GraduationCap size={20} /> Education</h2>
            <div className="card">
              <div className="education-item">
                <strong>MBA</strong> - Boston University (Exp. 2026)
              </div>
              <div className="education-item">
                <strong>MSIT</strong> - Panjab University
              </div>
              <div className="education-item">
                <strong>BSIT</strong> - Manipal University
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Bhrigu Aneja. Built for professional impact.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
