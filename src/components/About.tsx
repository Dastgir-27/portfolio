import { GraduationCap, Calendar } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import { Badge } from '@/components/ui/badge';
import Shuffle from '@/components/Shuffle';
import LogoLoop from '@/components/ui/LogoLoop';
import { motion } from 'motion/react';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiHtml5,
  SiBootstrap
} from 'react-icons/si';
import { FaJava, FaServer, FaAws, FaCss3Alt } from 'react-icons/fa';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express.js', 'EJS', 'MongoDB',
    'MySQL', 'AWS', 'Git', 'GitHub', 'REST APIs', 'HTML', 'CSS', 'Bootstrap',
    'Java', 'OOP in Java'
  ];

  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiExpress />, title: "Express.js" },
    { node: <FaServer />, title: "EJS" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <FaAws />, title: "AWS" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <FaServer />, title: "REST APIs" },
    { node: <SiHtml5 />, title: "HTML" },
    { node: <FaCss3Alt />, title: "CSS" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <FaJava />, title: "Java" },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering, Computer Science',
      institution: 'Rizvi College of Engineering',
      period: '2022 – 2026',
      status: 'Pursuing'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Rizvi College of Arts, Science & Commerce',
      period: 'Graduated 2022',
      status: 'Completed'
    },
    {
      degree: 'Secondary Education',
      institution: 'Fr. Agnel Technical High School',
      period: 'Graduated 2020',
      status: 'Completed'
    }
  ];

  return (
    <section id="about" className="section-padding gradient-card overflow-hidden">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <AuroraText>Me</AuroraText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hi! I'm a MERN stack developer with a strong foundation in full-stack web development.
                I specialize in building dynamic, responsive web applications using MongoDB, Express.js,
                React, and Node.js.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Currently, I'm pursuing my Bachelor of Engineering (B.E), where I'm deepening my
                understanding of computer science and software development. I'm always exploring new
                technologies and looking for opportunities to grow as a developer.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                <Shuffle
                  text="Technical Skills"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={false}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  loop={false}
                  loopDelay={0}
                />
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary/80 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="gradient-card rounded-lg p-6 shadow-card border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                        <Badge
                          variant={edu.status === 'Pursuing' ? 'default' : 'secondary'}
                          className="ml-2"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Loop Section */}
        <div className="mt-24 pt-12 border-t border-border/50">
          {/* <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-primary">Technologies I Work With</h3>
          </div> */}
          <div className="w-full h-12 relative">
            <LogoLoop
              logos={techLogos}
              speed={40}
              direction="left"
              logoHeight={60}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Technologies I use"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
