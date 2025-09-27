import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hi guys! My full name's Nguyen Chi Nam" },
    { name: "description", content: "Welcome to my Portfolio" },
  ];
}

import { 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Contact = () => {
  
  const contactInfo = {
    email: "chinam31x@gmail.com",
    zalo: "https://zalo.me/0867444255", 
    address: "Hà Nội, Việt Nam"
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    alert(`Đã copy email: ${contactInfo.email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-lg text-gray-600">Connect with me if you have any questions or collaboration opportunities</p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Information</h2>
          
          {/* Email */}
          <div 
            className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer group"
            onClick={copyEmail}
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
              <EnvelopeIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600 hover:text-blue-600 transition-colors">
                {contactInfo.email}
              </p>
              <span className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to copy email
              </span>
            </div>
          </div>

          {/* Zalo */}
          <a 
            href={contactInfo.zalo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center mb-6 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer group"
          >
            <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Zalo</h3>
              <p className="text-gray-600 hover:text-green-600 transition-colors">
                Message via Zalo
              </p>
              <span className="text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Open Zalo now
              </span>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <MapPinIcon className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a 
            href={contactInfo.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
            Chat on Zalo now
          </a>
          
          <button
            onClick={copyEmail}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Copy Email
          </button>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-gray-700">
            I'm always ready for new collaboration opportunities and projects. Don't hesitate to contact me!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;