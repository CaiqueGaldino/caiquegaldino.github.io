import Link from 'next/link';
import { ArrowRight, BookOpen, Flame } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from './BlogCard';

export default function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section id="blog" className="relative py-28 px-5 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ff4d15]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-[#0055ff]/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d15]" />
              <span>Diário de Bordo & Artigos · 05</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-sans uppercase">
              Notas & <span className="text-[#ff4d15]">Atualizações</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/55 max-w-xl leading-relaxed">
              Registros sobre o desenvolvimento dos nossos aplicativos, arquitetura de software e novidades em tempo real de cada projeto.
            </p>
          </div>

          <Link
            href="/blog"
            className="pill self-start md:self-auto group"
            data-cursor="Explorar"
          >
            <span>Ver todos os artigos</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <BlogCard key={post.slug} post={post} featured={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
