import { Calendar, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";

type Highlight = { label: string; value: string };
type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: Highlight[];
  points: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: "Backend Developer Intern",
    company: "Ace 360 Degree",
    period: "September 2025 – April 2026",
    highlights: [
      { label: "Users Supported", value: "3K+" },
      { label: "API Speedup", value: "30%" },
      { label: "Core Integration", value: "eSign" },
    ],
    points: [
      "Developed and maintained scalable backend services using Node.js, Express, and Laravel, supporting applications with 3K+ users.",
      "Designed and implemented RESTful APIs for authentication, dashboards, and CRUD operations.",
      "Integrated third-party services: eSign workflows, WhatsApp APIs, email services, and map-based features.",
      "Optimized database queries and backend logic, reducing API response time by ~30%.",
      "Worked with MySQL and MongoDB for efficient data storage, retrieval, and schema design.",
      "Deployed and managed applications using Docker, AWS, and cPanel for reliability and scalability.",
      "Implemented Redis caching strategies to enhance performance and reduce server load.",
      "Collaborated in an Agile team with sprint planning, code reviews, and GitHub version control.",
      "Contributed to frontend integration using React.js and Next.js for seamless API consumption.",
      "Delivered a critical eSign integration feature, improving document processing workflows.",
    ],
    tech: [
      "Node.js", "Express", "React.js", "Next.js",
      "MySQL", "MongoDB", "Redis", "Docker", "cPanel", "SEO", "WordPress",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-black py-24 sm:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-20 max-w-2xl text-center mx-auto">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Work <AuroraText>Experience</AuroraText>
          </h2>
          <p className="mt-4 text-base text-muted-foreground mx-auto">
            My professional journey and industry contributions.
          </p>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16"
            >
              {/* Sticky meta — left */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {exp.company}
                  </p>

                  <div className="mt-8 h-px w-12 bg-border" />

                  {/* Highlights stacked */}
                  <dl className="mt-8 space-y-5">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-baseline justify-between gap-4">
                        <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {h.label}
                        </dt>
                        <dd className="text-2xl font-semibold tracking-tight text-foreground tabular-nums">
                          {h.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {/* Tech */}
                  <div className="mt-10">
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Content — right */}
              <div className="lg:col-span-8">
                <ul className="space-y-4">
                  {exp.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="group flex gap-4 rounded-xl border border-transparent px-4 py-3 transition-colors duration-200 hover:border-border hover:bg-muted/40"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                        <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                      </span>
                      <p className="text-[15px] leading-relaxed text-foreground/85">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
