import Link from 'next/link';

interface AppStoreButtonProps {
  variant?: 'google' | 'apple';
  href: string;
  className?: string;
}

export default function AppStoreButton({ 
  variant = 'google', 
  href,
  className = '' 
}: AppStoreButtonProps) {
  const isGoogle = variant === 'google';

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-zinc-900 border border-gray-700 rounded-lg transition-colors ${className}`}
    >
      {isGoogle ? (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.2 11.1L2.4 0.3C1.9 0 1.25.1 1.25.85V23.2C1.25 24 1.9 24.1 2.4 23.8L22.2 13C22.8 12.6 22.8 11.4 22.2 11.1Z" fill="url(#playGrad)" />
          <defs>
            <linearGradient id="playGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4EE3A5" />
              <stop offset="30%" stopColor="#25A5D8" />
              <stop offset="70%" stopColor="#E21B43" />
              <stop offset="100%" stopColor="#FBCD29" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )}
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-400">
          {isGoogle ? 'DISPONÍVEL NO' : 'Download on the'}
        </span>
        <span className="text-sm font-semibold text-white">
          {isGoogle ? 'Google Play' : 'App Store'}
        </span>
      </div>
    </Link>
  );
}
