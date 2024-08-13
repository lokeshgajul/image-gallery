"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularVideosPage = () => {
  const [popularVideos, setPopularVideos] = useState([]);

  const getPopularVideos = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/videos/popular?per_page=16`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "XKuxmXonSghiHU06ZHz4fAwvpGh7Q83kWPQAaTsuJp2dQkv3MBCxtHlj",
          },
        }
      );

      const data = await response.data;

      setPopularVideos(data.videos);
      console.log("videos data ", data.videos);
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return (
    <div className="relative z-10 ">
      <h2 className=" text-xl font-medium ml-5 mr-10 mt-8 mb-4">
        Popular Videos
      </h2>

      <div className="grid grid-cols-2 max-[450px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4 mr-4 pt-4">
        {popularVideos?.map((video) => {
          const videoHeight =
            video.video_files[0].height > 400
              ? 450
              : video.video_files[0].height;
          return (
            <div
              key={video.id}
              className="w-full group relative"
              style={{ gridRowEnd: `span ${Math.ceil(videoHeight / 100)}` }}
            >
              <video
                src={video.video_files[0].link}
                className="rounded-xl"
                style={{
                  height: videoHeight,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                className={`absolute inset-0 flex bg-black bg-opacity-50 opacity-0 bottom-0 group-hover:opacity-100 group-hover:rounded-xl`}
              >
                <p className="text-white p-3">{video.user.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularVideosPage;
