import { motion } from 'framer-motion'
import { FiBook, FiAward, FiBriefcase } from 'react-icons/fi'

const Education = () => {
  const timelineItems = [
  
    {
      type: 'experience',
      title: 'Software Engineer - EXR Tech Solutions',
      year: '2024',
      description:
        'Developed enterprise software solutions with Java and React, optimized UI/UX, and implemented scalable architectures.',
      icon: <FiBriefcase className="text-2xl" />,
    },
    {
      type: 'experience',
      title: 'Intern - Sakar Robotics',
      year: '2023',
      description:
        'Built a dashboard tool using Flask, gaining hands-on experience in web development, backend integration, and UI design.',
      icon: <FiBriefcase className="text-2xl" />,
    },
    {
      type: 'education',
      title: 'AWS Cloud Internship - AWS Academy',
      year: '2022',
      description:
        'Completed AWS Cloud Virtual Internship in 2022, gaining hands-on experience with EC2, S3, and deploying cloud-based solutions.',
      icon: <FiAward className="text-2xl" />,
    },
    {
      type: 'education',
      title: 'B.E. in E&TC Engineering - P.E.S Modern College',
      year: '2020 - 2023',
      description:
        'Completed B.E. in Electronics and Telecommunication Engineering from P.E.S Modern College with strong foundation in software and communication.',
      icon: <FiBook className="text-2xl" />,
    },
  ]

  return (
    <section className="bg-transparent text-black py-24 px-4 relative overflow-hidden backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-3">
          Education <span className="text-[#00BFFF]">Timeline</span>
        </h2>
        <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full" />
      </motion.div>

      <div className="relative z-10">
        {/* Center Neon Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#00BFFF] shadow-[0_0_20px_rgba(0,191,255,0.6)]" />

        <div className="flex flex-col gap-28 relative rounded-full">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  !isLeft ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                {/* Card Container */}
                <div className="hidden md:flex md:w-1/2 justify-end md:justify-center px-8">
                  <div className="relative border border-[#00BFFF] rounded-2xl px-8 py-6 max-w-md text-white shadow-[0_0_15px_rgba(0,191,255,0.5)] hover:shadow-[0_0_25px_rgba(0,191,255,0.8)] transition-all duration-300 bg-black/30 backdrop-blur-md">
                    <p className="text-sm text-[#00BFFF] font-semibold mb-2">{item.year}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-justify text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-[#00BFFF] bg-black border-4 border-[#00BFFF] shadow-[0_0_15px_rgba(0,191,255,0.5)] hover:scale-110 transition-transform duration-300 z-20">
                  {item.icon}
                </div>

                {/* Mobile Version Card */}
                <div className="md:hidden mt-8 px-4">
                  <div className="border border-[#00BFFF] rounded-2xl px-8 py-6 w-full text-white shadow-[0_0_15px_rgba(0,191,255,0.5)] hover:shadow-[0_0_25px_rgba(0,191,255,0.8)] transition-all duration-300 bg-black/30 backdrop-blur-md">
                    <p className="text-sm text-[#00BFFF] font-semibold mb-2">{item.year}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-justify text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
