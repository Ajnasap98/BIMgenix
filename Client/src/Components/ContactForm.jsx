import React, { useState } from "react";

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocused({ ...focused, [e.target.name]: false });
    }
  };

  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        if (onSubmit) onSubmit(formData);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFocused({});
        setStatus({ loading: false, error: null, success: true });
        // Auto hide success message
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ loading: false, error: data.message || 'Failed to send.', success: false });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, error: 'Network error. Please try again.', success: false });
    }
  };

  const inputClasses = "w-full p-4 bg-[#0a1f40] text-white border-2 border-[#1e3a66] rounded-xl focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 peer placeholder-transparent";
  const labelClasses = "absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-cyan-400 peer-[&:not(:placeholder-shown)]:-translate-y-7 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-cyan-400 pointer-events-none bg-[#0a1f40] px-1 rounded-md";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#081830] p-8 md:p-10 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] border border-cyan-500/20 relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none"></div>

      <div className="relative group">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          className={inputClasses}
        />
        <label htmlFor="name" className={labelClasses}>Your Name</label>
      </div>

      <div className="relative group">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          className={inputClasses}
        />
        <label htmlFor="email" className={labelClasses}>Your Email</label>
      </div>

      <div className="relative group">
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          className={inputClasses}
        />
        <label htmlFor="subject" className={labelClasses}>Subject</label>
      </div>

      <div className="relative group">
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          rows="5"
          className={`${inputClasses} resize-none`}
        ></textarea>
        <label htmlFor="message" className={labelClasses}>Your Message</label>
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className={`w-full py-4 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-[0_5px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {status.loading ? 'Sending...' : 'Send Message 🚀'}
      </button>

      {status.success && (
        <div className="mt-4 p-3 bg-green-500/20 text-green-300 rounded-lg text-center border border-green-500/30">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {status.error && (
        <div className="mt-4 p-3 bg-red-500/20 text-red-300 rounded-lg text-center border border-red-500/30">
          {status.error}
        </div>
      )}
    </form>
  );
}
