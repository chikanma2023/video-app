import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import profileImage from "@/assets/img/about/img1.jpg";

const Header = ({ toggle }: { toggle: () => void }) => {
  return (
    <div
      className="hidden md:block sticky top-0 right-0 w-full 
    p-3 md:h-[82px] md:px-10 bg-white dark:bg-deep-grey-200 opacity-95 z-20"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={toggle}>
            <BiMenuAltLeft size={32} />
          </button>
          <form className="hidden md:flex items-center gap-2 rounded-lg bg-neutral-100 dark:bg-deep-gray-50 text-light-gray-100 p-3">
            <input
              type="search"
              placeholder="Search Here . . ."
              className="bg-transparent outline-none"
            />
            <BiSearch size={23} />
          </form>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={profileImage}
            alt="profile Image"
            className="w-[40px] h-[40px] rounded-full"
          />
          <p className="hidden md:block dark:text-white">Nelson C</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
