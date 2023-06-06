"use client";

import { Button } from "../Button";
import Image from "next/image";
import { UserBlock } from "./UserBlock";
import { useContext } from "react";
import { AuthContext } from "@/app/AuthProvider";

export type NavProps = {};

export const Nav = () => {
  const isAuth = useContext(AuthContext);

  return (
    <nav
      className={
        "flex justify-between px-6 py-1 border-b border-b-accent border-opacity-25"
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
      {/* Here, if user is authenticated (context) then a userBlock is rendered instead of sign-in button */}

      {isAuth ? (
        <UserBlock
          userName={"Ms. Claire"}
          userImage={"/sample-profile-pic.jpg"}
        />
      ) : (
        <Button
          text={"Sign-In"}
          link={"/"}
        />
      )}
    </nav>
  );
};
