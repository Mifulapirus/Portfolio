import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-primary/20">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary hover:text-secondary transition-colors">
            Angel
          </Link>
          <div className="flex gap-4 md:gap-8 text-sm md:text-base">
            <Link href="/" className="text-white hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition-colors">
              About
            </Link>
            <a 
              href="https://github.com/mifulapirus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
