import Link from "next/link";
import { IconProps } from "@/components/Icons";
import { ComponentType } from "react";

export type MenuItemProps = {
  text: string;
  Icon: ComponentType<IconProps>;
  isOpen: boolean;
};

export const MenuItem = ({ text, Icon, isOpen }: MenuItemProps) => {
  return (
    <li
      className={`w-full px-1 relative h-12 rounded-md flex items-center text-primary hover:text-accent  hover:bg-primary first:mt-1`}
    >
      <Icon className={"w-10 h-10"} />
      {isOpen && (
        <p className={"font-bold leading-8 tracking-def ml-2"}>{text}</p>
      )}
    </li>
  );
};
