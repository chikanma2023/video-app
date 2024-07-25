import { BiMoon, BiSun } from "react-icons/bi";

const ThemeBtn = () => {
  return (
    <div className="flex items-center gap-4 text-sm text-white py-10 px-5 fixed right-0 bottom-12 md:bottom-0 z-10">
      <button
        onClick={() => {
          window.localStorage.setItem("theme", "dark");
          window.location.reload();
        }}
        className="bg-deep-yellow-100 rounded-full p-2 text-deep-grey-200"
      >
        <BiMoon size={24} />
      </button>
      <button
        onClick={() => {
          window.localStorage.setItem("theme", "light");
          window.location.reload();
        }}
        className="bg-deep-grey-200 rounded-full p-2 text-deep-yellow-100"
      >
        <BiSun size={24} />
      </button>
    </div>
  );
};

export default ThemeBtn;
