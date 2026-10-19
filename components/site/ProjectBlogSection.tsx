import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { getBlogPostsByProject } from '@/lib/blog';
import BlogCard from './BlogCard';

interface ProjectBlogSectionProps {
  projectSlug: string;
  projectName: string;
  className?: string;
}

export default function ProjectBlogSection({
  projectSlug,
  projectName,
  className = '',
}: ProjectBlogSectionProps) {
  const posts = getBlogPostsByProject(projectSlug);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className={`relative py-20 border-t border-white/5 my-12 ${className}`}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ff4d15]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#ff4d15] mb-3">
              <Sparkles size={13} />
              <span>ATUALIZAÇÕES & BASTIDORES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Notas & Artigos sobre o <span className="text-[#ff4d15]">{projectName}</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/50 max-w-xl">
              Acompanhe a evolução do projeto, decisões de design, changelogs e artigos técnicos.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-white/70 hover:text-[#ff4d15] transition-colors self-start sm:self-auto py-2"
          >
            <span>Ver todo o blog</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
