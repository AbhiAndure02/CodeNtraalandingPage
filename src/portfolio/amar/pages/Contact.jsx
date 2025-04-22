// src/pages/Contact.jsx
import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form'
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaGithub, FaLocationArrow } from 'react-icons/fa'

export default function Contact() {
  const [csrfToken, setCsrfToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm();

  useEffect(() => {
    const token = document.querySelector('meta[name="csrf-token"]')?.content;
    setCsrfToken(token || '');
  }, []);

  const contactText = {
    title: "Say Hello 👋",
    subtitle: "Let's create something awesome together.",
    formLabels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      sending: "Sending..."
    },
    quickInfo: {
      title: "📌 Quick Info",
      description: "Don't hesitate to get in touch!",
      email: "amarambure99@gmail.com",
      phone: "+91 8484957731",
      location: "Pune, India"
    },
    statusMessages: {
      success: "Message sent successfully! I will get back to you soon.",
      error: "Failed to send message. Please try again.",
      networkError: "Network error. Please check your connection and try again."
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://codentraa.onrender.com/api/registers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          success: true, 
          message: contactText.statusMessages.success 
        });
        reset();
      } else {
        setSubmitStatus({ 
          success: false, 
          message: responseData.message || contactText.statusMessages.error 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: contactText.statusMessages.networkError 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative mx-[8%] bg-transparent overflow-hidden min-h-screen py-24 px-6">
      {/* 🌟 Optional: Floating grid particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#e3e3e3_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[90rem] mx-auto"
      >
        {/* 🌈 Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white">{contactText.title}</h2>
          <p className="mt-4 text-lg text-white">{contactText.subtitle}</p>
        </div>

        {/* 🌐 Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 📨 Form Card */}
          <motion.div
            whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white/60 backdrop-blur-xl border border-white/30 p-10 rounded-[2rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                    {contactText.formLabels.name}
                  </label>
                  <input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : null}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-400 bg-white`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                    {contactText.formLabels.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : null}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-400 bg-white`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">
                  {contactText.formLabels.subject}
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "subject-error" : null}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-400 bg-white`}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                  {contactText.formLabels.message}
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : null}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-400 bg-white`}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition duration-300 inline-flex items-center justify-center disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      {contactText.formLabels.sending}
                    </>
                  ) : (
                    contactText.formLabels.submit
                  )}
                </button>
              </div>

              {submitStatus && (
                <div className={`mt-4 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* 💬 Contact Block */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-yellow-100 border-l-4 border-yellow-400 shadow-md rounded-xl p-6 transform rotate-[-1deg] hover:rotate-0 transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{contactText.quickInfo.title}</h3>
              <p className="text-gray-700 mb-4">{contactText.quickInfo.description}</p>
              <div className="space-y-2 text-gray-800">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-indigo-600" />
                  <span>{contactText.quickInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-indigo-600" />
                  <span>{contactText.quickInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-indigo-600" />
                  <span>{contactText.quickInfo.location}</span>
                </div>
              </div>
            </div>

            {/* 🔗 Socials */}
            <div className="flex flex-col items-start gap-4 mt-6">
              <div className="flex gap-6 text-3xl text-white">
                <a
                  href="https://linkedin.com/in/amarnath-ambure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0e76a8] transform hover:-translate-y-1 transition"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/amarambure007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transform hover:-translate-y-1 transition"
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}