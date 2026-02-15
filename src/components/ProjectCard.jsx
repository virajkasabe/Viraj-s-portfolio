import React from 'react'

function ProjectCard({ title, description, tech, github, index = 0 }) {
  const style = { ['--delay']: `${index * 90}ms` }
  return (
    <article className="project-card" style={style}>
      <div className="project-card-inner">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <p className="project-tech">{tech}</p>
        <a className="project-link" href={github} target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </article>
  )
}

export default ProjectCard
