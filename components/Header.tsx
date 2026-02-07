'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetPrefix';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-red-500/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src={getAssetPath('/images/icone-kurupira-1.webp')}
                alt="Kurupira Labs"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent tracking-wider">
              KURUPIRA LABS
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-red-500 transition-colors font-semibold tracking-wide"
            >
              INÍCIO
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-red-500 transition-colors font-semibold tracking-wide"
            >
              PROJETOS
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-red-500 transition-colors font-semibold tracking-wide"
            >
              SOBRE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block text-gray-300 hover:text-red-500 transition-colors font-semibold tracking-wide"
            >
              INÍCIO
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block text-gray-300 hover:text-red-500 transition-colors font-semibold tracking-wide"
            >
              PROJETOS
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-gray-300 hover:text-red-500 transition-colors font-semibold tracking-wide"
            >
              SOBRE
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
