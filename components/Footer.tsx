import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-red-500/30">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por Kurupira Labs
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} Kurupira Labs. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
