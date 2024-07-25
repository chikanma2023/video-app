import React from 'react'
import { FaClock } from 'react-icons/fa'
import profileImage from "@/assets/img/about/img1.jpg";
import { BiUser } from "react-icons/bi";

const Paid_Events = () => {

  return (
    <div
      className="rounded-md shadow-lg bg-white dark:bg-deep-gray-50 mt-5 w-full max-h-[500px] overflow-auto 
    scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scroll-smooth"
    >
      <div className={`flex gap-3 py-5 px-8 bg-white items-center sticky top-0`}>
        <BiUser className="text-2xl text-deep-red-100" />
        <h3 className="font-medium text-2xl">Your Events</h3>
      </div>

      <div className="pb-5 px-8">
        <hr className="my-3" />
        {Array(5)
          .fill(0)
          .map((each, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex items-center max-md:flex-col">
                <img
                  src={profileImage}
                  alt="profile Image"
                  className="w-[100px] h-[70px] max-md:h-[130px] max-md:w-full m-3 object-cover rounded-md"
                />
                <div className="w-full">
                  <a href="#" className="font-bold hover:text-deep-red-100">
                    Digital Business Summit - 2023
                  </a>
                  <div className="flex justify-between">
                    <div className="flex max-md:flex-col max-md:mt-3">
                      <div className="flex items-center gap-3">
                        <BiUser />
                        <h1>Andru Hebo</h1>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock />
                        <h1>9:00am- 5:00 pm</h1>
                      </div>
                    </div>
                    <div>
                      <h1 className="font-medium">
                        <span className="text-gray-400">350 /</span> 175
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-3" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Paid_Events