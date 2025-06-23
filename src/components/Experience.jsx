import React from 'react';
import './Experience.css';
 
const jobs = [
  {
  role: "Senior Red Team Engineer",
  company: "WinnasAcademy",
  period: "Dec 2024 – Present",
  location: "Nairobi, Kenya",
  bullets: [
    "Led multiple simulated APT-style attacks to assess and harden institutional defenses.",
    "Built and deployed custom internal tools in Java and Go to emulate threat actor behavior undetected.",
    "Conducted source code reviews and exploit simulations on in-house platforms built with React.",
    "Collaborated closely with defensive teams in purple team engagements to test and improve detection capabilities.",
    "Delivered threat reports and training sessions focused on modern hacking techniques and how to prevent them."
  ],
  "tech": ["Java", "React", "Go", "MITRE ATT&CK", "AD Security", "Burp Suite", "Custom C2 Tools"]
},
  {
    role: 'Security Consultant',
    company: 'Infosec Solutions',
    period: '2022–2024',
    bullets: [
      'Conducted OWASP Top 10 audits for 20+ clients',
      'Built automated vuln scanner in Python with REST API',
      'Delivered workshops on exploit development & reverse engineering',
      'Discovered and responsibly disclosed 15+ critical vulnerabilities'
    ],
    tech: ['Python', 'Burp Suite', 'Metasploit', 'Reverse Engineering']
  }
];

const Experience = () => (
  <section id="experience" className="container">

    <section id="experience" className="experience-section">
  <h1 className="section-title">
    <span className="title-number">03.</span> Professional Experience
  </h1>

  <div className="experience-item">
    <h2>SoftwareFixingSoftware 1.0</h2>
    <p><strong>Full Stack Developer & Cybersecurity Engineer</strong></p>
    <p className="date-location">Jan 2023 – Present | Nairobi, Kenya</p>
    <ul className="experience-list">
      <li>Spearheaded secure full-stack development using <strong>Java (Spring Boot)</strong> and <strong>React.js</strong>, powering web apps resilient to modern attack vectors.</li>
      <li>Designed and optimized complex <strong>MSSQL</strong> database schemas, improving data integrity, access control, and scalability.</li>
      <li>Led internal penetration testing using <strong>Kali Linux</strong>, <strong>Burp Suite</strong>, and custom tools to mitigate vulnerabilities.</li>
      <li>Integrated <strong>Daraja M-PESA APIs</strong> for secure transactions compliant with local financial standards.</li>
      <li>Developed animated, interactive UI components using <strong>CSS</strong> and <strong>JavaScript</strong>.</li>
      <li>Collaborated on deployments via <strong>Vercel</strong>, <strong>GitHub</strong>, and secure VPS environments.</li>
    </ul>
  </div>

  <div className="experience-item">
    <h2>Independent Cybersecurity Consultant</h2>
    <p><strong>Freelance</strong></p>
    <p className="date-location">2021 – Present</p>
    <ul className="experience-list">
      <li>Performed <strong>vulnerability assessments</strong>, source code audits, and threat modeling for startups and SMEs.</li>
      <li>Built automation tools for reconnaissance and attacks using <strong>C, C++</strong>, and <strong>Python</strong>.</li>
      <li>Trained junior developers on <strong>secure coding</strong> and cybersecurity best practices.</li>
    </ul>
  </div>
</section>

    <div className="binary-bg" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="binary-code"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {Array.from({ length: 30 }).map((_, j) => (
            Math.round(Math.random()).toString()
          )).join(' ')}
        </div>
      ))}
    </div>
    
     
     
    <div className="timeline">
      {jobs.map((job, index) => (
        <div key={job.role} className={`timeline-item ${index % 1 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-card">
            <div className="timeline-header">
              <h3 className="job-title">{job.role}</h3>
              <div className="job-meta">
                <span className="job-company terminal-text">@ {job.company}</span>
                <span className="job-period">{job.period}</span>
              </div>
            </div>
            <ul className="job-bullets">
              {job.bullets.map((b, i) => (
                <li key={i} className="bullet-item">
                  <span className="bullet-icon">$</span> {b}
                </li>
              ))}
            </ul>
            <div className="job-tech">
              <span className="tech-label">Key Technologies:</span>
              <div className="tech-tags">
                {job.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;