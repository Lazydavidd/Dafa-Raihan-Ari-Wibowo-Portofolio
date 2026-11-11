import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const timelineData = [
  {
    icon: <FaBriefcase />,
    title: "Administrator & Operations Coordinator",
    date: "2022 - 2024",
    subtitle: "LUNAR KITCHEN",
    points: [
      "Maintained perfect 5.0 rating across 630+ reviews via quality control",
      "Achieved 100% chat performance through rapid response",
      "Managed end-to-end operations for 380+ orders",
    ],
  },
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Information Systems",
    date: "2020 - 2024",
    subtitle: "GUNADARMA UNIVERSITY",
    points: [
      "GPA 3.49 / 4.00 (Predicate: Very Satisfactory)",
      "Specialized in Information Systems Design, Relational Databases, and Basic Web Application Development",
      "Active in developer clubs, focusing on machine learning, AI basics, and scripting",
    ],
  },
];

const TimelineItem = ({
  item,
  isLast,
}: {
  item: (typeof timelineData)[0];
  isLast: boolean;
}) => (
  <div className="relative pl-12 pb-10">
    {/* Vertical Line - Centered behind icon at left-4 (16px) */}
    {!isLast && (
      <div className="absolute left-4 top-4 bottom-0 w-px bg-zinc-800" />
    )}

    {/* Icon Badge - Centered over the line (width 32px, left 0 to 32px) */}
    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border-2 border-blue-500 text-blue-500 z-10">
      {item.icon}
    </div>

    {/* Content - Placed at pl-12 (48px) with plenty of room */}
    <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
      <h3 className="text-lg font-bold text-white">{item.title}</h3>
      <div className="flex items-center gap-2 text-blue-500 font-mono text-sm mt-1 sm:mt-0">
        <FiCalendar />
        <span>{item.date}</span>
      </div>
    </div>
    <p className="font-mono text-zinc-400 uppercase text-sm mb-4">
      {item.subtitle}
    </p>
    <ul className="space-y-2 text-zinc-400 font-mono text-sm">
      {item.points.map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-blue-500 mr-1">◆</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Timeline() {
  return (
    <section
      id="experience"
      className="py-16 border-t border-b border-zinc-800 scroll-mt-28"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Work & Education History
        </h2>
        <p className="text-center font-mono text-zinc-500 mb-12">
          [the timeline of professional and academic milestones]
        </p>
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
