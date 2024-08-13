"use client";
import { useState } from "react";
import "./about.css";

const Aboutpage = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div class="mx-auto my-10 w-[600px] rounded-md">
      <h1 class="text-2xl font-italic font-light text-center mb-10">
        Art & Image Gallery
      </h1>

      <section className="border-gray-300 border-[.5px] rounded-md">
        <details class="  duration-1000 " open>
          <summary class=" px-5 py-3 text-lg cursor-pointer list-none flex justify-between items-center border-b-[1px] ">
            <p className=" text-[15px] font-medium capitalize tracking-[.3px]">
              My Introduction
            </p>
            <span class="mr-2">
              {/* <!-- Custom Icon (you can replace this with any icon you like) --> */}
              <svg
                class="w-4 h-4 transition-transform duration-300 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </summary>
          <div class="bg-white px-5 py-3 text-sm font-light">
            <p className="text-[13px] font-normal">
              Hi, I'm Lokesh, I have a diploma in Information Technology (IT)
              from Government Polytechnic Mumbai.
            </p>
          </div>
        </details>

        <details class=" duration-300">
          <summary class=" px-5 py-3 text-lg cursor-pointer list-none flex justify-between items-center  border-b-[1px] border-t-[1px] ">
            <p className=" text-[15px] font-medium capitalize tracking-[.3px]">
              Website Information
            </p>

            <span class="mr-2">
              {/* <!-- Custom Icon --> */}
              <svg
                class="w-4 h-4 transition-transform duration-300 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </summary>
          <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
            <p className="text-[13px] font-normal">
              This website offers a wide range of images and videos/shorts in
              different categories.
            </p>
          </div>
        </details>

        <details class="  duration-300">
          <summary class=" px-5 py-3 text-lg cursor-pointer list-none flex justify-between items-center  border-b-[1px] ">
            <p className=" text-[15px] font-medium capitalize tracking-[.3px]">
              {" "}
              Technologies Used
            </p>

            <span class="mr-2">
              {/* <!-- Custom Icon --> */}
              <svg
                class="w-4 h-4 transition-transform duration-300 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </summary>
          <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
            <ul className="flex flex-row space-x-2 text-[13px] font-normal">
              <li className="p-1 before:content-['•'] before:mr-1">Next.js</li>
              <li className="p-1 before:content-['•'] before:mr-1">Node.js</li>
              <li className="p-1 before:content-['•'] before:mr-1">MongoDB</li>
              <li className="p-1 before:content-['•'] before:mr-1">
                Tailwind.css
              </li>
            </ul>
          </div>
        </details>
      </section>
    </div>
  );
};

export default Aboutpage;
