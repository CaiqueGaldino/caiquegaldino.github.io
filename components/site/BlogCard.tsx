import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock, Tag } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d1020]/80 p-6 md:p-8 backdrop-blur transition-all duration-300 hover:border-[#ff4d15]/50 hover:bg-[#12162c] hover:shadow-[0_20px_40px_rgba(255,77,21,0.08)] ${
        featured ? 'md:col-span-2 md:p-10' : ''
      }`}
    >
      {/* Glow sutil de fundo no hover */}
      <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-[#ff4d15]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <div>
        {/* Top bar: Meta info & Project badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3 text-xs font-mono text-white/50 tracking-wider">
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

          {post.projectName && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-semibold uppercase bg-[#ff4d15]/10 border border-[#ff4d15]/25 text-[#ff4d15]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d15] animate-pulse" />
              Projeto: {post.projectName}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#ff4d15] ${
            featured ? 'text-2xl md:text-3xl lg:text-4xl mb-4' : 'text-xl md:text-2xl mb-3'
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Footer: Tags & Action */}
      <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 mt-auto">
        <div className="flex flex-wrap items-center gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-white/40 border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-mono tracking-widest uppercase font-semibold text-[#ff4d15] transition-transform duration-200 group-hover:translate-x-1">
          Ler artigo
          <ArrowUpRight size={15} />
        </span>
      </div>
    </article>
  );
}
