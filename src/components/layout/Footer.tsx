import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center group">
              <div className="relative w-8 h-8 mr-2">
                <img 
                  src="/accessibility-icon.svg" 
                  alt="ADA Launchpad Logo" 
                  className="w-full h-full transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
                />
              </div>
              <span className="ml-2 text-xl font-bold font-heading">ADA Launchpad</span>
            </Link>
            <p className="mt-3 text-gray-400 text-sm">
              Empowering Designers & Developers with Accessibility Knowledge
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:info@adalaunchpad.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/beginner-a11y" className="text-gray-400 hover:text-white transition-colors">Beginner A11y</Link></li>
              <li><Link to="/intermediate-a11y" className="text-gray-400 hover:text-white transition-colors">Intermediate A11y</Link></li>
              <li><Link to="/certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</Link></li>
              <li><Link to="/universities" className="text-gray-400 hover:text-white transition-colors">University Programs</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/testing-tools" className="text-gray-400 hover:text-white transition-colors">Testing Tools</Link></li>
              <li><Link to="/design-plugins" className="text-gray-400 hover:text-white transition-colors">Design Plugins</Link></li>
              <li><Link to="/job-prep" className="text-gray-400 hover:text-white transition-colors">Job Prep</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest accessibility resources and news.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Your email"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {currentYear} ADA Launchpad. All rights reserved.</p>
            <p className="text-xs text-gray-400 mt-4 md:mt-0">
              ⚠️ This site is a free educational resource. It is not affiliated with W3C, WebAIM, or any of the featured tools. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;