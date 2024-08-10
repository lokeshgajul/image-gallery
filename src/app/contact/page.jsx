"use client";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setMessage(data.message);

    setTimeout(() => {
      setMessage("");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }, 2000);
  };
  return (
    // bg-[#DCDCDC]
    // bg-[#F0F8FF]
    <div className=" flex justify-center items-center p-6 ">
      <div className="bg-[#DCDCDC] rounded-2xl shadow-xl  justify-center items-center p-6 ">
        <h1 className="pt-3 text-2xl font-semibold">Contact Us </h1>
        <h1 className="pt-1 pb-3 text-[12px] text-gray-700">
          Please fill this form
        </h1>
        <hr />

        <form action="" className="mt-3" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>

          <div className="flex max-sm:flex-col flex-row  mt-3">
            <div className="flex flex-col">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className=" border-[1px] p-1.5 rounded-md focus:outline-none"
              />
              <label
                htmlFor="firstName"
                className="mt-2 text-[12px] text-gray-800 tracking-wide"
              >
                First Name
              </label>
            </div>
            <div className="flex flex-col sm:ml-7">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border-[1px] p-1.5 rounded-md focus:outline-none"
              />
              <label
                htmlFor="lastName"
                className="mt-2 text-[12px] text-gray-800 tracking-wide"
              >
                Last Name
              </label>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email" // Added name attribute
              value={formData.email}
              onChange={handleChange}
              className="border-[1px] p-1.5 mt-3 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-3">
            <label htmlFor="message">Message</label>
            <textarea
              name="message" // Added name attribute
              value={formData.message}
              onChange={handleChange}
              className="border-[1px] p-1.5 mt-3 rounded-md focus:outline-none"
              cols={10}
            />
          </div>

          <div className="flex justify-center items-center mt-5 ">
            <button
              className="p-2 w-1/3 rounded-md justify-center items-center bg-black hover:bg-gray-500 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
