import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="py-12 bg-light-primary border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-dark-text"
        >
          {/* Name */}
          <h3 className="text-2xl font-bold mb-2 text-dark-accent">Neha Sanjay Jadhav</h3>

          {/* Tagline */}
          <p className="max-w-xl text-center text-base mb-6">
            Director at CodeNtraa &nbsp;|&nbsp; Full-Stack Developer &nbsp;|&nbsp; Cloud Enthusiast &nbsp;|&nbsp; UI/UX Optimizer
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-2 rounded-full bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20 transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-2 rounded-full bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20 transition-colors"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-2 rounded-full bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20 transition-colors"
            >
              <FiTwitter />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-2xl p-2 rounded-full bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20 transition-colors"
            >
              <FiMail />
            </a>
          </div>

          {/* Bottom Copyright */}
          <div className="w-full text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} CodeNtraa. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
