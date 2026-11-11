"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiFileText,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { FaCode, FaDatabase } from "react-icons/fa";
import Timeline from "@/components/Timeline";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import GetInTouch from "@/components/GetInTouch";
import Certifications from "@/components/Certifications";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-zinc-950 border-b border-zinc-800 py-4 px-8 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Name */}
          <Link href="/" className="text-white text-xl font-bold font-sans">
            Dafa Raihan
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-6 font-mono text-zinc-400">
            <Link
              href="#about"
              className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
            >
              about
            </Link>
            <Link
              href="#experience"
              className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
            >
              experience
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
            >
              projects
            </Link>
            <Link
              href="#certifications"
              className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
            >
              certifications
            </Link>
            <Link
              href="#skills"
              className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
            >
              skills
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
            >
              contact
            </Link>
          </div>

          {/* Right: Resume Button */}
          <a
            href="/CV-Resume_Dafa Raihan Ari Wibowo.pdf" // Place your resume in the `public` folder
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 border border-zinc-700 bg-zinc-900 text-zinc-400 px-4 py-2 rounded-md text-sm hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <FiFileText className="text-blue-500" />
            resume
          </a>

          {/* Mobile Menu Button (Optional, for later implementation) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-zinc-900 rounded-lg p-4">
            <div className="flex flex-col items-center space-y-4 font-mono text-zinc-300">
              <Link
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500"
              >
                about
              </Link>
              <Link
                href="#experience"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500"
              >
                experience
              </Link>
              <Link
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500"
              >
                projects
              </Link>
              <Link
                href="#certifications"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500"
              >
                certifications
              </Link>
              <Link
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500"
              >
                skills
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500"
              >
                contact
              </Link>
              <a
                href="/CV-Resume_Dafa Raihan Ari Wibowo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <main
        id="about"
        className="flex flex-col items-center justify-center min-h-screen p-8 bg-zinc-950 text-zinc-400"
      >
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column: Image */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 rounded-full border-4 border-zinc-800 overflow-hidden">
              <Image
                src="/IMG_9962.JPG"
                alt="Dafa Raihan Ari Wibowo"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                priority
                className="object-cover object-[50%_30%] scale-[1.35]"
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl font-bold text-white font-sans mb-2">
                Dafa Raihan Ari Wibowo
              </h1>
              <p className="text-blue-500 font-mono text-xl sm:text-2xl mb-4">
                fullstack developer & data analyst
              </p>
              <p className="text-zinc-400 text-sm flex items-center justify-center md:justify-start gap-2">
                <FiMapPin className="text-blue-500" /> Jakarta, Indonesia
              </p>
            </div>
          </div>

          {/* Bio Paragraph */}
          <p className="text-lg leading-relaxed my-12 max-w-3xl text-center md:text-left">
            Detail-oriented Junior Web Developer and Information Systems
            graduate with a strong technical foundation in Full-stack
            Development. I bridge the gap between robust application
            architecture and structured data analysis—building responsive web
            systems with{" "}
            <span className="text-white font-semibold">
              React, Node.js, and SQL/NoSQL
            </span>{" "}
            databases, while translating metrics into meaningful insights.
          </p>

          {/* Profile Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto md:mx-0">
            {/* Card 1: The Developer */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col items-start text-left min-h-72">
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-blue-500 text-3xl" />
                <h3 className="text-white text-xl font-mono uppercase">
                  THE DEVELOPER
                </h3>
              </div>
              <p className="text-zinc-400 text-base mb-6 grow">
                Building responsive SPAs, writing clean RESTful APIs,
                integrating third-party services (like Midtrans), and
                structuring scalable databases.
              </p>
              <Link
                href="#projects"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                View Full Stack Work
              </Link>
            </div>

            {/* Card 2: The Analyst */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col items-start text-left min-h-72">
              <div className="flex items-center gap-3 mb-4">
                <FaDatabase className="text-blue-500 text-3xl" />
                <h3 className="text-white text-xl font-mono uppercase">
                  THE ANALYST
                </h3>
              </div>
              <p className="text-zinc-400 text-base mb-6 grow">
                Analyzing database schemas, writing optimized SQL queries,
                cleaning data, and creating interactive visualization pipelines
                to guide decisions.
              </p>
              <Link
                href="#projects"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                View Data Analyst Work
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <Link
              href="#contact" // Link to the contact section, or a dedicated contact page
              className="bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Hire Me <span className="ml-2 text-xl">&rarr;</span>
            </Link>
            <div className="flex gap-4 text-zinc-500">
              <a
                href="https://github.com/Lazydavidd" // TODO: Update with your GitHub
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-blue-500 transition-colors"
              >
                <FiGithub className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/dafaraihan/" // TODO: Update with your LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition-colors"
              >
                <FiLinkedin className="text-3xl" />
              </a>
              <a
                href="mailto:dafaraihanariwibowo@example.com" // TODO: Update with your email
                aria-label="Email"
                className="hover:text-blue-500 transition-colors"
              >
                <FiMail className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Assembled Sections */}
      <Timeline />
      <ProjectsGrid projects={projects} />
      <Certifications />
      <TechnicalArsenal />
      <GetInTouch />
    </>
  );
}
