import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { routes } from "@/routes";
import PageIndicator from "@/components/Page-Indicator";
import EventTemplate from "@/components/EventTemplate";
import { events } from "@/DummyData/index";

const filters = [
  "Coming Events",
  "Past Events",
  "Public Event",
  "Private Events",
];

const Events = () => {
  const [filter, setFilter] = useState<string>("All Events");
  const selectFilterString = (arg: string) => setFilter(arg);
  return (
    <div className="flex flex-col gap-8">
      <PageIndicator>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to={routes.createEvent}
            className={`border-none1 apitalize text-sm hover:bg-deep-red-100 hover:text-white 
              shadow bg-white dark:bg-transparent dark:border flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg`}
          >
            <FaPlus size={18} />
            Create Event
          </Link>
          <div className="flex gap-1 items-center text-sm text-neutral-500">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  size="sm"
                  className="rounded-lg text-sm py-2 px-3 bg-white dark:text-white dark:bg-transparent dark:border"
                >
                  Filter By:
                </Button>
              </DropdownTrigger>
              <DropdownMenu className="bg-white dark:bg-deep-gray-50 px-2 text-neutral-500 dark:text-white text-sm">
                {filters.map((filter) => (
                  <DropdownItem
                    key={filter}
                    onClick={() => selectFilterString(filter)}
                    className="border border-transparent rounded-lg hover:border-deep-yellow-100 px-4"
                  >
                    {filter}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <div className="bg-white py-2 px-3 rounded-lg">{filter}</div>
          </div>
        </div>
      </PageIndicator>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <EventTemplate key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
