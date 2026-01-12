import SkillCard from "../components/SkillCard";

const skills = [
  { name: "HTML", type: "Frontend", level: 90 },
  { name: "CSS", type: "Frontend", level: 90 },
  { name: "JavaScript", type: "Frontend", level: 80 },
  { name: "PHP", type: "Backend", level: 80 },
  { name: "MySQL", type: "Database", level: 80 },
  { name: "Bootstrap", type: "Styling", level: 80 },
  { name: "JQuery", type: "Frontend", level: 70 },
  { name: "Java", type: "Backend", level: 60 },
  { name: "React", type: "Frontend", level: 40 },
  { name: "Tailwind CSS", type: "Styling", level: 40 },
];

export default function Skill() {
  return (
    <section id="skills" className="flex flex-col justify-center overflow-hidden py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl max-w-3xl mx-auto">
            These are the technologies and tools I have learnt and currently
            learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              type={skill.type}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
