import React, { useState } from 'react';
import PageIndicator from "@/components/Page-Indicator";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  language: string;
  aboutMe: string;
}

const EditProfile = () => {
  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    language: "",
    aboutMe: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const inputClass =
    "w-full outline-none rounded-md p-3 bg-gray-100 dark:bg-deep-gray-50  focus:border-deep-red-100";

  return (
    <div>
      <PageIndicator />
      <form className="w-full mx-auto p-8 shadow-md rounded-md mt-8 bg-white dark:bg-transparent">
        <div className="flex ">
          <h4 className="font-medium text-[1.5rem]">Profile Settings</h4>
        </div>
        <hr className="my-8" />
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            First Name:
          </label>
          <input
            type="text"
            placeholder="Owen"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Edith"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email:</label>
          <input
            type="email"
            placeholder="info@mail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Gender:
          </label>
          <input
            type="text"
            placeholder="Male"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Language:
          </label>
          <input
            type="text"
            placeholder="English"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            About Me:
          </label>
          <textarea
            name="aboutMe"
            placeholder="Write something about yourself..."
            value={formData.aboutMe}
            onChange={handleChange}
            className={inputClass}
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Profile Image:
          </label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          className="w-2/5 max-md:w-full bg-deep-red-100 font-medium text-white py-3 mt-4 rounded-md hover:bg-pinkgradient transition duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
