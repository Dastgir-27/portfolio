import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import { Button } from '@/components/ui/button';
import { ScrollProgress } from '@/components/ui/scroll-progress';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <AuroraText>Dastgir</AuroraText>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="gradient" 
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground/80 hover:text-primary transition-smooth font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="gradient" 
                size="sm" 
                className="self-start"
                onClick={() => scrollToSection('#contact')}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </nav>
      {/* Scroll Progress Bar at the bottom of the Header */}
      <ScrollProgress className="absolute bottom-0 top-auto z-50" />
    </header>
  );
};

export default Header;
