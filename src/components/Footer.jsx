import { Github, Mail, Globe, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <Shield className="h-8 w-8 text-red-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Protest Monitor</h3>
                <p className="text-sm text-gray-400">Real-Time OSINT Tracker</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              From Noise to Noesis: Decoding Global Disruption through advanced 
              AI-powered analysis and real-time monitoring of protests and civil unrest worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Live Dashboard
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@protestmonitor.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Protest & Unrest Monitor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Data Sources
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

