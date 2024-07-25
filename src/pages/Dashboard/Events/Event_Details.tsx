import PageIndicator from "@/components/Page-Indicator";
import { useTheme } from "@/context/themeContext";
import profileImage from "@/assets/img/about/img1.jpg";
import { BiCopyAlt, BiEdit, BiTrashAlt } from "react-icons/bi";

const Event_Details = () => {
    const { theme } = useTheme();

  return (
    <div>
      <PageIndicator />

      <div className="flex w-full gap-5 max-md:flex-col mt-5">
            <div className={`py-5 px-8 shadow-lg w-1/2 max-md:w-full rounded-lg ${theme === 'light' ? 'bg-white' : 'bg-[#202020]' }`}>
                <h3 className="font-medium text-2xl mb-2">Event Details</h3>
                <h1 className="font-medium text-deep-red-100 mb-3">Digital Product Design Seminar - 2023</h1>
                <hr />
                <div className="flex gap-3 items-center mt-5">
                    <img
                        src={profileImage}
                        alt="profile Image"
                        className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                    <div>
                        <h1 className="font-medium">Nelson C</h1>
                        <h1 className="font-semibold text-gray-400"><i>Host</i></h1>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="font-medium text-deep-red-100 mb-3">More Info</h1>
                    <hr />
                    <img
                        src={profileImage}
                        alt="profile Image"
                        className="w-full h-[300px] object-cover rounded-md my-3"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor modi quos commodi quam facere, quas tempore eius ab neque tempora nihil culpa voluptatem nesciunt a amet deserunt asperiores ea consequuntur sequi consequatur. Alias, quis.</p>
                </div>
            </div>

            <div className={`p-8 max-md:p-4 shadow-lg flex flex-col w-1/2 h-max max-md:w-full rounded-lg ${theme === 'light' ? 'bg-white' : 'bg-[#202020]' }`}>
                <div className="flex font-[450] my-3 justify-between">
                    <h3 className="font-medium">Date:</h3>
                    <h4 className="text-gray-500">January 1, 2024 - January 1, 2025</h4>
                </div>
                <hr />
                <div className="flex font-[450] my-3 justify-between">
                    <h3 className="font-medium">Starting Time:</h3>
                    <h4 className="text-gray-500">3:00 pm - 6:00 pm (UTC)</h4>
                </div>
                <hr />
                <div className="flex font-[450] my-3 justify-between">
                    <h3 className="font-medium">Reg. Deadline:</h3>
                    <h4 className="text-gray-500">June 1, 2023</h4>
                </div>
                <hr />
                <div className="flex font-[450] my-3 justify-between">
                    <h3 className="font-medium">Venue:</h3>
                    <h4 className="text-gray-500">California(CA), 92677</h4>
                </div>
                <hr />
                <div className="flex font-[450] my-3 justify-between">
                    <h3 className="font-medium">Attendees:</h3>
                    <h4 className="text-gray-500">50 / 153</h4>
                </div>
                <a href="#" className="bg-deep-red-100 font-medium self-center rounded-md w-2/5 max-md:w-4/5 text-center mt-3 text-white px-5 py-3 hover:bg-pinkgradient">START NOW</a>

                <div className="flex justify-between gap-4 text-sm mt-5">
                    <button className={'flex items-center gap-0.5 hover:underline hover:text-deep-red-100'}>
                        <BiCopyAlt />
                        <p>Copy Link</p>
                    </button>
                        <button className={'flex items-center gap-0.5 hover:underline hover:text-deep-red-100'}>
                        <BiEdit />
                    <p>Edit</p>
                    </button>
                        <button className={'flex items-center gap-0.5 hover:underline hover:text-deep-red-100'}>
                        <BiTrashAlt />
                    <p>Delete</p>
                    </button>
                </div>
            </div>
      </div>
    </div>

  );
};

export default Event_Details;
