import { ExternalLink, Github, MapPin, Cloud, Smartphone, Palette, Building2, ClipboardList, ShieldCheck, Globe, Hotel, Building, Landmark, AppWindow, Cpu, Rocket, Scale, Anchor, Recycle } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import wonderlustPreview from '@/assets/wonderlust-preview.png';
import weatherAppPreview from '@/assets/weather-app-preview.png';
import simonGamePreview from '@/assets/simon-game-preview-latest.png';
import spotifyUIPreview from '@/assets/spotify-ui-clone-preview.png';
import cosmosPreview from '@/assets/cosmos.png';
import jcventuresLedgerPreview from '@/assets/jcventuresLedger.png';
import jcventuresPreview from '@/assets/jcventures.png';
import mosPreview from '@/assets/mos.png';
import motiparadisePreview from '@/assets/motiparadise.png';
import officesnmorePreview from '@/assets/officesnmore.png';
import samvriddhiLedgerPreview from '@/assets/samvriddhiLedger.png';
import samvriddhiPreview from '@/assets/samvriddhi.png';
import vignanPreview from '@/assets/vignan.png';
import metablisPreview from '@/assets/metablis.png';
import hellotaxPreview from '@/assets/hellotax.png';
import shipivistaPreview from '@/assets/shipivista.png';
import metalfakihsPreview from '@/assets/metalfakihs.png';
import { motion } from 'motion/react';

