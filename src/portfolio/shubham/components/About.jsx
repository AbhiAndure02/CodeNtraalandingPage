import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiLayers, FiCode } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiAward className="text-3xl" />, value: "1+", label: "Years Experience" },
    { icon: <FiUsers className="text-3xl" />, value: "5+", label: "Team Members Led" },
    { icon: <FiLayers className="text-3xl" />, value: "5+", label: "Projects Completed" },
    { icon: <FiCode className="text-3xl" />, value: "10+", label: "Technologies Used" },
  ];

  const skills = [
    { name: "Project Management", level: 90 },
    { name: "Agile Methodologies", level: 85 },
    { name: "Team Leadership", level: 95 },
    { name: "Stakeholder Management", level: 80 },
    { name: "Risk Management", level: 75 },
    { name: "Technical Communication", level: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-fuchsia-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic project leader with a passion for delivering exceptional digital products
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 overflow-hidden">
                {/* Replace with your image */}
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨‍💼
                </div>
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-800 rounded-2xl z-[-1]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-200">Who I Am</h3>
              <p className="text-gray-400 mb-4">
                I'm Shubham Bhakare, a results-driven Project Manager with extensive experience in leading cross-functional teams to deliver complex digital projects. My approach combines technical understanding with strong business acumen to bridge the gap between stakeholders and development teams.
              </p>
              <p className="text-gray-400">
                With a background in both business and technology, I specialize in translating business requirements into actionable technical plans while ensuring alignment with strategic objectives.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 p-6 rounded-xl text-center backdrop-blur-sm"
                >
                  <div className="text-fuchsia-500 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-1 text-white">{stat.value}</h4>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">My Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;