import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Navigation/Header";
import { useTheme } from "@/context/themeContext";
import SideBar from "@/components/Navigation/SideBar";
import MobileMenu from "@/components/Navigation/MobilleMenu";
import ThemeBtn from "@/components/ThemeBtn";

const DashboardLayout = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSideBar = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className={`App ${theme}`}>
      <div className="w-full flex relative">
        <SideBar isOpen={isOpen} />
        <div
          className={`w-full ${
            isOpen ? "md:w-[80%]" : "md:w-[95%]"
          } absolute right-0 delay-150 duration-300`}
        >
          <Header toggle={toggleSideBar} />
          <div className="w-full md:px-10 md:bg-neutral-100 dark:bg-transparent flex flex-col gap-4 shadow-lg">
            <div className="px-4 pb-24">
              <ThemeBtn />
              <Outlet />
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
