import { useState, useEffect } from "react";
import Footer from "../../Components/website/Footer";
import Line from "../../Components/website/Line";
import TopBar from "../../Components/website/TopBar";
import { icons } from "../../Components/contact/icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem("contactForm", JSON.stringify(updatedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      toast.success("Message sent successfully!");

      const emptyData = { name: "", email: "", subject: "", message: "" };
      setFormData(emptyData);
      localStorage.setItem("contactForm", JSON.stringify(emptyData));
    }, 1500);
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-white text-black gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>
        <div className="text-xl font-semibold">Loading Contact Page...</div>
      </div>
    );
  }

  return (
    <section className="bg-white text-black min-h-screen">
      <TopBar />
      <Line />

      {/* Hero Section */}
      <div className="bg-white bg-[url(/img/page-top-bg/2.jpg)] bg-no-repeat bg-cover bg-center h-[68vh] flex items-center">
        <div className="flex flex-col px-6 sm:px-10 md:px-20 lg:px-40 py-20 gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-black text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-gray-700 leading-relaxed"
          >
            We are here to assist you with any inquiries or concerns you
            <br /> might have. Our team is always ready to help and provide
            <br /> solutions. Feel free to reach out to us for support or any
            general questions.
          </motion.p>
        </div>
      </div>

      {/* Map */}
      <div className="my-[80px] w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12293.347111617206!2d37.12694415!3d36.2268571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a0f6eeb3d9871%3A0xa3f07e1e9d07b4a7!2sAL%20Nile%20Street%2C%20Aleppo!5e0!3m2!1sen!2sus!4v1745131779637!5m2!1sen!2sus"
          className="w-full h-[500px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form Section */}
      <div className="px-6 sm:px-10 md:px-20 py-10 flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-10 lg:w-1/3">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-gray-700 leading-loose">
            We offer various ways to get in touch. Whether you have questions
            about our services or need assistance, don’t hesitate to contact us.
            Our team is here to help you with any inquiries.
          </p>

          <div className="flex flex-col gap-5">
            <h2 className="text-[#ffb320] font-semibold">
              Address:{" "}
              <span className="text-gray-700 pl-4">
                AL Nile Street, Aleppo, Syria
              </span>
            </h2>
            <h2 className="text-[#ffb320] font-semibold">
              Phone: <span className="text-gray-700 pl-4">963 991566773</span>
            </h2>
            <h2 className="text-[#ffb320] font-semibold">
              E-mail:{" "}
              <span className="text-gray-700 pl-4">
                abdullahxyzabc67@gmail.com
              </span>
            </h2>
            <div className="flex flex-row gap-[30px] mt-[20px]">
              {icons.map((item, key) => (
                <a
                  key={key}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-[20px] hover:scale-110 transition-transform duration-300"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-center mb-6">
            Leave a Reply
          </h2>
          <form
            className="flex flex-col gap-4 max-w-xl mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name..."
                className="flex-1 border border-gray-300 rounded px-4 py-2 text-black"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email..."
                className="flex-1 border border-gray-300 rounded px-4 py-2 text-black"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject..."
              className="border border-gray-300 rounded px-4 py-2 text-black"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              className="border border-gray-300 rounded px-4 py-4 h-80 resize-none text-black"
            />
            <button
              type="submit"
              disabled={sending}
              className="bg-[#ffb320] text-white rounded-full py-2 w-32 self-center flex items-center justify-center gap-2 hover:bg-yellow-500 transition"
            >
              {sending && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              )}
              Send
            </button>
          </form>
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-right" />
    </section>
  );
}
