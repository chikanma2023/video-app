import React from 'react'
import { FaBell } from 'react-icons/fa'
import profileImage from "@/assets/img/about/img1.jpg";

const Notification = () => {
  return (
    <div
      className="relative rounded-md shadow-lg bg-white dark:bg-deep-gray-50 w-full max-h-[500px] overflow-auto
     scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scroll-smooth"
    >
      <div className={`flex gap-3 py-5 px-8 bg-white items-center sticky top-0`}>
        <FaBell className="text-2xl text-deep-red-100" />
        <h3 className="font-medium text-2xl">Notification List</h3>
      </div>

      <div className="pb-5 px-8">
        <hr className="my-3" />
        {Array(5)
          .fill(0)
          .map((each, index) => (
            <div className="mt-5" key={index}>
              <div className="flex gap-3 items-center">
                <img
                  src={profileImage}
                  alt="profile Image"
                  className="w-[80px] h-[80px] rounded-full"
                />
                <div className="">
                  <a href="#">
                    <h1 className="font-medium">
                      Mark your calendar for BITPA Conference Dhaka Meet up 2023
                    </h1>
                  </a>
                  <span className="font-bold text-gray-400">
                    <i>2h ago</i>
                  </span>
                </div>
              </div>
              <hr className="mt-5" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notification