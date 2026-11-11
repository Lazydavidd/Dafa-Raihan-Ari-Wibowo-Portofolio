import { FiAward, FiCalendar } from "react-icons/fi";
import { certifications } from "@/data/certifications";

const CertificationCard = ({
  certification,
}: {
  certification: (typeof certifications)[0];
}) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 h-full">
    <div className="flex items-start gap-4">
      <FiAward className="text-blue-500 text-2xl mt-1 flex" />
      <div>
        <h3 className="text-white font-bold">{certification.title}</h3>
        <p className="text-zinc-400 text-sm mt-1">{certification.issuer}</p>
        <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs mt-2">
          <FiCalendar />
          <span>{certification.date}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 border-t border-zinc-800 scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-white mb-12 animate-fade-in"
          style={{ animationTimeline: "view()" }}
        >
          Certifications & Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
