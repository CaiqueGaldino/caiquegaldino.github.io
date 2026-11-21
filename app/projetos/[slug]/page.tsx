import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { projects } from '@/components/site/data';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Kurupira Labs`,
    description: project.desc1,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="site project-detail">
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <section className="project-detail__hero">
          <div className="project-detail__crumb eyebrow">
            <Link href="/#projetos">Projetos</Link>
            <span>{project.num} / {String(projects.length).padStart(2, '0')}</span>
          </div>
          <div className="project-detail__title-grid">
            <div>
              <p className="eyebrow eyebrow--accent">{project.subtitle}</p>
              <h1>{project.name}</h1>
            </div>
            <p className="project-detail__lead">{project.desc1}</p>
          </div>
          <div className="project-detail__meta">
            <span>{project.platform}</span>
            <span>{project.kind}</span>
            <span>{project.statusBadge || 'Projeto independente'}</span>
          </div>
        </section>

        {project.images?.length ? (
          <section className={`project-detail__gallery project-detail__gallery--${project.type}`} aria-label={`Telas de ${project.name}`}>
            {project.images.map((src, index) => (
              <figure key={src} className="project-detail__shot">
                <img src={src} alt={`Tela ${index + 1} do projeto ${project.name}`} />
              </figure>
            ))}
          </section>
        ) : null}

        <section className="project-detail__story">
          <article>
            <span className="eyebrow eyebrow--accent">O projeto</span>
            <h2>Uma solução com propósito claro.</h2>
            <p>{project.desc1}</p>
          </article>
          <article>
            <span className="eyebrow eyebrow--accent">Como soluciona</span>
            <h2>Menos atrito, mais clareza.</h2>
            <p>{project.desc2}</p>
          </article>
        </section>

        <section className="project-detail__outcomes">
          <header>
            <span className="eyebrow">Pontos positivos</span>
            <h2>O que o projeto entrega</h2>
          </header>
          <ol>
            {project.features.map((feature, index) => (
              <li key={feature}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{feature}</p>
              </li>
            ))}
          </ol>
        </section>

        <nav className="project-detail__actions" aria-label="Ações do projeto">
          {project.liveHref ? (
            <a className="pill pill--fill" href={project.liveHref} target="_blank" rel="noreferrer">Abrir projeto ao vivo</a>
          ) : null}
          {project.googlePlayHref ? (
            <a className="pill pill--fill" href={project.googlePlayHref} target="_blank" rel="noreferrer">Ver na Google Play</a>
          ) : null}
          <Link className="pill" href="/#projetos">Ver todos os projetos</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
