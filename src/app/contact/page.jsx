"use client";

import { useState } from "react";
import Loading from "../components/Loading";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [loadingVisible, setloadingVisible] = useState(true);
  const [popUpMessage, setpopUpMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setloadingVisible(true);
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setloadingVisible(false);
      setpopUpMessage("Your message was sent to Kalos fit team successfully!");
      setPopupVisible(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      setloadingVisible(false);
      setpopUpMessage("Failed to send message. Please try again later.");
      setPopupVisible(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-black mt-20 md:mt-16">
      <div className="w-full max-w-4xl p-3 md:p-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl mb-6 text-center text-white font-semibold">
          Have Any <span className="text-[#30B43C]">Q</span>uestions? Feel Free
          To Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-12  md:px-4">
          {/* First Name and Last Name */}
          <div className="flex md:space-x-4 justify-center items-center flex-wrap gap-2">
            <div className="flex-1 ">
              <label
                htmlFor="firstName"
                className="block mb-1 text-white font-semibold text-lg"
              >
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30B43C]"
                required
                id="firstName"
              />
            </div>
            <div className="flex-1 ">
              <label
                htmlFor="lastName"
                className="block mb-1 text-white font-semibold text-lg"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className=" w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30B43C]"
                required
                id="lastName"
              />
            </div>
          </div>

          {/* Phone Number and Email */}
          <div className="flex md:space-x-4 justify-center items-center flex-wrap gap-2">
            <div className="flex-1 ">
              <label
                htmlFor="Phone-Number"
                className="block mb-1 text-white font-semibold text-lg"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30B43C]"
                required
                id="Phone-Number"
              />
            </div>
            <div className="flex-1 ">
              <label
                htmlFor="email"
                className="block mb-1 text-white font-semibold text-lg"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30B43C]"
                required
                id="email"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-white font-semibold text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30B43C] min-h-40"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-2 px-12 bg-[#30B43C] text-white rounded-3xl capitalize lg:text-lg hover:bg-[#D4FF9E] hover:text-black font-medium transition-all duration-300 "
          >
            Send Message
          </button>
        </form>
        {/* loading */}
        {loadingVisible && (
          <div className="w-full h-full fixed inset-0 bg-black bg-opacity-55 flex justify-center items-center">
            <Loading className="w-full"/>
          </div>
        )}

        {/* Popup Message */}
        {popupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center transition-all duration-200">
            <div
              className=" absolute w-full h-full top-0 left-0 bg-[#0000003b]"
              onClick={() => setPopupVisible(false)}
            ></div>
            <div className="bg-white text-black py-8 px-10 rounded-lg space-y-4 text-lg font-semibold z-10">
              <p>{popUpMessage}</p>
              <button
                onClick={() => setPopupVisible(false)}
                className="py-2 px-12 bg-[#30B43C] text-white rounded-3xl capitalize lg:text-base hover:bg-[#D4FF9E] hover:text-black font-medium transition-all duration-300"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
