import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin, FiTwitter, FiCodepen } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-blue-600">Connect</span>
        </h2>
        <div className="w-20 h-1 mx-auto bg-blue-600"></div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Me a Message</h3>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-600">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-600">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 text-gray-600">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-600">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <FiSend /> Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Social & Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Connect Directly</h3>
            <p className="mb-8 text-gray-600">
              Prefer direct communication? Reach out through my social profiles or drop me a message for collaborations and opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">My Digital Presence</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FiGithub />, name: 'GitHub', url: 'https://github.com' },
                { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' },
                { icon: <FiTwitter />, name: 'Twitter', url: 'https://twitter.com' },
                { icon: <FiCodepen />, name: 'CodePen', url: 'https://codepen.io' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-lg flex flex-col items-center bg-gray-100 border border-gray-200 hover:bg-blue-50 transition-colors"
                >
                  <div className="text-2xl mb-2 text-blue-600">
                    {social.icon}
                  </div>
                  <span className="font-medium text-gray-700">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-blue-50 border border-blue-200">
            <h4 className="text-lg font-semibold mb-2 text-blue-600">Availability</h4>
            <p className="text-gray-600">
              I'm currently available for freelance projects and collaborations. Typically respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
