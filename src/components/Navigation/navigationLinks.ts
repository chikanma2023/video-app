import { BiUser } from "react-icons/bi";
import { FaHome, FaCalendarAlt, FaSignOutAlt, FaEdit, FaCommentAlt } from "react-icons/fa";
import { routes } from "@/routes";

export type LinkType = {
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export const navigationLinks: LinkType[] = [
  { text: "Overview", icon: FaHome, href: routes.dashboard },
  { text: "Events", icon: FaCalendarAlt, href: routes.events },
  // { text: "Attendants List", icon: BiUser, href: routes.attendants },
  { text: "Profile", icon: BiUser, href: routes.profile },
  { text: "Chats", icon: FaCommentAlt, href: routes.chats },
  { text: "Edit Profile", icon: FaEdit, href: routes.edit_profile },
  { text: "Logout", icon: FaSignOutAlt, href: "" },
];
