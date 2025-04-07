import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 rounded-full focus:outline-none ${darkMode ? 
        'hover:bg-light-secondary/20' : 
        'hover:bg-dark-secondary/20'} transition-colors duration-200`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {darkMode ? (
          <FiSun className="text-xl text-yellow-300" />
        ) : (
          <FiMoon className="text-xl text-indigo-600" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle