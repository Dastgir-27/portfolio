import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RetroGrid } from '@/components/ui/retro-grid';
import profileImage from '@/assets/profile-image2.jpeg';
import { motion } from 'motion/react';

const Hero = () => {
  const headingText = "Hi, I'm Dastgir";
  const nameText = 'Dastgir';
  const [typedHeading, setTypedHeading] = useState('');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) {
      setTypedHeading(headingText);
      return;
    }

    let characterIndex = 0;
    let typingInterval: number | undefined;
    const startDelay = window.setTimeout(() => {
      typingInterval = window.setInterval(() => {
        characterIndex += 1;
        setTypedHeading(headingText.slice(0, characterIndex));

        if (characterIndex >= headingText.length) {
          window.clearInterval(typingInterval);
        }
      }, 90);
    }, 250);

    return () => {
      window.clearTimeout(startDelay);
      if (typingInterval) {
        window.clearInterval(typingInterval);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameStartIndex = headingText.indexOf(nameText);
  const headingPrefix = typedHeading.slice(0, nameStartIndex);
  const typedName = typedHeading.slice(nameStartIndex);

  return (
    <section id="home" className="min-h-screen flex items-center bg-black relative overflow-hidden pt-20 pb-16">
      {/* Background decorative elements */}
      <RetroGrid className="opacity-60" />

      <motion.div
        className="container mx-auto px-4 md:px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span>{headingPrefix}</span>
              <span className="gradient-primary bg-clip-text text-transparent">
                {typedName}
              </span>
              {typedHeading.length < headingText.length && (
                <span aria-hidden="true" className="typing-cursor ml-1"></span>
              )}
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 font-semibold">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Building responsive, dynamic web experiences with modern technologies.
              Passionate about creating scalable applications that make a difference.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('#portfolio')}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-muted-foreground">Connect with me:</span>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <a href="mailto:dastgiridrisi27@gmail.com" className="flex items-center justify-center w-full h-full">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <a href="https://github.com/Dastgir-27" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <a href="https://linkedin.com/in/dastgir-idrisi-2630b7355" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end lg:pr-16">
          <div className="relative lg:ml-16">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src={profileImage}
                alt="Dastgir Idrisi - MERN Stack Developer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('#about')}
          className="animate-bounce p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-smooth"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
