"use client";

import { useBoolean } from "@/hooks/useBoolean";
import { MenuItem } from "./MenuItem";
import {
  DashboardIcon,
  TrackingIcon,
  LessonIcon,
  RightArrowIcon,
  StudentIcon,
  PlanningIcon,
} from "@/components/Icons";

const items = [
  {
    text: "Dashboard",
    icon: DashboardIcon,
  },
  {
    text: "Progress Tracker",
    icon: TrackingIcon,
  },
  {
    text: "Lesson Planner",
    icon: PlanningIcon,
  },
  {
    text: "My Class",
    icon: StudentIcon,
  },
  {
    text: "Lessons",
    icon: LessonIcon,
  },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useBoolean();

  const containerWidth = isOpen ? "w-56" : "w-14";

  const handleClick = () => {
    if (isOpen) {
      setIsOpen.off();
    } else {
      setIsOpen.on();
    }
  };

  return (
    <nav className={`rounded-t-lg bg-accent h-screen ${containerWidth}`}>
      <ul className={`flex flex-col gap-8  px-1 pt-1 items-center`}>
        <li
          className={`w-full relative h-12 rounded-md flex items-center text-primary hover:text-accent  hover:bg-primary`}
          onClick={handleClick}
        >
          <RightArrowIcon
            className={`w-6 h-6 ml-3 ${isOpen && "rotate-180"}`}
          />
        </li>
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            text={item.text}
            Icon={item.icon}
            isOpen={isOpen}
          />
        ))}
      </ul>
    </nav>
  );
};
