import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiBook } from 'react-icons/fi';

export default function Journey() {
  const experiences = [
    {
      year: '2025',
      title: 'CEO & CFO',
      company: 'CodeNtraa Pvt.Ltd',
      description: 'Leading the company vision and strategic direction, overseeing all operations and driving technological innovation.',
    },
    {
      year: '2024',
      title: 'Junior Developer',
      company: 'EXR Tech Solutions Pvt. Ltd.',
      description: 'Developed internal tools with React.js, implemented RBAC security, and led a team of 3 developers.',
    },
    {
      year: '2020-2023',
      title: 'College Projects',
      description: 'Developed several academic projects including AI-based grading systems and e-commerce platforms.',
    },
    {
      year: '2019',
      title: 'Diploma in Computer Engineering',
      description: 'Won the State Level Award in the Digital India Project Competition by the Government of India (2019). 🚀',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Electronics & Telecommunication',
      institution: 'Savitribai Phule Pune University',
      period: '2020 - 2023',
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Puranmal Lahoti Govt. Polytechnic, Latur',
      period: '2016 - 2019',
    },
  ];

  const certifications = [
    {
      title: 'AICTE-AWS Cloud Virtual Internship',
      issuer: 'AICTE & AWS',
      year: '2023',
    },
    {
      title: 'Full-Stack Java Developer',
      issuer: 'Symbiosis Center for Distance Learning',
      year: '2022',
    },
    {
      title: 'Digital India Project Competition - State Level Award',
      issuer: 'Government of India',
      year: '2019',
    },
  ];

  return (
    <section className="py-20 bg-black/60 text-black mx-[8%] mt-5">
      <div className="mx-[8%]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Journey</h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-white" />
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            My professional growth from college projects to executive leadership roles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full mr-4 bg-white text-black">
                <FiBriefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Professional Journey</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-1 bg-gray-400" />
              <div className="space-y-8 pl-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-12 top-1 w-8 h-8 rounded-full flex items-center justify-center bg-white text-black font-bold">
                      {index + 1}
                    </div>
                    <div className="p-6 rounded-lg bg-white text-black shadow-md">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-black">
                          {exp.year}
                        </span>
                      </div>
                      {exp.company && (
                        <h5 className="text-lg mb-3 text-gray-700">{exp.company}</h5>
                      )}
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full mr-4 bg-white text-black">
                    <FiBook size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                <div className="p-6 rounded-lg bg-white text-black shadow-md">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`pb-4 ${
                        index !== education.length - 1 ? 'mb-4 border-b border-gray-200' : ''
                      }`}
                    >
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      {edu.field && <p className="text-gray-700">{edu.field}</p>}
                      <p className="font-medium text-gray-700">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full mr-4 bg-white text-black">
                    <FiAward size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                </div>
                <div className="p-6 rounded-lg bg-white text-black shadow-md">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`pb-4 ${
                        index !== certifications.length - 1 ? 'mb-4 border-b border-gray-200' : ''
                      }`}
                    >
                      <h4 className="text-lg font-bold">{cert.title}</h4>
                      <p className="text-gray-700">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
