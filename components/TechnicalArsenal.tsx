const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "SQL"],
  "Frameworks & Libraries": [
    "React.js",
    "Node.js",
    "Next.js",
    "Express.js",
    "Tailwind CSS",
    "Pandas",
  ],
  "Database Systems": ["PostgreSQL", "MongoDB", "MySQL"],
  "Tools & Integrations": [
    "Git & GitHub",
    "Docker",
    "REST APIs",
    "Jest",
    "Looker Studio",
    "Stripe API",
  ],
  "Core Competencies": [
    "Data Analysis",
    "Agile Methodologies",
    "System Design",
    "Data Visualization",
    "CI/CD",
  ],
};

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
    <h3 className="text-blue-500 font-mono text-lg mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-zinc-300 font-mono text-sm">
          <span className="text-blue-500 mr-2">◆</span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default function TechnicalArsenal() {
  return (
    <section
      id="skills"
      className="py-16 border-t border-zinc-800 scroll-mt-28"
    >
      {/* Container added to keep grid centered and bounded */}
      <div className="container mx-auto px-4 max-w-5xl">
        <h2
          className="text-3xl font-bold text-center text-white mb-4 animate-fade-in"
          style={{ animationTimeline: "view()" }}
        >
          Technical Arsenal
        </h2>
        <p className="text-center text-zinc-400 mb-12 font-mono text-sm">
          [a collection of technologies i use to build and analyze]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard title="Languages" skills={skills.Languages} />
          <SkillCard
            title="Frameworks & Libraries"
            skills={skills["Frameworks & Libraries"]}
          />
          <SkillCard
            title="Database Systems"
            skills={skills["Database Systems"]}
          />
          <SkillCard
            title="Tools & Integrations"
            skills={skills["Tools & Integrations"]}
          />
          <SkillCard
            title="Core Competencies"
            skills={skills["Core Competencies"]}
          />
        </div>
      </div>
    </section>
  );
}
