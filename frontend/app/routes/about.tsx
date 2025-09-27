import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hi guys! My full name's Nguyen Chi Nam" },
    { name: "description", content: "Welcome to my Portfolio" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r mx-auto mb-6"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                My Journey
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I am <span className="font-semibold text-blue-600">Nguyen Chi Nam</span>, a final-year student majoring in Information Technology at Hanoi University of Business and Technology (HUBT).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With a strong passion for technology and problem-solving, I am eager to apply the knowledge and skills I have acquired throughout my studies to a practical environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am actively seeking opportunities to contribute to innovative projects. My goal is to become a professional Full-stack Developer, with a keen interest in web development technologies and building user-centric applications.
              </p>
            </div>
          </div>

          {/* Personal Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Personal Info
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <span className="text-blue-600 font-semibold">👤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Full Name</h3>
                    <p className="text-gray-600">Nguyễn Chi Nam</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <span className="text-green-600 font-semibold">🎂</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Year of Birth</h3>
                    <p className="text-gray-600">2004</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <span className="text-purple-600 font-semibold">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Education</h3>
                    <p className="text-gray-600">Final-year IT Student</p>
                    <p className="text-sm text-gray-500">Hanoi University of Business and Technology</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <span className="text-orange-600 font-semibold">💻</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Major</h3>
                    <p className="text-gray-600">Information Technology</p>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Current Focus
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <span className="text-blue-600 font-semibold">Frontend</span>
            </div>
            <div className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <span className="text-green-600 font-semibold">Backend</span>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <span className="text-purple-600 font-semibold">Database</span>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <span className="text-orange-600 font-semibold">Full-stack</span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}