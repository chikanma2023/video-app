import React from 'react'
import { BiUser } from 'react-icons/bi'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import profileImage from "@/assets/img/about/img1.jpg";

const Upcoming_Events = () => {
  return (
    <div
      className="relative shadow-lg rounded-md bg-white dark:bg-deep-gray-50 w-full max-h-[500px] overflow-auto 
    scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scroll-smooth"
    >
      <div className={`flex gap-3 py-5 px-8 bg-white items-center sticky top-0`}>
        <FaCalendarAlt className="text-2xl text-deep-red-100" />
        <h3 className="font-medium text-2xl">Upcoming Events</h3>
      </div>

      <div className="pb-5 px-8">
        <hr className="my-3" />
        {Array(3)
          .fill(0)
          .map((each, index) => (
            <div className="flex flex-col gap-3 mt-5" key={index}>
              <img
                src={profileImage}
                alt="profile Image"
                className="w-full h-[200px] object-cover rounded-md"
              />
              <a href="#" className="font-bold hover:text-deep-red-100">
                Digital Business Summit - 2023
              </a>
              <div className="flex gap-3">
                <div className="flex items-center gap-3">
                  <BiUser />
                  <h1>Andru Hebo</h1>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock />
                  <h1>9:00am- 5:00 pm</h1>
                </div>
              </div>
              <hr className="mt-3" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Upcoming_Events