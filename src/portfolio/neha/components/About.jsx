import { motion } from 'framer-motion';
import {
  FiAward,
  FiCode,
  FiCpu,
  FiDatabase,
  FiCloud,
  FiLayers,
  FiSmartphone,
  FiServer,
  FiShield
} from 'react-icons/fi';

const About = () => {
  const skills = [
    { name: 'Java', icon: <FiCode className="text-3xl" />, color: 'text-red-500' },
    { name: 'React', icon: <FiLayers className="text-3xl" />, color: 'text-blue-500' },
    { name: 'Spring Boot', icon: <FiServer className="text-3xl" />, color: 'text-green-500' },
    { name: 'AWS', icon: <FiCloud className="text-3xl" />, color: 'text-yellow-500' },
    { name: 'MySQL', icon: <FiDatabase className="text-3xl" />, color: 'text-orange-500' },
    { name: 'UI/UX', icon: <FiSmartphone className="text-3xl" />, color: 'text-purple-500' },
    { name: 'Security', icon: <FiShield className="text-3xl" />, color: 'text-pink-500' },
    { name: 'Microservices', icon: <FiCpu className="text-3xl" />, color: 'text-indigo-500' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-md border border-gray-200"
      >
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-600">
          <FiAward />
          Who I Am
        </h3>
        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          <p>
          </p>
          <p>
            My journey began with a <span className="font-semibold">Bachelor's in Electronics & Telecommunication</span> from P.E.S Modern College, Pune, evolving into a passion for full-stack development and cloud architecture.
          </p>
          <p>
            I specialize in bridging the gap between complex technical requirements and exceptional user experiences, delivering solutions that are both powerful and intuitive.
          </p>
        </div>
      </motion.div>

      {/* My Skills Section */}
      {/* My Skills Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <h3 className="text-3xl font-bold text-center mb-10 text-blue-600">My Skills</h3>

  {/* Skills Grid with Cards */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 border border-gray-200 hover:shadow-2xl"
      >
        <div className={`mb-4 p-4 rounded-full ${skill.color} bg-opacity-10`}>
          {skill.icon}
        </div>
        <h4 className="text-base font-semibold text-gray-800">{skill.name}</h4>
      </motion.div>
    ))}
  </div>
</motion.div>

    </section>
  );
};

export default About;
