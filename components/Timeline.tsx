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

const TimelineItem = ({ item }: { item: (typeof timelineData)[0] }) => (
  <div className="relative pl-12 pb-8">
    {/* Icon and Vertical Line */}
    <div className="absolute left-0 top-1 flex h-full">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border-2 border-purple-400 text-purple-400">
        {item.icon}
      </div>
      <div className="w-px bg-gray-700 h-full ml-4"></div>
    </div>

    {/* Content */}
    <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
      <h3 className="text-lg font-bold text-white">{item.title}</h3>
      <div className="flex items-center gap-2 text-purple-400 font-mono text-sm mt-1 sm:mt-0">
        <FiCalendar />
        <span>{item.date}</span>
      </div>
    </div>
    <p className="font-mono text-gray-400 uppercase text-sm mb-4">
      {item.subtitle}
    </p>
    <ul className="space-y-2 text-gray-400 list-disc list-inside">
      {item.points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default function Timeline() {
  return (
    <section
      id="experience"
      className="py-16 border-t border-b border-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Work & Education History
        </h2>
        <p className="text-center font-mono text-gray-500 mb-12">
          [the timeline of professional and academic milestones]
        </p>
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
