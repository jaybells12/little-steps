import { Button } from "../Button";
import Image from "next/image";

export type NavProps = {};

export const Nav = (props: NavProps) => {
  return (
    <nav
      className={
        "flex justify-between py-1 px-4 border-b border-b-accent border-opacity-25"
      }
    >
      <div className={"flex items-center gap-2"}>
        <Image
          src={"/icons_nav_books.png"}
          alt={"Books"}
          height={50}
          width={50}
          className={
            "px-1 py-1.5 border-2 border-accent rounded-lg block grow-0 shrink-0"
          }
        />
        <p>Little Steps</p>
      </div>
      <Button
        text={"Sign-In"}
        link={"/"}
      />
    </nav>
  );
};
