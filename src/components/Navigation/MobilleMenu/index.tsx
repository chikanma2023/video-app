import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navigationLinks } from "../navigationLinks";

const MobileMenu = () => {
  const location = useLocation();
  return (
    <div
      className="flex md:hidden items-center justify-center gap-5 w-full 
    p-4 z-10 fixed bottom-0 bg-white dark:bg-deep-gray-50"
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.text}
          to={link.href}
          className={`flex items-center gap-2 p-3 text-deep-ya rounded-xl dark:text-white 
                  ${
                    location.pathname.slice(11).replace("-", " ") ==
                      link.text.toLowerCase() && "bg-deep-yellow-100"
                  }`}
        >
          <link.icon className="text-xl" />
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
