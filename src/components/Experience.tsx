
import { Calendar, MapPin, Trophy, Award, Star } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-400/20 via-transparent to-transparent"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/30 to-red-500/30 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-yellow-400 animate-bounce" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <Trophy className="text-yellow-400 animate-bounce animation-delay-500" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Professional Experience</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-pink-400"></div>
              
              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 top-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                  <h4 className="text-xl font-semibold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Junior Associate Developer - Web Development</h4>
                  <p className="text-cyan-400 mb-2 font-medium">Stackit Private Limited</p>
                  <div className="flex items-center text-gray-300 text-sm mb-4">
                    <Calendar size={16} className="mr-2 text-cyan-400" />
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
            <h3 className="text-2xl font-semibold text-white mb-8 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Education</h3>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300 shadow-xl">
              <h4 className="text-xl font-semibold text-white mb-2 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Bachelor of Engineering</h4>
              <p className="text-pink-400 mb-2 font-medium">Computer Science Engineering</p>
              <div className="flex items-center text-gray-300 text-sm mb-2">
                <MapPin size={16} className="mr-2 text-pink-400" />
                K S Rangasamy College of Technology, Salem, Tamil Nadu
              </div>
              <div className="flex items-center text-gray-300 text-sm mb-4">
                <Calendar size={16} className="mr-2 text-pink-400" />
                2022 - Present
              </div>
              <div className="text-green-400 font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                CGPA: 8.61/10 (Till 5th semester)
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Star className="text-yellow-400 animate-pulse" size={32} />
                <h3 className="text-2xl font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements & Certifications</h3>
                <Star className="text-yellow-400 animate-pulse animation-delay-500" size={32} />
              </div>
              <div className="space-y-4">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src="/lovable-uploads/5cf2bc37-e8e9-4042-bd58-3013c45ed00f.png" 
                          alt="CHAKRAWAR Certificate"
                          className="w-16 h-16 object-cover rounded-lg border-2 border-yellow-400/50"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy className="text-yellow-400" size={20} />
                          <h4 className="text-yellow-400 font-semibold">🏆 First Prize in 5G Networking Presentation</h4>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">Won at Kumarasamy College of Engineering for expertise in next-gen communication technologies</p>
                        <p className="text-cyan-400 text-xs font-medium">CHAKRAWAR Technical Combat - March 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src="/lovable-uploads/7ab3520a-0d19-4318-8221-8dbf4a1a5d0c.png" 
                          alt="Unstop Certificate"
                          className="w-16 h-16 object-cover rounded-lg border-2 border-blue-400/50"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="text-blue-400" size={20} />
                          <h4 className="text-blue-400 font-semibold">🏅 Top 227th out of 5000+ Participants</h4>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">Ranked in Unstop's Engineering February Series - Achieved a competitive standing in a monthly problem-solving challenge</p>
                        <p className="text-purple-400 text-xs font-medium">Certificate of Excellence - February 2025</p>
                      </div>
                    </div>
                  </div>
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
