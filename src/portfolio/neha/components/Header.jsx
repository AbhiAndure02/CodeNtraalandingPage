import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

const Header = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/yourusername' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FiMail />, url: 'mailto:your.email@example.com' },
  ]

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/80 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold flex items-center text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>Neha</span>
          <span className="ml-1 text-gray-800">Jadhav</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-2 py-1 transition-colors ${
                activeSection === item.id 
                  ? 'text-primary font-medium'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Socials + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-xl p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="text-xl text-gray-700" />
            ) : (
              <FiMenu className="text-xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-2 border-b border-gray-200 text-gray-700 ${
                  activeSection === item.id ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-6 py-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl p-2 rounded-full text-gray-700 hover:bg-gray-100"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header