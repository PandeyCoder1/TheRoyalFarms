import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white text-gray-700 border-t-2 border-organic-green-100 leaf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/imagelogo.jpg" alt="TheRoyalFarms Logo" className="w-10 h-10 object-contain mix-blend-darken contrast-125 saturate-150" style={{filter: 'drop-shadow(0 0 0 transparent)'}} />
              <h3 className="text-gray-900 text-lg font-bold">TheRoyalFarms</h3>
            </div>
            <p className="text-sm text-gray-600">
              Crafting premium cookies, cakes, and desserts with love and the finest ingredients.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm text-gray-600 hover:text-organic-green-600 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-sm text-gray-600 hover:text-organic-green-600 transition-colors duration-200"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-sm text-gray-600 hover:text-organic-green-600 transition-colors duration-200"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="text-sm text-gray-600 hover:text-organic-green-600 transition-colors duration-200"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4 text-organic-green-600" />
                <span className="text-sm">+91 9122122708</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4 text-organic-green-600" />
                <span className="text-sm">info@theroyalfarms.shop</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-1 text-organic-green-600" />
                <span className="text-sm">Sector 37<br />Faridabad , Haryana </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 text-sm font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-organic-green-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-organic-green-600 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-organic-green-600 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-gray-900 text-sm font-semibold mb-2">Hours</h5>
              <p className="text-sm text-gray-600">Monday - Saturday: 8am - 8pm</p>
              <p className="text-sm text-gray-600">Sunday: 10am - 6pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} TheRoyalFarms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
