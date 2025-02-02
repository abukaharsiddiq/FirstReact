import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Section 1: Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="Logo" className="w-24 h-24 mb-4" />
            <p className="text-gray-200 text-sm mb-6">
              We provide the best solutions to help your business grow. Join us
              for a brighter future.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                className="text-3xl hover:text-blue-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com"
                className="text-3xl hover:text-blue-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                className="text-3xl hover:text-pink-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-3xl hover:text-blue-700 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-indigo-200 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-200 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-indigo-200 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-200 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-200 mb-4">
              1234 Street Name, City, Country
            </p>
            <p className="text-sm text-gray-200 mb-4">
              Email: info@example.com
            </p>
            <p className="text-sm text-gray-200">Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-12 text-center text-sm">
          <p className="text-gray-300">
            © {new Date().getFullYear()} All Rights Reserved | Developed by Your
            Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
