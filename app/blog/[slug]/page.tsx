import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Calendar, Clock, Share2, Tag, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import FlameIcon from '@/components/FlameIcon';
import Cursor from '@/components/site/Cursor';
import Footer from '@/components/site/Footer';
import { getAllBlogPosts, getBlogPostBySlug, blogPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado | Kurupira Labs',
    };
  }

  return {
    title: `${post.title} | Blog Kurupira Labs`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div className="site min-h-screen bg-[#070913] text-[#edeae4]">
      <div className="grain" aria-hidden="true" />
      <Cursor />

      {/* Top Header */}
      <header className="header">
        <Link href="/" className="header__logo" data-cursor="Início">
          <div className="flex items-center gap-2.5">
            <FlameIcon size={26} className="text-[#ff4d15] drop-shadow-md" />
            <span className="font-extrabold tracking-wider text-white text-lg uppercase font-sans">
              Kurupira <span className="text-[#ff4d15]">Labs</span>
            </span>
          </div>
        </Link>

        <div className="header__status eyebrow">
          <span className="header__status-dot" aria-hidden="true" />
          <span>{post.projectName ? `Projeto: ${post.projectName}` : 'Artigo'}</span>
        </div>

        <nav className="header__links">
          <Link href="/blog" className="header__link flex items-center gap-2">
            <ArrowLeft size={14} />
            <span>Todos os artigos</span>
          </Link>
          <a
            href="mailto:cont.caique@gmail.com"
            className="header__cta"
            data-cursor="Falar"
          >
            Falar conosco
          </a>
        </nav>
      </header>

      {/* Main Post Container */}
      <main className="relative pt-32 pb-24 px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        {/* Glow de fundo */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ff4d15]/5 blur-[140px] pointer-events-none rounded-full" />

        {/* Breadcrumb / Voltar */}
        <div className="mb-8 flex items-center gap-3 text-xs font-mono text-white/50 tracking-wider">
          <Link href="/blog" className="hover:text-[#ff4d15] transition-colors flex items-center gap-1">
            <ArrowLeft size={13} />
            <span>BLOG</span>
          </Link>
          <span>/</span>
          {post.projectName && post.projectHref && (
            <>
              <Link href={post.projectHref} className="hover:text-[#ff4d15] transition-colors uppercase">
                {post.projectName}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-white/30 truncate max-w-[200px]">{post.slug}</span>
        </div>

        {/* Post Header */}
        <header className="mb-14">
          {/* Project Tag & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.projectName && post.projectHref && (
              <Link
                href={post.projectHref}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider font-semibold uppercase bg-[#ff4d15]/10 border border-[#ff4d15]/30 text-[#ff4d15] hover:bg-[#ff4d15]/20 transition-colors"
              >
                <Sparkles size={12} />
                <span>Projeto: {post.projectName}</span>
                <ArrowRight size={12} />
              </Link>
            )}

            <div className="flex items-center gap-3 text-xs font-mono text-white/40 tracking-wider">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-[#ff4d15]" />
                {post.dateFormatted}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-sans uppercase leading-[1.08] mb-6">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light mb-8">
            {post.subtitle}
          </p>

          {/* Author bar */}
          <div className="flex items-center justify-between gap-4 py-4 border-y border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff4d15] to-[#ffba08] p-0.5 flex items-center justify-center font-bold text-black text-xs font-mono">
                CG
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-white/40 font-mono">{post.author.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Post Content */}
        <article className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-8">
          {/* Intro callout */}
          <div className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal p-6 md:p-8 rounded-2xl bg-[#0e1224] border border-white/10">
            {post.content.intro}
          </div>

          {/* Body Sections */}
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              {section.title && (
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                  {section.title}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg text-white/70 leading-relaxed">
                  {p}
                </p>
              ))}

              {section.highlight && (
                <blockquote className="my-6 p-6 rounded-r-xl border-l-4 border-[#ff4d15] bg-[#12162c] text-white font-medium text-base sm:text-lg italic leading-relaxed">
                  "{section.highlight}"
                </blockquote>
              )}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="my-6 space-y-3 bg-[#0d1020] p-6 rounded-xl border border-white/5">
                  {section.bulletPoints.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-3 text-sm sm:text-base text-white/75">
                      <span className="h-2 w-2 rounded-full bg-[#ff4d15] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Conclusion */}
          {post.content.conclusion && (
            <div className="pt-8 border-t border-white/10">
              <p className="text-base sm:text-lg text-white/85 font-medium leading-relaxed italic">
                {post.content.conclusion}
              </p>
            </div>
          )}
        </article>

        {/* Related Project Banner (se o post for vinculado a um projeto) */}
        {post.projectName && post.projectHref && (
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#0d1020] to-[#141a33] border border-[#ff4d15]/30 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#ff4d15]/10 blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#ff4d15] uppercase font-semibold">
                  PROJETO EM DESTAQUE
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Quer conhecer mais sobre o {post.projectName}?
                </h3>
                <p className="text-sm text-white/60 mt-1 max-w-md">
                  Confira a página oficial com capturas de tela, arquitetura e links de acesso.
                </p>
              </div>

              <Link
                href={post.projectHref}
                className="pill pill--fill inline-flex items-center gap-2 self-start sm:self-auto shrink-0"
              >
                <span>Explorar projeto</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}

        {/* Navigation Next/Prev */}
        <nav className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="p-5 rounded-xl border border-white/5 bg-[#0d1020] hover:border-[#ff4d15]/40 transition-colors flex flex-col group"
            >
              <span className="text-xs font-mono text-white/40 mb-1 flex items-center gap-1 group-hover:text-[#ff4d15]">
                <ArrowLeft size={12} />
                Artigo anterior
              </span>
              <span className="text-sm font-semibold text-white line-clamp-1 group-hover:text-[#ff4d15]">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="p-5 rounded-xl border border-white/5 bg-[#0d1020] hover:border-[#ff4d15]/40 transition-colors flex flex-col items-end text-right group sm:col-start-2"
            >
              <span className="text-xs font-mono text-white/40 mb-1 flex items-center gap-1 group-hover:text-[#ff4d15]">
                Próximo artigo
                <ArrowRight size={12} />
              </span>
              <span className="text-sm font-semibold text-white line-clamp-1 group-hover:text-[#ff4d15]">
                {nextPost.title}
              </span>
            </Link>
          )}
        </nav>
      </main>

      <Footer />
    </div>
  );
}
