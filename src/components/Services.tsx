import { Palette, Code, Database } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import ElectricBorder from '@/components/ui/electric-border';
import { motion } from 'motion/react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with a focus on user experience. From wireframing to prototyping, I design with users in mind.',
      features: ['Wireframing', 'Prototyping', 'User-Centered Design', 'Responsive Design']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web application development using the MERN stack. Building scalable, performant applications with modern technologies and best practices.',
      features: ['React Applications', 'REST API Development', 'Responsive Design', 'Cloud Deployment']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing efficient database schemas and implementing data management solutions using MongoDB and MySQL for optimal performance.',
      features: ['Database Architecture', 'Data Modeling', 'Query Optimization', 'Data Security']
    }
  ];

  return (
    <section id="services" className="section-padding bg-background overflow-hidden">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <AuroraText>Services</AuroraText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ElectricBorder
                key={index}
                className="h-full"
                color="#0b7f19"
                speed={1}
                chaos={0.12}
                thickness={2}
                style={{ borderRadius: 12 }}
              >
                <div className="group h-full rounded-lg gradient-card p-8 shadow-card transition-smooth hover:shadow-glow md:min-h-[32rem]">
                  <div className="flex h-full flex-col space-y-6">
                    <div className="p-4 bg-primary/10 rounded-full w-fit group-hover:scale-110 transition-smooth">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-auto space-y-3">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3 text-foreground/70"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
