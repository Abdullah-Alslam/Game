import Footer from "../../Components/website/Footer";
import Line from "../../Components/website/Line";
import TopBar from "../../Components/website/TopBar";
import { icons } from "../../Components/contact/icon";

export default function Contact() {
  return (
    <section>
      <TopBar />
      <Line />
      <div className="body">
        {/* Background Image */}
        <div className="bg-black bg-[url(/img/page-top-bg/2.jpg)] bg-no-repeat bg-cover bg-center h-[68vh]">
          <div className="flex flex-col px-6 sm:px-10 md:px-20 lg:px-40 py-20 gap-5">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl">
              Contact Us
            </h2>
            <h2 className="text-base text-white leading-relaxed">
              We are here to assist you with any inquiries or concerns you
              <br /> might have. Our team is always ready to help and provide
              <br /> solutions. Feel free to reach out to us for support or any
              general questions.
            </h2>
          </div>
        </div>
        <div className="my-[80px] w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3218.5200958697565!2d37.126940916807015!3d36.22685790129322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDEzJzM2LjciTiAzN8KwMDcnMTkuNSJF!5e0!3m2!1sen!2us!4v1745131779637!5m2!1sen!2us&hl=en"
            className="w-full h-[500px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* Page Content */}
        <div className="px-6 sm:px-10 md:px-20 py-10 flex flex-col lg:flex-row gap-10">
          {/* Contact Information */}
          <div className="flex flex-col gap-10 lg:w-1/3">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="text-[#878787] leading-loose">
              We offer various ways to get in touch. Whether you have questions
              about our services or need assistance, don’t hesitate to contact
              us. Our team is here to help you with any inquiries.
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-[#ffb320] font-semibold">
                Address:{" "}
                <span className="text-[#878787] pl-4">
                  AL Nile Street, Aleppo, Syria
                </span>
              </h2>
              <h2 className="text-[#ffb320] font-semibold">
                Phone:{" "}
                <span className="text-[#878787] pl-4">963 991566773</span>
              </h2>
              <h2 className="text-[#ffb320] font-semibold">
                E-mail:{" "}
                <span className="text-[#878787] pl-4">
                  abdullahxyzabc67@gmail.com
                </span>
              </h2>
              {/* icons */}
              <div className="flex flex-row gap-[30px] mt-[20px]">
                {" "}
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
            <form className="flex flex-col gap-4 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name..."
                  className="flex-1 border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="email"
                  placeholder="Email..."
                  className="flex-1 border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <input
                type="text"
                placeholder="Subject..."
                className="border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                placeholder="Message..."
                className="border border-gray-300 rounded px-4 py-4 h-80 resize-none"
              />
              <button className="bg-[#ffb320] text-white rounded-full py-2 w-32 self-center hover:bg-yellow-500 transition">
                Send
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
