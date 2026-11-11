import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

export default function GetInTouch() {
  return (
    <footer id="contact" className="bg-black border-t border-gray-800 py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6 max-w-md">
            I&apos;m currently open to new opportunities. Based in Jakarta,
            Indonesia, but available for remote work. Let&apos;s build something
            great together.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:Dafaraihanariwibowo@gmail.com"
              className="flex items-center text-gray-300 hover:text-blue-500"
            >
              <FiMail className="mr-3 text-xl" />
              <span>Dafaraihanariwibowo@gmail.com</span>
            </a>
            <a
              href="tel:+628881532960"
              className="flex items-center text-gray-300 hover:text-blue-500"
            >
              <FiPhone className="mr-3 text-xl" />
              <span>+62 888 1532 960</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dafaraihan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-blue-500"
            >
              <FiLinkedin className="mr-3 text-xl" />
              <span>dafaraihan</span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="mt-8 md:mt-0">
          {" "}
          {/* Added margin for better spacing on mobile */}
          <form
            action="https://formspree.io/f/moeaqyqp"
            method="POST"
            className="space-y-6"
          >
            {/* Replace with your actual Formspree endpoint */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
