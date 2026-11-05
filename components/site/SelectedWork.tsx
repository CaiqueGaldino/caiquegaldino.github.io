'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from './data';

function ProjectLink({ project, className, children }: { project: Project; className?: string; children: React.ReactNode }) {
  if (project.external) {
    return <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  }
  return <Link href={project.href} className={className}>{children}</Link>;
}

function ProjectArtwork({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  return (
    <div className={`project-art project-art--${(index % 4) + 1}`} aria-hidden="true">
      <span className="project-art__index">K/{project.num}</span>
      <div className="project-art__path"><span /><span /><span /></div>
      <div className="project-art__window">
        <div className="project-art__chrome"><i /><i /><i /></div>
        <div className="project-art__ui">
          <span className="project-art__title" />
          <span className="project-art__copy" />
          <span className="project-art__copy project-art__copy--short" />
          <div className="project-art__tiles"><i /><i /><i /></div>
        </div>
      </div>
      <div className="project-art__stamp"><Icon size={24} strokeWidth={1.7} /></div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section className="work" id="projetos" aria-labelledby="projects-title">
      <header className="work__intro" data-reveal>
        <div className="work__kicker eyebrow">
          <span>Projetos selecionados</span>
          <span>{String(projects.length).padStart(2, '0')} experiências em movimento</span>
        </div>
        <div className="work__intro-grid">
          <h2 id="projects-title">Ideias que<br /><em>ganharam forma.</em></h2>
          <p>Produtos digitais independentes, feitos para resolver situações reais. Cada projeto começa pequeno, encontra sua linguagem e segue evoluindo.</p>
        </div>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className={`project-card ${index === 0 ? 'project-card--featured' : ''}`} key={project.slug} data-reveal>
            <ProjectLink project={project} className="project-card__visual">
              <ProjectArtwork project={project} index={index} />
              <span className="project-card__open">Abrir projeto <ArrowUpRight size={17} aria-hidden="true" /></span>
            </ProjectLink>
            <div className="project-card__content">
              <div className="project-card__heading">
                <div>
                  <span className="project-card__number">{project.num}</span>
                  <h3>{project.name}</h3>
                </div>
                <span className="project-card__status">{project.statusBadge || project.platform}</span>
              </div>
              <p>{project.desc1}</p>
              <ul className="project-card__tags" aria-label={`Tecnologias e área de ${project.name}`}>
                {project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="work__closing eyebrow"><span>Do rascunho ao produto</span><span>Kurupira / trabalho em curso</span></div>
    </section>
  );
}
