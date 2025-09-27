import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hi guys! My full name's Nguyen Chi Nam" },
    { name: "description", content: "Welcome to my Portfolio" },
  ];
}

export default function Home() {
  // Mảng kỹ năng
  const frontendSkills = [
    "React",
    "Nextjs", 
    "Javascript/Typescript",
    "Css/Scss"
  ];

  const backendSkills = [
    "NodeJs",
    "ExpressJs",
    "PostgreSQL", 
    "PostMan"
  ];

  const softwareArchitecture = [
    { label: "Design Patterns", items: "Singleton, Factory, Repository, Observer" },
    { label: "Architectural Patterns", items: "MVC, Microservices, REST" },
    { label: "Principles", items: "SOLID" },
    { label: "Testing", items: "Unit Testing, Integration Testing" }
  ];

  return (
    <div className="text-black">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Avatar & Info */}
        <div className="text-center lg:text-left">
          <div className="w-48 h-48 mx-auto lg:mx-0 group">
            <img
              src="avatar.jpg"
              alt="Nguyễn Chi Nam - Backend Developer"
              className="w-full h-full object-cover rounded-full border-4 border-gray-200 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-amber-200"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4">Nguyễn Chi Nam</h1>
          <h2 className="text-xl text-gray-600">Backend Developer</h2>
          <div>
            <p className="my-2">Career Objective:</p>
            <p className="text-[0.9rem] w-96 tracking-wide leading-relaxed font-light">
              Seeking an internship to apply my fullstack web development skills (ReactJS, Node.js) and learn modern workflows (Git, CI/CD, Agile). I am currently improving my English through IELTS study, which helps me read and understand technical documents effectively. As a hardworking and eager-to-learn developer, I aim to grow as a backend-focused developer and contribute to impactful projects.
            </p>
          </div>
        </div>

        {/* Skills - 2 columns */}
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-md justify-between m-20">
          <div>
            <h3 className="font-bold bg-amber-200 p-1 text-black rounded-2xl mb-4">Frontend Skills:</h3>
            <ul className="list-disc list-inside space-y-2">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="hover:text-amber-600 transition-colors">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold bg-amber-200 p-1 text-black rounded-2xl mb-4">Backend Skills:</h3>
            <ul className="list-disc list-inside space-y-2">
              {backendSkills.map((skill, index) => (
                <li key={index} className="hover:text-amber-600 transition-colors">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mt-3">Software Architecture</h3>
        <ul className="list-disc list-inside space-y-2">
          {softwareArchitecture.map((item, index) => (
            <li key={index}>
              <strong>{item.label}:</strong> {item.items}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}