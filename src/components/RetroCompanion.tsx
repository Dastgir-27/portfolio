import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';
// import cornerGif from '../../sharedfiles/gasli.gif';
// import resumePdf from '../../sharedfiles/resume.pdf';
import cornerGif from '../assets/gasli.gif';
import resumePdf from '../assets/resume.pdf';

const RetroCompanion = () => {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isJittering, setIsJittering] = useState(false);
  const jitterTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const aboutSection = document.querySelector('#about');

    if (!aboutSection) {
      setIsPastHero(true);
      return;
    }

    const updateVisibility = () => {
      const aboutRect = aboutSection.getBoundingClientRect();
      const aboutMidpointReached = aboutRect.top <= window.innerHeight - aboutRect.height / 2;

      setIsPastHero(aboutMidpointReached);

      if (!aboutMidpointReached) {
        setIsDialogOpen(false);
      }
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (jitterTimeoutRef.current) {
        window.clearTimeout(jitterTimeoutRef.current);
      }
    };
  }, []);

  const triggerJitter = () => {
    setIsJittering(false);

    if (jitterTimeoutRef.current) {
      window.clearTimeout(jitterTimeoutRef.current);
    }

    window.requestAnimationFrame(() => {
      setIsJittering(true);
      jitterTimeoutRef.current = window.setTimeout(() => {
        setIsJittering(false);
      }, 520);
    });
  };

  const handleMascotClick = () => {
    triggerJitter();
    setIsDialogOpen((previousState) => !previousState);
  };

  const handleResumeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    window.open(resumePdf, '_blank', 'noopener,noreferrer');

    const downloadLink = document.createElement('a');
    downloadLink.href = resumePdf;
    downloadLink.download = 'resume.pdf';
    downloadLink.rel = 'noopener noreferrer';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div
      className={cn(
        'fixed bottom-3 right-3 z-40 flex flex-col items-end justify-end transition-all duration-300 sm:bottom-4 sm:right-4',
        isPastHero ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      )}
    >
      {isDialogOpen && (
        <div
          id="retro-companion-dialog"
          role="dialog"
          aria-label="Retro message"
          className="pixel-dialog mb-4 w-[min(18rem,calc(100vw-1.5rem))] pr-10 sm:w-80"
        >
          <button
            type="button"
            aria-label="Close dialog"
            onClick={() => setIsDialogOpen(false)}
            className="absolute right-2 top-2 rounded-sm p-1 text-[#17210f] transition-colors hover:bg-[#17210f]/10"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="pixel-dialog-title">Psst...</p>
          <p className="pixel-dialog-text">
            checkout my{' '}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="resume.pdf"
              onClick={handleResumeClick}
              className="font-semibold text-primary underline decoration-primary/80 underline-offset-2 transition-colors hover:text-accent"
            >
              resume...
            </a>
          </p>
          <span aria-hidden="true" className="pixel-dialog-caret">v</span>
        </div>
      )}

      <button
        type="button"
        onClick={handleMascotClick}
        aria-controls="retro-companion-dialog"
        aria-expanded={isDialogOpen}
        aria-label="Open retro message"
        className={cn(
          'pointer-events-auto rounded-md transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          isJittering && 'companion-jitter'
        )}
      >
        <img
          src={cornerGif}
          alt=""
          className="h-24 w-24 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:h-28 sm:w-28"
        />
      </button>
    </div>
  );
};

export default RetroCompanion;
