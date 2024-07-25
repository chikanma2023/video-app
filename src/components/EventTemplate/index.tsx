import { BiUser, BiCopyAlt, BiEdit, BiTrashAlt } from "react-icons/bi";
import { FaClock, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "@/routes";

const EventTemplate = ({
  host,
  time,
  title,
  img,
  id,
}: {
  host: string;
  time: string;
  title: string;
  img: string;
  id: string;
}) => {
  const itemClass = "flex items-center gap-2 capitalize text-sm";
  const btnClass = "flex items-center gap-0.5 hover:underline";
  return (
    <div
      className="rounded-xl text-sm p-4 md:p-8 flex flex-col gap-5 cursor-default 
    hover:[&_b]:text-deep-red-100 shadow md:shadow-none dark:md:shadow-xl bg-white dark:bg-deep-gray-50"
    >
      <div className="flex items-center justify-between">
        <div className={itemClass}>
          <BiUser size={18} />
          {host}
        </div>
        <div className={itemClass}>
          <FaClock size={18} />
          {time}
        </div>
      </div>
      <a
        href={routes.events_details}
        className="text-xl first-letter:capitalize dark:text-white font-medium hover:text-deep-red-100"
      >
        {title}
      </a>
      <div className="border-b border-b-light-gray-100"></div>
      <div className="h-[200px] md:h-[300px] w-full">
        <img src={img} className="rounded-lg h-full w-full" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className={btnClass}>
            <BiCopyAlt />
            <p>Copy Link</p>
          </button>
          <button className={btnClass}>
            <BiEdit />
            <p>Edit</p>
          </button>
          <button className={btnClass}>
            <BiTrashAlt />
            <p>Delete</p>
          </button>
        </div>
        <div>
          <Link
            to={`${routes.attendants}/${id}`}
            className="flex items-center gap-0.5 hover:underline hover:text-deep-red-100"
          >
            <FaEye />
            View Attendees
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventTemplate;
