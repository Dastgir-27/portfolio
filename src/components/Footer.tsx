import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:dastgiridrisi27@gmail.com',
      label: 'Email'
    },
    {
      icon: Github,
      href: 'https://github.com/Dastgir-27',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/dastgir-idrisi-2630b7355',
      label: 'LinkedIn'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border/50 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 md:px-8 lg:px-16 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:scale-105 transition-smooth"
            >
              <AuroraText>Dastgir Idrisi</AuroraText>
            </button>
            <p className="text-muted-foreground">
              MERN Stack Developer building amazing web experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center">
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10 transition-smooth"
                    asChild
                  >
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={link.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-2">
              © {currentYear} Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              by Dastgir Idrisi
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
