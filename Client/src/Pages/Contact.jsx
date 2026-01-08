import React from "react";
import ContactForm from "../Components/ContactForm";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"; // Assuming react-icons is installed

export default function Contact() {
  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Thank you! We received your message.");
    // Later: connect to backend API
  };

  return (
    <main className="py-24 bg-gradient-to-b from-[#081830] via-[#0a1f40] to-[#0e2b5c] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Contact Us
        </h1>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Have a project in mind or need expert BIM consultation?
                Reach out to us and let's build the future together.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 text-2xl">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Our Location</h3>
                  <p className="text-gray-400 mt-1">Kerala, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 text-2xl">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Phone Number</h3>
                  <p className="text-gray-400 mt-1">+91 80755 26893</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 text-2xl">
                  <FiMail />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Email Address</h3>
                  <p className="text-gray-400 mt-1">bimgenix@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reusable form */}
          <div className="bg-slate-900/50 backdrop-blur-md p-2 rounded-3xl border border-cyan-500/20">
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </main>
  );
}
