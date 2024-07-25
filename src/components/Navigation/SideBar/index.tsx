import { Link, useLocation } from "react-router-dom";
// import { Accordion, AccordionItem } from "@nextui-org/react";
import Logo from "@/assets/img/logo/logo.svg";
import { navigationLinks } from "../navigationLinks";
// import { FaCalendarAlt } from "react-icons/fa";

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  const location = useLocation();

  // const events = [
  //   { text: "", href: "Coming Events" },
  //   { text: "", href: "Past Events" },
  // ];

  return (
    <aside
      className={`hidden md:block absolute md:fixed w-11/12 bg-deep-gray-300
         border-r dark:border-r-deep-gray-50 delay-150 duration-300 ${
           isOpen ? "md:w-[20%]" : "md:w-[5%]"
         }`}
    >
      <div className="px-3 py-4 flex bg-deep-grey-200">
        <img src={Logo} alt="logo" className="h-[50px]" />
      </div>
      <div
        className={`flex flex-col gap-1 p-2 pt-5 ${
          !isOpen && "flex flex-col gap-5"
        }`}
      >
        {/* <Accordion isCompact>
          <AccordionItem
            key="1"
            title="Events"
            startContent={<FaCalendarAlt className="text-xl" />}
            classNames={{ indicator: "hidden" }}
          >
            <div className="flex flex-col gap-5 md:ml-4 text-sm">
              <Link to={""}>Coming Events</Link>
              <Link to={""}>Past Events</Link>
            </div>
          </AccordionItem>
        </Accordion> */}
        {navigationLinks.map((link) => (
          <Link
            key={link.text}
            to={link.href}
            className={`px-3 py-3 flex items-center gap-4 rounded-lg bg-top bg-no-repeat 
              bg-cover border border-transparent hover:border-deep-yellow-100 z-10 
               ${
                 location.pathname.slice(11).replace("-", " ") ==
                   link.text.toLowerCase() &&
                 "bg-[url('../src/assets/img/Backgroud-images/dropdown-bg.png')] text-deep-grey-200"
               }`}
          >
            <span className={!isOpen ? "ml-0.5" : ""}>
              <link.icon className="text-xl" />
            </span>
            <p
              className={`delay-150 duration-500 ${
                isOpen ? "-translate-x-0" : "-translate-x-full opacity-0"
              }`}
            >
              {link.text}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
