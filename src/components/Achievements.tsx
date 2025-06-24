
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-violet-400/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-indigo-500/30 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/30 to-violet-500/30 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="text-violet-400 animate-pulse" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Achievements
            </h2>
            <Star className="text-violet-400 animate-pulse animation-delay-500" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-violet-400/50 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/5cf2bc37-e8e9-4042-bd58-3013c45ed00f.png" 
                    alt="CHAKRAWAR Certificate"
                    className="w-20 h-20 object-cover rounded-lg border-2 border-violet-400/50"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="text-violet-400" size={24} />
                    <h3 className="text-violet-400 font-bold text-xl">🏆 First Prize Winner</h3>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">5G Networking Presentation</h4>
                  <p className="text-gray-300 text-sm mb-3">Won first prize at Kumarasamy College of Engineering for expertise in next-generation communication technologies and innovative presentation skills</p>
                  <div className="flex items-center justify-between">
                    <p className="text-purple-400 text-sm font-medium">CHAKRAWAR Technical Combat</p>
                    <p className="text-gray-400 text-sm">March 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/7ab3520a-0d19-4318-8221-8dbf4a1a5d0c.png" 
                    alt="Unstop Certificate"
                    className="w-20 h-20 object-cover rounded-lg border-2 border-purple-400/50"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-purple-400" size={24} />
                    <h3 className="text-purple-400 font-bold text-xl">🏅 Top Performer</h3>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">Ranked 227th out of 3000+</h4>
                  <p className="text-gray-300 text-sm mb-3">Achieved competitive ranking in Unstop's Engineering February Series - a monthly problem-solving challenge demonstrating technical excellence</p>
                  <div className="flex items-center justify-between">
                    <p className="text-indigo-400 text-sm font-medium">Certificate of Excellence</p>
                    <p className="text-gray-400 text-sm">February 2025</p>
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

export default Achievements;
