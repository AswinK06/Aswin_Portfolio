
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="text-blue-600 dark:text-blue-400" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <Briefcase className="text-blue-600 dark:text-blue-400" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Junior Associate Developer - Web Development</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2 font-medium text-lg">Stackit Private Limited</p>
                <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-6">
                  <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                  April 2025 - July 2025 (Ongoing 10 weeks)
                </div>
                
                <ul className="space-y-3 text-gray-800 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Engaged in real-time API testing using Postman for the Iraialaihal project, ensuring seamless data integration and system efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed and optimized web components, improving functionality and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Collaborated with teams to troubleshoot issues, validate API responses, and enhance overall project reliability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
