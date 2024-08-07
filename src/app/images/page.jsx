"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [images, setImages] = useState([]);

  const fetchGalleryImages = async () => {
    const respons = await axios.get(
      "https://api.pexels.com/v1/curated?page=1&per_page=10",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "XKuxmXonSghiHU06ZHz4fAwvpGh7Q83kWPQAaTsuJp2dQkv3MBCxtHlj",
        },
      }
    );

    const data = await respons.data;
    console.log("data ", data);
    setImages(data.photos);
  };

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  return (
    <>
      <div className="relative z-10 ">
        <h2 className=" text-xl font-medium ml-7 mr-10 mt-4">
          Top Curated Images
        </h2>
      </div>
      <div className="relative z-10 flex flex-wrap pl-6 pr-8 pt-4">
        {images?.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-80 ">
            <img
              src={item.src.large}
              className="w-full h-full object-cover pl-2 pr-1 pb-3"
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
