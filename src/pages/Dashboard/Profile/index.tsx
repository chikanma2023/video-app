import { FaEdit } from "react-icons/fa";
import PageIndicator from "../../../components/Page-Indicator";
import profileImage from "@/assets/img/about/img1.jpg";
import { routes } from "../../../routes";

const Profile = () => {
  return (
    <div>
      <PageIndicator />
      <div className="mt-8 p-6 bg-white dark:bg-deep-gray-50 rounded-md dark:text-white">
        <div className="flex justify-between items-center ">
          <h4 className="font-semibold text-2xl">Profile Information</h4>
          <a href={routes.edit_profile}>
            <FaEdit
              className="h-[20px] w-[20px] text-gray-400 cursor-pointer"
              title="Edit Profile"
            />
          </a>
        </div>
        <hr className="my-8" />
        <div className="flex max-md:flex-col">
          <div className="w-1/3 mr-8 max-md:w-full">
            <img
              src={profileImage}
              alt="profile Image"
              className="w-full h-[300px] mb-8 rounded-md"
            />

            <div className="[&_h3]:dark:text-white">
              <div className="flex font-[450] my-3 justify-between">
                <h3 className="text-gray-500 font-medium">Full Name:</h3>
                <h4>Nelson C</h4>
              </div>
              <hr />
              <div className="flex font-[450] my-3 justify-between">
                <h3 className="text-gray-500 font-medium">Email:</h3>
                <h4>king@gmail.com</h4>
              </div>
              <hr />
              <div className="flex font-[450] my-3 justify-between">
                <h3 className="text-gray-500 font-medium">Gender:</h3>
                <h4>Male</h4>
              </div>
              <hr />
              <div className="flex font-[450] mt-3 justify-between">
                <h3 className="text-gray-500 font-medium">Language:</h3>
                <h4>English</h4>
              </div>
            </div>
          </div>
          <div className="border-l dark:text-white dark:border-l-light-gray-100 max-md:border-none pl-8 max-md:p-0 w-2/3 max-md:w-full max-md:mt-5">
            <h3 className="mb-5 font-medium">About Me</h3>
            <div>
              <p>
                When referring to Lorem ipsum, different expressions are used,
                namely fill text , fictitious text , blind text or placeholder
                text : in short, its meaning can also be zero, but its
                usefulness is so clear as to go through the centuries and resist
                the ironic and modern versions that came with the arrival of the
                web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    
};

export default Profile;
