
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience & Education</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Professional Experience</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
              
              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-2">Junior Associate Developer - Web Development</h4>
                  <p className="text-blue-400 mb-2">Stackit Private Limited</p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    April 2025 - July 2025 (Ongoing 10 weeks)
                  </div>
                  
                  <ul className="space-y-2 text-gray-300">
                    <li>• Engaged in real-time API testing using Postman for the Indainhat project, ensuring seamless data integration and system efficiency</li>
                    <li>• Developed and optimized web components, improving functionality and user experience</li>
                    <li>• Collaborated with teams to troubleshoot issues, validate API responses, and enhance overall project reliability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Engineering</h4>
              <p className="text-blue-400 mb-2">Computer Science Engineering</p>
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <MapPin size={16} className="mr-2" />
                K S Rangasamy College of Technology, Salem, Tamil Nadu
              </div>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Calendar size={16} className="mr-2" />
                2022 - Present
              </div>
              <div className="text-green-400 font-semibold">
                CGPA: 8.61/10 (Till 5th semester)
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Achievements</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-yellow-400 font-semibold mb-2">🏆 First Prize in 5G Networking Presentation</h4>
                  <p className="text-gray-300 text-sm">Won at Kumarasamy College of Engineering for expertise in next-gen communication technologies</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-yellow-400 font-semibold mb-2">🏅 Top 227th out of 5000+ Participants</h4>
                  <p className="text-gray-300 text-sm">Ranked in Unstop's Engineering February Series - Achieved a competitive standing in a monthly problem-solving challenge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
