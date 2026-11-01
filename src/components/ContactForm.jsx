import { useState } from "react";
import profile from "../data/profile.json";

const INPUT_CLASSES = "w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500";
const LABEL_CLASSES = "block text-gray-300 text-sm mb-1";

/**
 * Contact form. There is no backend, so submitting opens the visitor's
 * email client with the message pre-filled, addressed to `profile.contactEmail`.
 */
export default function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setError("Please complete all fields with valid information.");
      form.reportValidity();
      return;
    }

    setError("");
    const { name, email, message } = Object.fromEntries(new FormData(form));
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);

    window.location.href = `mailto:${profile.contactEmail}?subject=${subject}&body=${body}`;
    form.reset();
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="bg-black p-6 rounded-2xl shadow-lg w-full border-2 border-white space-y-4"
    >
      <div>
        <label htmlFor="contact-name" className={LABEL_CLASSES}>Full Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Enter your full name" className={INPUT_CLASSES} />
      </div>

      <div>
        <label htmlFor="contact-email" className={LABEL_CLASSES}>Email Address</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="Enter your email address" className={INPUT_CLASSES} />
      </div>

      <div>
        <label htmlFor="contact-message" className={LABEL_CLASSES}>Message</label>
        <textarea id="contact-message" name="message" rows={4} required placeholder="Write your message" className={INPUT_CLASSES} />
      </div>

      <p role="status" aria-live="polite" className="text-sm text-red-500">{error}</p>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold cursor-pointer hover:bg-blue-500 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
