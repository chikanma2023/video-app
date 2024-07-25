import Notification from "@/components/Dashboard_Overview/Notification";
import Paid_Events from "@/components/Dashboard_Overview/Paid_Events";
import Upcoming_Events from "@/components/Dashboard_Overview/Upcoming_Events";
import PageIndicator from "@/components/Page-Indicator";
import { FaUsers, FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';

const stats = [
  { number: '1250+', text: 'Total Attendance', icon: <FaUsers className="text-4xl" /> },
  { number: '125+', text: 'Total Events', icon: <FaCalendarAlt className="text-4xl" /> },
  { number: '35', text: 'Upcoming Events', icon: <FaCalendarAlt className="text-4xl" /> },
  { number: '2560+', text: 'Total Paid Events', icon: <FaTicketAlt className="text-4xl" /> }
];

const Overview = () => {
  return (
    <div>
      <PageIndicator />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 my-4 gap-4">
        {stats.map((stat, index) => (
          <div
            className="flex items-center justify-between shadow-md rounded-lg overflow-hidden px-4 cursor-default bg-white dark:bg-deep-gray-50"
            key={index}
          >
            <div className="bg-cover bg-center h-32 flex flex-col justify-center ml-3">
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <span className="text-gray-500">{stat.text}</span>
            </div>
            <div className="text-deep-red-100 mr-3">{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="flex w-full gap-5 max-md:flex-col">
        <Upcoming_Events />
        <Notification />
      </div>
      <Paid_Events />
    </div>
  );
};

export default Overview;
