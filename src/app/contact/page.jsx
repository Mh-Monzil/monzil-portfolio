"use client";
import PageTransition from "@/components/PageTransition";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4b306a0b-32a7-4175-9b95-97515e400c0e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const contacts = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      info: "(+880) 1533 338930",
    },
    {
      icon: <MdEmail />,
      title: "Email",
      info: "monzil246@gmail.com",
    },
    {
      icon: <FaLocationDot />,
      title: "Address",
      info: "Tongi, Gazipur, Bangladesh",
    },
  ];

  return (
    <>
      <PageTransition />
      <div>
        <h1 className="text-primary text-3xl font-semibold uppercase text-center">
          Contact Me
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 lg:mt-16">
          {/* left  */}
          <div className="lg:w-1/2 lg:flex items-center justify-center">
            <div className=" mt-8 md:mt-12 lg:mt-0 space-y-4 lg:space-y-6">
              {contacts.map((contact, idx) => {
                return (
                  <div key={idx} className="flex items-center gap-4 lg:gap-6">
                    <span className=" p-2 md:p-3 lg:p-5 rounded-sm shadow-sm shadow-primary text-2xl md:text-3xl lg:text-4xl">
                      {contact.icon}
                    </span>
                    <div>
                      <span className="font-medium lg:text-lg">
                        {contact.title}
                      </span>
                      <p className="font-semibold lg:text-lg">{contact.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right  */}
          <div className="lg:w-1/2 border p-6 md:p-10">
            <h3 className="text-primary font-semibold text-2xl md:text-3xl">
              Let&#39;s work together
            </h3>
            <p className="font-medium py-4">
              Reach out for collaborations, projects, or questions. Fill out the
              form below, and I&apos;ll respond promptly.
            </p>
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-full rounded bg-transparent border p-3 focus:outline focus:outline-primary focus:border-dark"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="w-full rounded bg-transparent border p-3 focus:outline focus:outline-primary focus:border-dark"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded bg-transparent border p-3 focus:outline focus:outline-primary focus:border-dark"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Phone number"
                className="w-full rounded bg-transparent border p-3 focus:outline focus:outline-primary focus:border-dark"
                required
              />
              <textarea
                name="message"
                placeholder="Type your message here..."
                className="w-full rounded bg-transparent border p-3 focus:outline focus:outline-primary focus:border-dark md:col-span-2"
                required
              ></textarea>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              ></input>
              <button
                type="submit"
                className="border-2 border-primary py-3 rounded text-white font-bold hover:bg-primary hover:text-black cursor-pointer transition-all ease-in-out duration-300 "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
