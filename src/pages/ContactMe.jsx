import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"
const Contact = () => {
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fryc9eg",    
        "template_f3y316p",   
        e.target,
        "EuPNuu0p0GXP8125Z"        
      )
      .then(
        (result) => {
          setMessageStatus("Message sent successfully!");
          alert(`${messageStatus}`);
        },
        (error) => {
          setMessageStatus("Failed to send message. Please try again.");
          alert(`${messageStatus}`);
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="h-screen pt-20">
    <section className="contact  section py-">
      <div className="container mx-auto">
        <h3 className="section__subtitle text-3xl font-bold text-center mb-4">
          Get In <span className="text-zinc-950">Touch</span>
        </h3>
        <h2 className="section__title text-4xl font-bold text-center pb-4">
          Contact Me
        </h2>

        <div className="contact__container place-items-center">
          <form
            className="contact__form w-full  max-w-lg p-5 rounded-lg text-center  shadow-md"
            id="contact-form"
            onSubmit={sendEmail}
          >
            {/* Input Group */}
            <div className="contact__group grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="contact__input py-2 px-4   rounded-md w-full"
                id="contact-name"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="contact__input py-2 px-4  rounded-md w-full"
                id="contact-email"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              name="user_project"
              required
              placeholder="Enter your message"
              className="contact__input py-2 px-4 h-52 rounded-md w-full mb-6"
              id="contact-project"
            ></textarea>

            {/* Status Message */}
            <p className="contact__message text-center text-lg text-green-500 mb-4">
              {messageStatus}
            </p>

            {/* Submit Button */}
            <button
            style={{backgroundImage: "linear-gradient(to right top, #0022e0, #581adb, #7d10d7, #9805d1, #af00cc)"}}
              type="submit"
              className="button  bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
</div>
  );
};

export default Contact;