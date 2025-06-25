
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 dark:bg-gradient-to-br dark:from-purple-900 dark:via-indigo-900 dark:to-slate-900 light:bg-gradient-to-br light:from-indigo-50 light:via-purple-50 light:to-blue-100">
      {/* Enhanced Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-800/30 to-slate-900/50 dark:from-purple-900/50 dark:via-indigo-800/30 dark:to-slate-900/50 light:from-indigo-100/30 light:via-purple-100/20 light:to-blue-100/30"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 light:from-purple-300/20 light:to-indigo-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 light:from-indigo-300/20 light:to-purple-400/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-violet-400/20 to-purple-500/20 light:from-violet-300/20 light:to-purple-400/20 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="text-purple-400 dark:text-purple-400 light:text-purple-600 animate-bounce" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 dark:from-purple-400 dark:via-indigo-400 dark:to-violet-400 light:from-purple-600 light:via-indigo-600 light:to-violet-600 bg-clip-text text-transparent">
              Education
            </h2>
            <GraduationCap className="text-purple-400 dark:text-purple-400 light:text-purple-600 animate-bounce animation-delay-500" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 dark:from-slate-800/80 dark:to-slate-900/60 light:from-white/90 light:to-purple-50/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200/50 hover:border-purple-400/60 dark:hover:border-purple-400/60 light:hover:border-purple-300/60 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 light:from-purple-100 light:to-indigo-100 rounded-full flex items-center justify-center">
                  <GraduationCap size={40} className="text-white dark:text-white light:text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 dark:from-purple-400 dark:to-indigo-400 light:from-purple-600 light:to-indigo-600 bg-clip-text text-transparent">Bachelor of Engineering</h3>
                <p className="text-purple-300 dark:text-purple-300 light:text-purple-600 mb-2 font-medium text-lg">Computer Science Engineering</p>
                <div className="flex items-center text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm mb-2">
                  <MapPin size={16} className="mr-2 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                  K S Rangasamy College of Technology, Salem, Tamil Nadu
                </div>
                <div className="flex items-center text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm mb-4">
                  <Calendar size={16} className="mr-2 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                  2022 - Present
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 dark:from-purple-900/30 dark:to-indigo-900/30 light:from-purple-100/50 light:to-indigo-100/50 px-6 py-4 rounded-lg border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200/30">
                  <div className="text-purple-300 dark:text-purple-300 light:text-purple-700 font-bold text-xl bg-gradient-to-r from-purple-400 to-indigo-400 dark:from-purple-400 dark:to-indigo-400 light:from-purple-600 light:to-indigo-600 bg-clip-text text-transparent">
                    CGPA: 8.38/10 (Till 5th semester)
                  </div>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm mt-2">Consistently maintaining excellent academic performance throughout the program</p>
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
