import { FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="relative z-20 bg-black bg-opacity-80 text-white text-sm py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left - Branding */}
          <div>
            <h2 className="text-lg font-semibold">Amarnath Ambure</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Developer<br />
              UI/UX Enthusiast<br />
              Full-Stack Engineer
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h3 className="font-medium mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#journey" className="hover:text-white">Journey</a></li>
            </ul>
          </div>

          {/* Right - Social + Company */}
          <div>
            <h3 className="font-medium mb-2">Follow Me</h3>
            <div className="flex space-x-4 mb-2">
              <a
                href="https://linkedin.com/in/amarnath-ambure"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/amarambure007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transform hover:-translate-y-1 transition"
              >
                <FaGithub size={20}/></a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <SiX size={20} />
              </a>
            </div>
            <a
              href="https://codentraa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-white underline text-sm"
            >
              Visit My Company
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center text-gray-500 border-t border-gray-700 pt-4 text-xs">
          &copy; {new Date().getFullYear()} Amarnath Ambure. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
