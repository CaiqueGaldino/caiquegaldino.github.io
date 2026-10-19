'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Flame, Search, Tag, Sparkles } from 'lucide-react';
import FlameIcon from '@/components/FlameIcon';
import BlogCard from '@/components/site/BlogCard';
import Cursor from '@/components/site/Cursor';
import Footer from '@/components/site/Footer';
import { getAllBlogPosts, getAllTags } from '@/lib/blog';

export default function BlogIndexPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = useMemo(() => getAllBlogPosts(), []);
  const allTags = useMemo(() => getAllTags(), []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      const matchesSearch = searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (post.projectName && post.projectName.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      return matchesTag && matchesSearch;
    });
  }, [allPosts, selectedTag, searchQuery]);

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
          <span>Blog & Atualizações</span>
        </div>

        <nav className="header__links">
          <Link href="/" className="header__link flex items-center gap-2">
            <ArrowLeft size={14} />
            <span>Voltar ao Início</span>
          </Link>
          <a
            href="mailto:cont.caique@gmail.com?subject=Contato via Blog"
            className="header__cta"
            data-cursor="Falar"
          >
            Falar conosco
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative pt-32 pb-24 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Glow de fundo */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ff4d15]/5 blur-[140px] pointer-events-none rounded-full" />

        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#ff4d15] mb-5">
            <Sparkles size={13} />
            <span>DIÁRIO DE BORDO & PROJETOS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-sans mb-6">
            Notas, Artigos & <span className="text-[#ff4d15]">Atualizações</span>
          </h1>

          <p className="text-base sm:text-xl text-white/60 max-w-2xl leading-relaxed">
            Acompanhe o desenvolvimento dos aplicativos da Kurupira Labs, reflexões sobre software independente, changelogs e notas de versão vinculadas aos projetos.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Buscar por título, projeto ou assunto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d1020] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#ff4d15] focus:outline-none transition-colors"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className={`text-xs font-mono tracking-wider px-3 py-1.5 rounded-lg border transition-all ${
                selectedTag === null
                  ? 'bg-[#ff4d15] text-[#070913] border-[#ff4d15] font-semibold'
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-white/25 hover:text-white'
              }`}
            >
              Todos ({allPosts.length})
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`text-xs font-mono tracking-wider px-3 py-1.5 rounded-lg border transition-all ${
                  selectedTag === tag
                    ? 'bg-[#ff4d15] text-[#070913] border-[#ff4d15] font-semibold'
                    : 'bg-white/5 text-white/60 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, idx) => (
              <BlogCard
                key={post.slug}
                post={post}
                featured={idx === 0 && !selectedTag && !searchQuery}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
            <BookOpen size={40} className="mx-auto text-white/20 mb-4" />
            <p className="text-lg text-white/60 font-semibold mb-2">Nenhum artigo encontrado</p>
            <p className="text-sm text-white/40 mb-6">
              Não encontramos resultados para a sua busca ou tag selecionada.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="pill text-xs"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
