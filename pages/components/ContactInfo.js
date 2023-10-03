import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { BsDribbble } from "react-icons/bs";
import Button from "./Button";
import React, { useState, useEffect } from "react";

export default function ContactInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://103.127.96.73:8010/contact")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSendMessage = () => {
    console.log("Tombol diklik");

    console.log("Pesan dikirim");
  };

  return (
    <section className="flex">
      <div className="w-2/6">
        <h3 className="text-3xl font-semibold mb-4">Contact Info</h3>
        <ul className="space-y-4">
          <div className="flex items-center">
            {/* <!-- Use flex container to align items horizontally --> */}
            <TfiEmail className="text-4xl" />
            <div className="ml-4">
              {/* <!-- Add margin to separate icon and text --> */}
              <span className="text-gray-500">MAIL us</span>
              <h4>info@bluebase.com</h4>
              <h4>info@bluebase2.com</h4>
            </div>
          </div>

          <div className="flex items-center">
            {/* <!-- Use flex container to align items horizontally --> */}
            <BsTelephone className="text-4xl" />
            <div className="ml-4">
              {/* <!-- Add margin to separate icon and text --> */}
              <span className="text-gray-500">Contact Us</span>
              <h4>+1 504-899-8221</h4>
              <h4>+1 504-749-5456</h4>
            </div>
          </div>

          <div className="flex items-center">
            {/* <!-- Use flex container to align items horizontally --> */}
            <SiGooglemaps className="text-4xl" />
            <div className="ml-4">
              {/* <!-- Add margin to separate icon and text --> */}
              <span className="text-gray-500">Location</span>
              <h4>
                22 Baker Street, Texas <br />
                United States <br />
                W1U 3B
              </h4>
            </div>
          </div>
        </ul>

        <h3 className="text-3xl font-semibold mt-8">Social Info</h3>
        <ul className="social-links flex space-x-4">
          <div className="flex space-x-10">
            <a href="https://www.instagram.com/@ridhoakbarsyah_/" target="_blank" rel="noopener noreferrer" className="text-4xl mt-4 rounded-full p-2 hover:bg-white hover:text-black">
              <AiOutlineInstagram className="text-4xl" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-4xl mt-4 rounded-full p-2 hover:bg-white hover:text-black">
              <RiTwitterXFill className="text-4xl" />
            </a>
            <a href="https://dribbble.com/following" target="_blank" rel="noopener noreferrer" className="text-4xl mt-4 rounded-full p-2 hover:bg-white hover:text-black">
              <BsDribbble className="text-4xl" />
            </a>
          </div>
        </ul>
      </div>

      <div className="w-4/6 mb-40">
        <div className="contact-form col-start-2 order-first">
          <div className="shadow-box relative rounded-xl p-6 bg-gray-800">
            <h1 className="text-3xl font-semibold mb-4 text-white">
              Let’s work <span className="text-blue-500">together.</span>
            </h1>

            {/* nama */}
            <div className="input-group mt-4">
              <input type="text" name="full-name" id="full-name" placeholder="Name *" class="w-full h-10 rounded-md border border-gray-300 bg-gray-500 text-white placeholder-black px-3 py-2 focus:ring focus:ring-blue-400" />
            </div>

            {/* email */}
            <div className="input-group mt-4">
              <input type="email" name="email" id="email" placeholder="Email *" class="w-full h-10 rounded-md border border-gray-300 bg-gray-500 text-white placeholder-black px-3 py-2 focus:ring focus:ring-blue-400" />
            </div>

            {/* subject */}
            <div className="input-group mt-4">
              <input type="text" name="subject" id="subject" placeholder="Your Subject *" class="w-full h-10 rounded-md border border-gray-300 bg-gray-500 text-white placeholder-black px-3 py-2 focus:ring focus:ring-blue-400" />
            </div>

            {/* message */}
            <div className="input-group mt-4">
              <textarea name="message" id="message" placeholder="Your Message *" class="w-full h-32 rounded-md border border-gray-300 bg-gray-500 text-white placeholder-black px-3 py-2 focus:ring focus:ring-blue-400"></textarea>
            </div>

            {/* button */}
            <div className="input-group mt-4 flex justify-center">
              <div className="w-full">
                <Button label={"Send Message"} onClick={handleSendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
