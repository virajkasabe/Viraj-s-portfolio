import React from 'react'
import ProjectCard from './components/ProjectCard.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import useInView from './hooks/useInView.jsx'
import PhotoSection from './components/PhotoSection.jsx'
import './styles.css'

const projects = [
  {
    title: 'Recipe Book',
    desc: 'A web app to store and browse recipes with user authentication and MySQL-backed storage.',
    tech: 'HTML, CSS, JavaScript, PHP, MySQL',
    github: 'https://github.com/virajkasabe'
  },
  {
    title: 'Currency Converter',
    desc: 'Desktop-style Java application that converts currencies using an Exchange Rate API with HTTP requests.',
    tech: 'Java, Exchange Rate API, HTTP Requests',
    github: 'https://github.com/virajkasabe'
  },
  {
    title: 'Netflix Recommendation System',
    desc: 'Frontend app using movie API to surface personalized recommendations.',
    tech: 'HTML, CSS, JavaScript, Movie API',
    github: 'https://github.com/virajkasabe'
  },
  {
    title: 'Travel & Tourism Website',
    desc: 'Full-featured tourism website with Node.js backend and MySQL database.',
    tech: 'HTML, CSS, JavaScript, Node.js, MySQL',
    github: 'https://github.com/virajkasabe'
  },
  {
    title: 'Agrotech / Farmer Assistance Project',
    desc: 'A practical site to help farmers access information and tools to improve yields.',
    tech: 'HTML, CSS, JavaScript',
    github: 'https://github.com/virajkasabe'
  }
]

function App() {
  return (
    <div className="app-root">
      <header className="hero" id="home">
        <div className="container">
          <div className="hero-copy">
            <h1 className="name">Viraj Kasabe</h1>
            <p className="title">Software Engineer | Full Stack Developer</p>
            <p className="tagline">I build practical, maintainable web applications focused on real-world problems.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="https://github.com/virajkasabe" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href="#contact">Contact</a>
            </div>
          </div>
          <PhotoSection src="/profile.jpg" alt="profile" />
        </div>
      </header>

      <main className="container">
        {(() => {
          const [ref, inView] = useInView()
          return (
            <section ref={ref} id="about" className={`section ${inView ? 'reveal' : ''}`}>
              <SectionTitle title="About" />
              <p>
                As a passionate and driven individual, I am excited to connect with like-minded people. With my unique blend of skills and experiences, I aim to make a positive impact in the world. I am a Computer Science student with a focus on full stack development and problem solving, building practical applications that make tasks easier and more efficient.
              </p>
              <p>When I'm not working, you can find me reading books and cooking—my favorite free time activities.</p>
            </section>
          )
        })()}

        {(() => {
          const [ref, inView] = useInView()
          return (
            <section ref={ref} id="skills" className={`section ${inView ? 'reveal' : ''}`}>
              <SectionTitle title="Skills" />
              <div className="skills-grid">
            <div className="skill-card">
              <h4>Languages</h4>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL / MySQL</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Frontend</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Backend / Database</h4>
              <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>MS Excel</li>
                <li>Data Structure</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Soft Skills</h4>
              <ul>
                <li>Teamwork</li>
                <li>Leadership</li>
                <li>Time Management</li>
                <li>Effective Communication</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Languages</h4>
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Marathi</li>
              </ul>
            </div>
              </div>
            </section>
          )
        })()}

        {(() => {
          const [ref, inView] = useInView()
          return (
            <section id="projects" className={`section ${inView ? 'reveal' : ''}`}>
              <SectionTitle title="Projects" />
              <div ref={ref} className={`projects-grid ${inView ? 'reveal' : ''}`}>
                {projects.map((p, idx) => (
                  <ProjectCard
                    key={p.title}
                    index={idx}
                    title={p.title}
                    description={p.desc}
                    tech={p.tech}
                    github={p.github}
                  />
                ))}
              </div>
            </section>
          )
        })()}

        {(() => {
          const [ref, inView] = useInView()
          return (
            <section ref={ref} id="experience" className={`section ${inView ? 'reveal' : ''}`}>
              <SectionTitle title="Experience" />
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Full Stack Developer</h4>
                  <p className="muted">Silicon Mount Tech Limited, Virtual — Dec 2025 – Present</p>
                </div>
                <div className="timeline-item">
                  <h4>HR Role</h4>
                  <p className="muted">Sanyukti Organization — Dec 2025 – Jan 2026</p>
                </div>
              </div>
            </section>
          )
        })()}

        {(() => {
          const [ref, inView] = useInView()
          return (
            <section ref={ref} id="education" className={`section ${inView ? 'reveal' : ''}`}>
              <SectionTitle title="Education" />
              <p>
                <strong>Bachelor of Technology in Computer Science</strong>
                <br />SKN Sinhagad College of Engineering, Korti, Pandharpur
                <br />GPA: 9.55 — 2022 – 2026
              </p>
              <p>
                <strong>SSC</strong>
                <br />S.G.R.G Shinde College, Paranda
                <br />GPA: 63% — 2020 – 2022
              </p>
            </section>
          )
        })()}

        {(() => {
          const [ref, inView] = useInView()
          return (
            <section ref={ref} id="achievements" className={`section ${inView ? 'reveal' : ''}`}>
              <SectionTitle title="Achievements" />
              <ul>
                <li>Secretary of the Competitive Exam Club associated with college</li>
                <li>Participated in many college events as coordinator</li>
                <li>Participated in many hackathons at college level</li>
              </ul>
            </section>
          )
        })()}

        {(() => {
          const [ref, inView] = useInView()
          return (
            <section ref={ref} id="contact" className={`section ${inView ? 'reveal' : ''}`}>
              <SectionTitle title="Contact" />
              <div className="contact-grid">
                <div className="contact-item"><strong>Phone:</strong> <a href="tel:+919021744186">+91 9021744186</a></div>
                <div className="contact-item"><strong>Email:</strong> <a href="mailto:kasabeviraj@gmail.com">kasabeviraj@gmail.com</a></div>
                <div className="contact-item"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/viraj-kasabe-59b24624a" target="_blank" rel="noreferrer">Visit Profile</a></div>
                <div className="contact-item"><strong>GitHub:</strong> <a href="https://github.com/virajkasabe" target="_blank" rel="noreferrer">Visit Profile</a></div>
                <div className="contact-item"><strong>LeetCode:</strong> <a href="https://leetcode.com/u/virajkasabe/" target="_blank" rel="noreferrer">Visit Profile</a></div>
              </div>
            </section>
          )
        })()}
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Viraj Kasabe — Built with React</div>
      </footer>
    </div>
  )
}

export default App
