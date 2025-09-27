import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hi guys! My full name's Nguyen Chi Nam" },
    { name: "description", content: "Welcome to my Portfolio" },
  ];
}

import { CodeBracketIcon, EyeIcon, LinkIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

const Projects = () => {
  const myProject: Project = {
    id: 1,
    title: "Di Dong Viet Website Clone",
    description: "Mobile phone e-commerce web application. User-friendly and easy-to-use interface.",
    image: "/images/library-management.jpg", 
    technologies: ["Next", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSql"],
    demoUrl: "https://frontend-diongviet.vercel.app",
    githubUrl: "https://github.com/chianam11/frontend_diongviet",
    features: [
      "User registration and login",
      "Product search",
      "Add products to cart",
      "Increase/decrease product quantity or remove items",
    ]
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600">Projects I have completed during my studies and work</p>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Project Image */}
          <div className="h-64 bg-gradient-to-r from-blue-500 to-red-600 flex items-center justify-center">
            <CodeBracketIcon className="h-20 w-20 text-white opacity-80" />
            {/* Or replace with actual image: */}
            {/* <img src={myProject.image} alt={myProject.title} className="w-full h-full object-cover" /> */}
          </div>

          {/* Project Content */}
          <div className="p-8">
            {/* Title and Links */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">{myProject.title}</h2>
              <div className="flex space-x-3">
                {myProject.demoUrl && (
                  <a 
                    href={myProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <EyeIcon className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {myProject.githubUrl && (
                  <a 
                    href={myProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <CodeBracketIcon className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {myProject.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {myProject.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Main Features</h3>
              <ul className="space-y-2">
                {myProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Add other projects here */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">View more of my projects on</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/chianam11" className="text-blue-600 hover:text-blue-800 flex items-center">
              <LinkIcon className="h-4 w-4 mr-1" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;