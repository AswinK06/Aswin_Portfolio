
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="text-blue-600 dark:text-blue-400" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
            <GraduationCap className="text-blue-600 dark:text-blue-400" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <GraduationCap size={40} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Bachelor of Engineering</h3>
                <p className="text-blue-600 dark:text-blue-300 mb-2 font-medium text-lg">Computer Science Engineering</p>
                <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <MapPin size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                  K S Rangasamy College of Technology, Salem, Tamil Nadu
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-4">
                  <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                  2022 - Present
                </div>
                <div className="bg-blue-50 dark:bg-gray-800 px-6 py-4 rounded-lg border border-blue-200 dark:border-gray-600">
                  <div className="text-blue-700 dark:text-blue-300 font-bold text-xl">
                    CGPA: 8.38/10 (Till 5th semester)
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">Consistently maintaining excellent academic performance throughout the program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
