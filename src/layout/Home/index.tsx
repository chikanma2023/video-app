import { Outlet } from "react-router-dom";
// import Navbar from "@/components/Navigation/Navbar";

const HomeLayout = () => {
  return (
    <main id="__next">
      <div className="body-area bd-theme-dark">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </main>
    // <main className="bg-[#]">
    //   <div className="w-full md:w-10/12 p-4 md:p-0 mx-auto">
    //     {/* <Navbar /> */}
    //     <Outlet />
    //   </div>
    // </main>
  );
};

export default HomeLayout;
