import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedText from "../animations/AnimateText";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Your Service ID",
        "Your Template",
        form.current,
        "Your API Code"
      )
      .then(
        (result) => {
          //   console.log(result.text);
          e.target.reset();
          document.getElementById("_success").classList.remove("hidden");
        },
        (error) => {
          //   console.log(error.text);
        }
      );
  };
  return (
    <div className="flex flex-col items-center my-2 mt-4">
      <AnimatedText text="GET IN TOUCH" />
      <hr className="w-36 h-1 bg-black mb-4" />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-5/12"
      >
        <label className="font-Abel text-xl">Name</label> <br />
        <input
          className="font-Abel border-2 border-black w-full h-12 text-xl p-2 mb-1 focus:outline-none rounded-sm focus:border-orange-300 focus:border-opacity-80 focus:ring focus:ring-orange-300 focus:ring-opacity-80"
          type="text"
          name="user_name"
          required="required"
        />{" "}
        <br />
        <label className="font-Abel text-xl">Email</label> <br />
        <input
          className="font-Abel border-2 border-black w-full h-12 text-xl p-2 mb-1 focus:outline-none rounded-sm focus:border-orange-300 focus:border-opacity-80 focus:ring focus:ring-orange-300 focus:ring-opacity-80"
          type="email"
          name="user_email"
          required="required"
        />{" "}
        <br />
        <label className="font-Abel text-xl">Message</label> <br />
        <textarea
          className="font-Abel border-2 border-black w-full h-28 text-xl p-2 mb-1 focus:outline-none rounded-sm focus:border-orange-300 focus:border-opacity-80 focus:ring focus:ring-orange-300 focus:ring-opacity-80"
          name="message"
          required="required"
        />{" "}
        <br />
        <input
          type="submit"
          value="Touch"
          className="bg-orange-400 w-32 h-12 rounded-md font-Abel text-2xl text-center font-medium
         hover:bg-black hover:text-white
          transition  ease-in-out delay-150 
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80 my-2 mx-auto block"
        />
        <p
          className="font-Abel text-md text-center text-green-600 hidden m-1"
          id="_success"
        >
          Thanks for Your Message
        </p>
      </form>
    </div>
  );
}

export default Contact;
