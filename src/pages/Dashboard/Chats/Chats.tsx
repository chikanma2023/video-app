import PageIndicator from "@/components/Page-Indicator";
import { useTheme } from "@/context/themeContext";
import profileImage from "@/assets/img/about/img1.jpg";
import { FaLink, FaMicrophone, FaTelegram, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Chats = () => {
    const { theme } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectMessage, setSelectMessage] = useState(false);

  return (
    <div className="h-[100%] rounded-lg">
        <PageIndicator />
        <hr />

        <div className={`mt-7 shadow-lg flex h-[120vh] overflow-hidden w-full ${theme === 'light' ? 'bg-white' : 'bg-[#2C2C2C]'}`}>
            {/* CHAT FRIENDS LIST */}
            <div className={`relative w-1/3 max-sm:w-full  ${theme === 'light' ? 'bg-[#FFF9FA]' : 'bg-[#111111]'} overflow-auto
     scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scroll-smooth md:!block ${!selectMessage ? 'block' : 'hidden'}`}>

                <div className={`p-8 sticky top-0 ${theme === 'light' ? 'bg-[#FFF9FA]' : 'bg-[#111111]'}`}>
                    <div className="flex items-center gap-3">
                        <img
                            src={profileImage}
                            alt="profile Image"
                            className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                        <h1 className="font-medium">Nelson C</h1>
                    </div>
                    <hr className="mt-6" />
                </div>
                <div className="px-8">
                {Array(10).fill(0).map((each, index) => (
                        <div
                        key={index}
                        className={`flex items-center gap-3 mb-6 p-2 cursor-pointer ${selectedIndex === index ? 'bg-gray-100 rounded-md' : ''}`}
                        onClick={() => {setSelectedIndex(index), setSelectMessage(true)}}
                        >
                        <img
                            src={profileImage}
                            alt="profile Image"
                            className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                        <div>
                            <div className="flex items-center justify-between">
                            <h1 className="font-medium text-[.9rem]">Lisa Roy</h1>
                            <span className="text-gray-500 text-[0.7rem] font-light">10:35 AM</span>
                            </div>
                            <p className="text-[0.8rem]">Hi, are you Available Tomorrow?</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`p-8 max-sm:p-2 w-2/3 relative flex flex-col max-sm:w-full md:!flex ${selectMessage ? 'flex' : 'hidden'}`}>
                {/* CONVERSATION BOX */}
                <FaTimes className="absolute top-5 right-5 w-5 h-5 cursor-pointer md:hidden max-sm:visible" onClick={() => setSelectMessage(false)} />
                <div className="flex items-center gap-3 mb-6">
                    <img
                        src={profileImage}
                        alt="profile Image"
                        className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                    <h1 className="font-medium">Nelson C</h1>
                </div>
                <hr className="mb-6" />

                <div className="relative  h-[80vh] overflow-auto
     scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scroll-smooth">
                    <div className="flex flex-col gap-3 pb-3">
                    {Array(10)
                        .fill(0)
                        .map((each, index) => (
                            <>
                            <p className="bg-[#FFF3F6] p-3 w-1/2 max-sm:w-[70%] rounded-tl-lg rounded-tr-lg rounded-br-lg">Hi David, have you got the project
                            report pdf?</p>
                            <p className="bg-[#F7426F] text-white self-end p-3 w-1/2 max-sm:w-[70%] rounded-tl-lg rounded-tr-lg rounded-bl-lg">
                            NO. I did not get it.
                            </p>

                            <div className="flex items-center">
                                <span className="block border-t border-gray-300 w-full mt-2"></span>
                                <p className="mx-5">Yesterday</p>
                                <span className="block border-t border-gray-300 w-full mt-2"></span>
                            </div>

                            <p className="bg-[#FFF3F6] p-3 w-1/2 max-sm:w-[70%] rounded-tl-lg rounded-tr-lg rounded-br-lg">Hi David, have you got the project
                            report pdf?</p>
                            <p className="bg-[#F7426F] text-white self-end p-3 w-1/2 max-sm:w-[70%] rounded-tl-lg rounded-tr-lg rounded-bl-lg">
                            NO. I did not get it.
                            </p>
                            </>
                    ))}
                    </div>
                </div>
                
                {/* SENDING OF MESSAGE */}
                <div className={` ${theme === 'light' ? 'bg-gray-100' : 'bg-[#2C2C2C]'} px-3 py-5`}>
                    <div className="flex items-center">
                        <div className="flex items-center w-full bg-white p-2 rounded-3xl">
                            <FaMicrophone className="mx-3 cursor-pointer"/>
                            <input className="outline-none w-full py-2 border-r" type="text" placeholder="Write your message..." />
                            <FaLink className="cursor-pointer mx-3 border-gray-300"/>
                        </div>
                        <FaTelegram className="w-10 h-10 mx-2 text-deep-red-100 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Chats;