const Portfolio = () => {
  const projects = [
    {
      title: "Metal Fakihs International",
      subtitle: "Metals a division of Fakihs - Scrap Metal Trading & Recycling UAE",
      description: "A UAE-based scrap metal trading and recycling company specializing in the global sourcing, processing, and supply of high-grade ferrous and non-ferrous metal scrap.",
      image: metalfakihsPreview,
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Shadcn UI",
        "Lucide React",
        "React Router Dom",
        "TanStack Query",
        "Radix UI",
        "Zod",
        "React Hook Form"
      ],
      features: [
        "Global Ferrous & Non-Ferrous Metal Scrap Trading",
        "International Standard Quality Control & Consistency",
        "Multinational Sourcing & Procurement Network",
        "Direct Channel Sourcing for Competitive Pricing",
        "Reliable Global Logistics & Supply Chain Management",
        "Interactive Product Showcase for Scrap Materials",
        "WhatsApp & Direct Call Integration for Quick Lead Generation",
        "Professional Contact Forms with Zod Validation",
        "Responsive Modern Professional Design"
      ],
      liveUrl: "https://metal.fakihs.com/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Recycle
    },
    {
      title: "Vignan Electronics",
      subtitle: "Industrial Automation & Motion Control",
      description: "A high-performance industrial platform for Vignan Electronics built with Next.js 15 and Laravel 12, featuring a dynamic product catalog, multi-source CMS, and technical support hub.",
      image: vignanPreview,
      techStack: [
        "Next.js 15",
        "Node.js 18",
        "React 19",
        "Tailwind CSS 4",
        "Framer Motion",
        "Lenis",
        "WordPress API",
        "MySQL"
      ],
      features: [
        "Full-stack industrial automation ecosystem",
        "Dynamic product catalog with technical specs",
        "Support hub with gated resource downloads",
        "Keyword-searchable video tutorials module",
        "Multi-source CMS (Laravel API + WordPress)",
        "Advanced UX with smooth scrolling & progress loading",
        "Automated events & careers listing modules"
      ],
      liveUrl: "https://www.vignanelectronics.com/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Cpu
    },
    {
      title: "OfficeNMore Admin CRM",
      subtitle: "Real Estate Operations & Billing",
      description: "A centralized Laravel 12 platform for real estate operations, managing property inventory, inquiry-to-deal workflows, and automated invoicing.",
      image: officesnmorePreview,
      techStack: [
        "Node.js 18",
        "Express.js",
        "Tailwind CSS v4",
        "Alpine.js",
        "Eloquent ORM",
        "DataTables",
        "DomPDF",
        "PHPUnit 11"
      ],
      features: [
        "Inquiry-to-deal one-click conversion",
        "Automated invoice & agreement generation",
        "Advance payment tracking & balance computation",
        "Property matching by requirement keywords",
        "CRM with profile photo capture & KYC flags",
        "Document center with WhatsApp share links",
        "Dashboard KPIs for real-time task tracking"
      ],
      liveUrl: "https://crm.officesnmore.in/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Building
    },
    {
      title: "Moti Paradise Villa",
      subtitle: "Luxury Villa Booking & Hospitality",
      description: "A high-performance Next.js 15 website for a luxury villa in Udaipur, featuring a headless WordPress blog, integrated booking systems, and smooth scroll-triggered animations.",
      image: motiparadisePreview,
      techStack: [
        "Next.js 15",
        "React 19",
        "Tailwind CSS 4",
        "WordPress API",
        "Route Handlers",
        "SweetAlert2",
        "Lucide React",
        "Google Analytics"
      ],
      features: [
        "Headless CMS integration with WordPress",
        "Animated hero & auto-sliding carousels",
        "Complex booking form with server-side proxy",
        "Responsive section-based active highlighting",
        "YouTube video modal virtual tours",
        "SEO-ready with metadata & sitemap support",
        "Scroll-triggered gallery animations"
      ],
      liveUrl: "https://motiparadise.vercel.app/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Hotel
    },
    {
      title: 'Wonderlust',
      subtitle: 'Airbnb-Inspired Travel Stay Platform',
      description: 'Full-stack travel platform featuring user authentication, CRUD operations for listings, image uploads with Cloudinary, and interactive maps using Leaflet.js. Built with responsive design principles.',
      image: wonderlustPreview,
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cloudinary', 'Leaflet.js'],
      features: ['User Authentication', 'CRUD Listings', 'Image Upload', 'Interactive Maps', 'Responsive Design'],
      liveUrl: 'https://wonderlust-nodejs-2pqs.onrender.com/listing',
      githubUrl: 'https://github.com/Dastgir-27/WonderLust-Nodejs',
      icon: MapPin,
      hosted: 'Personal Project'
    },
    {
      title: "Samvriddhi CSP Ledger",
      subtitle: "Banking Operations & E-Sign Portal",
      description: "A heavy-duty Laravel platform for CSP ecosystems featuring multi-bank ledger ingestion, Protean-powered e-sign workflows, and automated certificate generation.",
      image: samvriddhiLedgerPreview,
      techStack: [
        "PHP 8.2",
        "Laravel 11",
        "Protean eSign API",
        "MySQL",
        "PhpSpreadsheet",
        "DomPDF",
        "Ghostscript",
        "Chart.js"
      ],
      features: [
        "Protean e-sign integration with OAuth token caching",
        "Multi-bank Excel upload (PNB, BOB, SBI, etc.)",
        "Profile update approval with diff view & notifications",
        "Secure OTP login & forced password resets",
        "Bank-branded ID card & certificate PDF rendering",
        "Automated agreement filling with merged document bundles",
        "MIS import with flexible column mapping"
      ],
      liveUrl: "https://ledger.samvriddhi.com/login",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Landmark
    },
    {
      title: "Samvriddhi Landing Page",
      subtitle: "Corporate CSP Operations Portal",
      description: "A centralized Laravel 11 platform designed to streamline CSP agent onboarding, operational verification, and corporate service delivery for the Samvriddhi ecosystem.",
      image: samvriddhiPreview,
      techStack: [
        "PHP 8.2",
        "Laravel 11",
        "Tailwind CSS",
        "Vite",
        "MySQL",
        "Chart.js",
        "Axios",
        "Eloquent ORM"
      ],
      features: [
        "Three-role authentication system (Admin, Subadmin, CSP)",
        "Profile update approval workflow with diff view",
        "Automated email notifications for lifecycle events",
        "Full operational dashboard with real-time analytics",
        "Bank master CRUD with dynamic logo management",
        "Integrated API for district/IFSC validation",
        "Secure document verification & lifecycle tracking"
      ],
      liveUrl: "https://samvriddhi.com",
      githubUrl: "https://github.com/Dastgir-27",
      icon: AppWindow
    },
    {
      title: "MOS Utility (MOS World)",
      subtitle: "Corporate Website & Admin Platform",
      description: "A CodeIgniter 4 web platform for MOS Utility that combines a public-facing corporate website, lead-capture funnels, and an internal admin panel to manage services, partnerships, and investor relations.",
      image: mosPreview,
      techStack: [
        "PHP (CodeIgniter 4)",
        "MySQL (MySQLi)",
        "Bootstrap 5",
        "jQuery",
        "DataTables",
        "Froala Editor",
        "SweetAlert2",
        "Tailwind CSS"
      ],
      features: [
        "Dynamic homepage with CMS management",
        "Service catalog with SEO-friendly slugs",
        "Partnership scheme module & landing pages",
        "Lead capture with duplicate checks & UTM tracking",
        "Investor relations & News/Events modules",
        "Digital visiting cards with VCF download",
        "Role-based admin CRUD operations"
      ],
      liveUrl: "https://mos-world.com/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Globe
    },
    {
      title: "JC Ventures",
      subtitle: "CSP Operations Platform",
      description: "A comprehensive Laravel-based platform for JC Ventures designed to streamline CSP agent operations, administrative oversight, and corporate service delivery.",
      image: jcventuresPreview,
      techStack: [
        "PHP 8.2",
        "Laravel 11",
        "Blade Templates",
        "MySQL",
        "Tailwind CSS",
        "jQuery",
        "DataTables",
        "Chart.js",
        "SweetAlert2"
      ],
      features: [
        "Multi-role administration system",
        "CSP profile & document management",
        "Real-time operational dashboards",
        "Automated PDF generation for ID cards",
        "Secure agreement workflows",
        "Advanced data filtering and reporting"
      ],
      liveUrl: "https://jcventures.in",
      githubUrl: "https://github.com/Dastgir-27",
      icon: ShieldCheck
    },
    {
      title: "JC Ventures Ledger CRM",
      subtitle: "Multi-Role BC Ledger and CSP Operations Platform",
      description: "A Laravel-based internal platform for JC Ventures to manage CSP agents, sub-admin workflows, ledger ingestion,Esign Integration, MIS data, and document/certificate generation with role-specific dashboards.",
      image: jcventuresLedgerPreview,
      techStack: [
        "PHP 8.2",
        "Laravel 11",
        "Blade Templates",
        "MySQL",
        "PhpSpreadsheet",
        "DomPDF",
        "Protean Esign API",
        "jQuery",
        "Tailwind CSS",
        "DataTables",
        "Chart.js",
        "SweetAlert2"
      ],
      features: [
        "Role-based authentication (Admin, Subadmin, CSP)",
        "Bulk CSP onboarding & Monthly BC ledger Excel upload",
        "Ledger reports with commission breakdown",
        "Financial year earnings charts (Chart.js)",
        "Document workflow & verification system",
        "Dynamic ID card & Certificate PDF generation",
        "Agreement management system"
      ],
      liveUrl: "https://ledger.jcventures.in/login",
      githubUrl: "https://github.com/Dastgir-27",
      icon: ClipboardList
    },
    {
      title: "Cosmos Seals India Website",
      subtitle: "Mechanical Seals Product Catalogue and B2B Lead",
      description: "A Laravel-based corporate website for Cosmos Seals that showcases industrial sealing products, industries, services, case studies, and news while capturing qualified leads through contact, enquiry, quote-request, and product-download workflows.",
      image: cosmosPreview,
      techStack: [
        "PHP 8.2",
        "Laravel 12",
        "Blade templating",
        "MySQL",
        "Eloquent ORM + Query Builder",
        "Vite + Tailwind CSS (configured)",
        "Bootstrap (CDN)",
        "jQuery",
        "Slick Carousel + AOS + Animate.css",
        "PHPMailer + Laravel Mail",
        "WordPress REST API"
      ],
      features: [
        "Dynamic homepage with banner slider, industries section, and featured content",
        "Hierarchical product catalogue: subcategory -> seal type -> detail",
        "SEO-ready with dynamic meta tags + canonical URLs",
        "Rich technical sections (features, tables, drawings)",
        "Quote & PDF download flow with lead form capture",
        "Contact form with async submission and email notification",
        "Newsletter subscription with OTP verification"
      ],
      liveUrl: "https://cosmosseals.com/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Building2
    },
    {
      title: "Metablis",
      subtitle: "Digital Marketing Agency Portfolio",
      description: "A professional, high-converting WordPress landing page for Metablis, a digital marketing agency, designed to showcase services and drive lead generation.",
      image: metablisPreview,
      techStack: ["WordPress", "Elementor", "PHP", "MySQL"],
      features: [
        "Modern Responsive Design",
        "Lead Generation Forms",
        "Service Showcases",
        "SEO Optimization",
        "Performance Tuning",
        "Custom Brand Identity"
      ],
      liveUrl: "https://metablis.com/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Rocket
    },
    {
      title: "Shipivishta Maritime",
      subtitle: "Marine Engineering & Maritime Services",
      description: "A professional, high-converting WordPress platform for Shipivishta Maritime, tailored to showcase specialized marine engineering services and offshore solutions.",
      image: shipivistaPreview,
      techStack: ["WordPress", "Elementor", "PHP", "MySQL"],
      features: [
        "Maritime Service Showcase",
        "Offshore Solution Highlights",
        "Technical Consultation Forms",
        "Modern Responsive Layout",
        "SEO Optimization",
        "Performance Tuning"
      ],
      liveUrl: "https://shipivishtamaritime.com/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Anchor
    },
    {
      title: "Hellotax",
      subtitle: "CA Service Platform & eCommerce",
      description: "A professional, high-converting WordPress landing page for Hellotax (Chartered Accountancy), featuring comprehensive service showcases and WooCommerce integration for streamlined operations.",
      image: hellotaxPreview,
      techStack: ["WordPress", "Elementor", "PHP", "MySQL", "WooCommerce"],
      features: [
        "CA Service Showcase",
        "WooCommerce Integration",
        "Lead Generation Forms",
        "Modern Responsive Design",
        "SEO Optimization",
        "Performance Tuning"
      ],
      liveUrl: "https://staging.hellotaxindia.com/",
      githubUrl: "https://github.com/Dastgir-27",
      icon: Scale
    },
    {
      title: 'Weather App',
      subtitle: 'Real-time Weather Information',
      description: 'React-based weather application with Material UI components. Search any city for live weather data from OpenWeatherMap API with responsive design and error handling.',
      image: weatherAppPreview,
      techStack: ['React', 'Material UI', 'OpenWeatherMap API'],
      features: ['Live Weather Data', 'City Search', 'Error Handling', 'Responsive UI', 'API Integration'],
      liveUrl: 'https://weather-app-react-p3my.onrender.com/',
      githubUrl: 'https://github.com/Dastgir-27/Weather-App-React',
      icon: Cloud
    },
    {
      title: 'Simon Game',
      subtitle: 'Classic Memory Game',
      description: 'Interactive browser-based memory game that challenges players with growing patterns of colors and sounds. Features real-time feedback, mobile support, and clean game logic.',
      image: simonGamePreview,
      techStack: ['HTML', 'CSS', 'JavaScript'],
      features: ['Memory Challenge', 'Sound Effects', 'Mobile Support', 'Real-time Feedback', 'Progressive Difficulty'],
      liveUrl: 'https://simon-game-ep0p.onrender.com/',
      githubUrl: 'https://github.com/Dastgir-27/Simon-Game',
      icon: Smartphone
    },
    {
      title: 'Spotify UI Clone',
      subtitle: 'Music Streaming Interface',
      description: 'Pixel-perfect recreation of Spotify\'s user interface using modern web technologies. Features responsive grid layout, dark mode styling, and component-based architecture.',
      image: spotifyUIPreview,
      techStack: ['HTML', 'CSS', 'JavaScript'],
      features: ['Responsive Design', 'Dark Mode', 'Grid Layout', 'Component Architecture', 'Modern UI'],
      liveUrl: 'https://spotify-userinterface-clone.onrender.com/',
      githubUrl: 'https://github.com/Dastgir-27/Spotify-UserInterface-Clone',
      icon: Palette
    }
  ];

  return (
    <section id="portfolio" className="section-padding gradient-card overflow-hidden">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <AuroraText>Projects</AuroraText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and technical capabilities
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-border/70"></span>
            Swipe Projects
            <span className="h-px w-10 bg-border/70"></span>
          </div>

          <Carousel
            opts={{
              align: 'start',
              containScroll: 'trimSnaps',
              dragFree: true,
            }}
            className="mx-auto w-full max-w-6xl px-1 sm:px-8"
          >
            <CarouselContent className="cursor-grab active:cursor-grabbing">
              {projects.map((project, index) => {
                const IconComponent = project.icon;

                return (
                  <CarouselItem
                    key={index}
                    className="basis-[88%] sm:basis-[72%] lg:basis-[52%] xl:basis-[42%]"
                  >
                    <div className="group flex flex-col h-full gradient-card rounded-lg overflow-hidden shadow-card border border-border/50 hover:border-primary/30 transition-smooth hover:shadow-glow">
                      {/* Project Image */}
                      <div className="relative h-56 shrink-0 bg-muted overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <IconComponent className="w-16 h-16 text-primary" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-background/90"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 shrink-0" />
                            <span className="truncate">Live Demo</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-background/90"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4 shrink-0" />
                            <span className="truncate">View Code</span>
                          </Button>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-5 flex flex-col flex-grow gap-5">
                        <div className="space-y-2.5">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                                {project.title}
                              </h3>
                              <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                            </div>
                            {project.hosted && (
                              <Badge variant="secondary" className="flex-shrink-0">
                                {project.hosted}
                              </Badge>
                            )}
                          </div>
                          <p className="text-foreground/80 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-2.5">
                          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs border-primary/30"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        {/* <div className="space-y-2.5">
                          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2 text-sm text-foreground/70"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div> */}

                        {/* Action Buttons */}
                        <div className="mt-auto flex flex-col min-[400px]:flex-row gap-2.5 pt-3">
                          <Button
                            variant="gradient"
                            size="sm"
                            className="flex-1 w-full"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 shrink-0" />
                            <span className="truncate">View Live</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 w-full"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4 shrink-0" />
                            <span className="truncate">Source Code</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-[11rem] hidden h-12 w-12 border-primary/30 bg-background/90 hover:bg-background sm:flex [&_svg]:h-6 [&_svg]:w-6" />
            <CarouselNext className="right-2 top-[11rem] hidden h-12 w-12 border-primary/30 bg-background/90 hover:bg-background sm:flex [&_svg]:h-6 [&_svg]:w-6" />
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
