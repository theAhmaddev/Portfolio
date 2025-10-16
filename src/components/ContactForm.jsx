import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");   // message status
  const [loading, setLoading] = useState(false); // loading spinner

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);   // start loader
    setStatus("");      // reset message

    emailjs
      .sendForm(
        "service_o9i4xss", // Your Service ID
        "template_dy97l39", // Your Template ID
        form.current,
        "aHu0DrOUw02xJGvrt" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex-1 bg-white rounded-lg space-y-4 p-6"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Me</h2>

      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        className="w-full border border-gray-300 p-2 rounded"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        className="w-full border border-gray-300 p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full border border-gray-300 p-2 rounded h-32"
        required
      ></textarea>

      <button
        type="submit"
        className="flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-70"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {/* Success / Error messages */}
      {status === "success" && (
        <p className="mt-3 text-green-600 bg-green-100 p-2 rounded-lg text-sm text-center animate-bounce">
          ✅ Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-600 bg-red-100 p-2 rounded-lg text-sm text-center">
          ❌ Oops! Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
