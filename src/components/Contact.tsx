import { useState } from 'react';
import { Mail, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuroraText } from '@/components/ui/aurora-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SplitText from '@/components/ui/split-text';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'motion/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dastgiridrisi27@gmail.com',
      href: 'mailto:dastgiridrisi27@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Dastgir-27',
      href: 'https://github.com/Dastgir-27'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dastgir-idrisi-2630b7355',
      href: 'https://linkedin.com/in/dastgir-idrisi-2630b7355'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background overflow-hidden">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <AuroraText>Touch</AuroraText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                <SplitText
                  text="Send me a message"
                  delay={40}
                  duration={0.8}
                  ease="cubic-bezier(0.22, 1, 0.36, 1)"
                  splitType="chars"
                  from={{ opacity: 0, y: 26 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-80px"
                  textAlign="left"
                  triggerOnce
                />
              </h3>
              <p className="text-foreground/80">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border/60 gradient-card p-6 shadow-card sm:p-8">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              <BorderBeam duration={10} size={96} />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Let's connect</h3>
              <p className="text-foreground/80">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 gradient-card rounded-lg border border-border/50 hover:border-primary/30 transition-smooth group"
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {info.label}
                      </h4>
                      <p className="text-foreground/80 text-sm">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
