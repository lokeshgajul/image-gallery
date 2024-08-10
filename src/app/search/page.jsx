"use client";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const SearchPage = () => {
  const pathname = useSearchParams();
  const query = pathname.get("query");
  const [searchImages, setSearchImages] = useState([]);

  console.log("query ", query);

  const searchImageWithQuery = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=10`,
        {
          headers: {
            Authorization:
              "XKuxmXonSghiHU06ZHz4fAwvpGh7Q83kWPQAaTsuJp2dQkv3MBCxtHlj", // Replace with your Pexels API key
          },
        }
      );
      const data = await response.json();
      setSearchImages(data.photos);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    searchImageWithQuery();
  }, [query]);
  return (
    <div className="  p-5 ">
      <h1 className="text-2xl font-semibold mb-4 ">Search Results : {query}</h1>
      <p className="text-gray-700">
        You searched for: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-2 max-[450px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {searchImages ? (
          searchImages.map((image, index) => (
            <div key={index} className="w-full h-52 group relative">
              <img
                src={image.src.large}
                className="w-full h-full object-cover rounded-md"
                alt={`Image ${index}`}
              />
              <div className="absolute inset-0 flex bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:rounded-md transition-opacity">
                <p className=" text-white top-0 absolute text-[12px] pl-4 pt-4 w-[55%] font-medium tracking-[.3px]">
                  {image.alt.slice(0, 30)}...
                </p>
                <p className="text-white bottom-0 absolute text-[12px] pl-4 pb-4 w-[55%] font-medium leading-4 ">
                  {image.photographer}
                </p>
                <p className="text-white absolute right-0 pr-8 pt-5 cursor-pointer">
                  <FaRegHeart size={18} width={0.5} />
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full">
            {" "}
            {/* Span across all columns for no images message */}
            <p>No images are available for these search terms</p>
          </div>
        )}
      </div>

      {/* Render search results here */}
    </div>
  );
};

export default SearchPage;
