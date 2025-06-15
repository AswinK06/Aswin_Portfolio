
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-orange-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you want to discuss a potential collaboration or just say hello, 
              I'd love to hear from you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-lg mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">aswinkannan0606@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-lg mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+91 9578413638</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Salem, Tamil Nadu</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/AswinK06" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                <Github size={20} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/aswin-k-6a40ab259" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Name</label>
                  <Input className="bg-slate-700 border-slate-600 text-white focus:border-amber-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input className="bg-slate-700 border-slate-600 text-white focus:border-orange-400" placeholder="your.email@example.com" />
                </div>
              </div>
              
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                <Input className="bg-slate-700 border-slate-600 text-white focus:border-amber-400" placeholder="Project discussion" />
              </div>
              
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Message</label>
                <Textarea 
                  className="bg-slate-700 border-slate-600 text-white min-h-[120px] focus:border-orange-400" 
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
