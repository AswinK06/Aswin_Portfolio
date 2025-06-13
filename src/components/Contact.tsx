
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you want to discuss a potential collaboration or just say hello, 
              I'd love to hear from you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">aswinkannan0606@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+91 9578413638</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Salem, Tamil Nadu</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/AswinK06" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                <Github size={20} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/aswin-k-6a40ab259" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Name</label>
                  <Input className="bg-slate-700 border-slate-600 text-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input className="bg-slate-700 border-slate-600 text-white" placeholder="your.email@example.com" />
                </div>
              </div>
              
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                <Input className="bg-slate-700 border-slate-600 text-white" placeholder="Project discussion" />
              </div>
              
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Message</label>
                <Textarea 
                  className="bg-slate-700 border-slate-600 text-white min-h-[120px]" 
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
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
