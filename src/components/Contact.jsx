import React, { useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs
      .sendForm(
        'your_service_id',      // Replace with your actual EmailJS service ID
        'your_template_id',     // Replace with your template ID
        form.current,
        'your_public_key'       // Replace with your public user ID (not secret key)
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus('Something went wrong. Please try again.');
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Get In Touch</h2>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder=" "
                className="peer w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 pt-5 pb-2 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                className="peer w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 pt-5 pb-2 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="5"
                required
                placeholder=" "
                className="peer w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 pt-5 pb-2 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>
              <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300 ${
                loading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p className="text-center mt-4 text-sm font-medium text-green-600 dark:text-green-400">
                {status}
              </p>
            )}
          </form>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center gap-6 text-indigo-600 dark:text-indigo-400 text-2xl">
            <a href="mailto:ankitambasht91@gmail.com" className="hover:text-indigo-800 transition" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/ankit-ambasht" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ankit-ambasht/" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
