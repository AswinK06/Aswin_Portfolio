
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-300">
      {/* Enhanced Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-indigo-100/30 to-slate-100/50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-200/20 via-transparent to-transparent dark:from-violet-400/20 dark:via-transparent dark:to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent dark:from-purple-400/20 dark:via-transparent dark:to-transparent"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-violet-300/30 to-purple-300/30 dark:from-violet-400/30 dark:to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-300/30 to-indigo-300/30 dark:from-purple-400/30 dark:to-indigo-500/30 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-300/30 to-violet-300/30 dark:from-indigo-400/30 dark:to-violet-500/30 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="text-violet-600 dark:text-violet-400 animate-bounce" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <Briefcase className="text-violet-600 dark:text-violet-400 animate-bounce animation-delay-500" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400"></div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-2 top-0 w-4 h-4 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-500 rounded-full shadow-lg shadow-violet-400/50"></div>
              <div className="bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/60 dark:to-slate-900/40 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-violet-300/50 dark:hover:border-violet-400/50 transition-all duration-300 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">Junior Associate Developer - Web Development</h3>
                <p className="text-violet-600 dark:text-violet-400 mb-2 font-medium text-lg">Stackit Private Limited</p>
                <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-6">
                  <Calendar size={16} className="mr-2 text-violet-600 dark:text-violet-400" />
                  April 2025 - July 2025 (Ongoing 10 weeks)
                </div>
                
                <ul className="space-y-3 text-gray-800 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-600 dark:bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Engaged in real-time API testing using Postman for the Iraialaihal project, ensuring seamless data integration and system efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed and optimized web components, improving functionality and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
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
