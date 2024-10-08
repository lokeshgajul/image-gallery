"use client";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import Images from "../images/page";
import bgImg from "../../assets/bg3.jpg";
import Image from "next/image";
import PopularVideos from "../videos/page";
import { CiSearch } from "react-icons/ci";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearchText = () => {
    if (searchText.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div className="">
      {/* Background Image */}
      <div className=" w-full">
        <Image
          alt="Mountains"
          src={bgImg}
          placeholder="blur"
          quality={50}
          style={{
            objectFit: "cover",
            zIndex: -1,
            width: "100%",
            height: 500,
            position: "absolute",
            top: 0,
            opacity: 0.89,
          }}
        />

        <div></div>
        <div className=" inset-0 max-lg:mt-24 lg:mt-24 flex items-center flex-col justify-center ">
          <p className="max-sm:text-[16px] max-md:text-[24px]  text-[28px] z-20 shadow-sm text-white w-1/2 font-semibold tracking-[.2px]  flex items-center">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </p>
          <div className="w-[60%] bg-white  rounded-full max-lg:m-4  m-8">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row justify-center items-center w-full pl-3">
                <CiSearch className="font-bold w-8 max-md:hidden" />
                <input
                  placeholder="search images"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="text-black max-md:text-[12px] text-[14px] flex justify-center items-center w-full focus:outline-none"
                />
              </div>
              <div
                className="bg-green-500 hover:bg-green-600 max-md:w-[60px] lg:w-1/6 p-2.5 text-center rounded-e-full cursor-pointer"
                onClick={handleSearchText}
              >
                <h2 className="text-white md:text-[16px] text-[18px] max-md:hidden">
                  search
                </h2>
                <div className="justify-center items-center">
                  <CiSearch className="font-bold max-md text-white max-md:text-center md:hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}

      {/* Ensure Images component starts exactly below the background image */}
      <div className="relative rounded-md ">
        <div className="pt-5 mt-40">
          <Images />
        </div>
      </div>

      <div className="relative rounded-md ">
        <div className="mt-3">
          <PopularVideos />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
