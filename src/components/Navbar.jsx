import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    id === activeSection
      ? "text-violet-600 dark:text-violet-400 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition";

  // const linkClass = ({ isActive }) =>
  //   isActive
  //     ? "text-violet-600 dark:text-violet-400 font-semibold"
  //     : "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition";

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-violet-400">Portfolio</div>

          <div className="hidden md:flex space-x-8">
            {sections.map((id) => (
              <a key={id} href={`#${id}`} className={linkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            {/* <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/skills" className={linkClass}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink> */}
          </div>

          <DarkModeToggle />

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="w-7 h-7 text-gray-700" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={linkClass(id)}
                onClick={() => setIsOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            {/* <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/skills" className={linkClass} onClick={() => setIsOpen(false)}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={linkClass} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink> */}
          </div>
        </div>
      )}
    </nav>
  );
}
