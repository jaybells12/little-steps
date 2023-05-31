import Link from "next/link";
import { CardShell } from "@/components/CardShell";

export default function Home() {
  return (
    <div
      className={
        "h-screen w-full bg-landing bg-cover bg-center bg-no-repeat bg-origin-content pb-24"
      }
    >
      <CardShell
        title="Welcome to Little Steps!"
        className={"w-10/12 relative -bottom-[40svh]"}
      >
        <p
          className={
            "text-black text-2xl font-light pb-6 text-center leading-9 px-6"
          }
        >
          Please sign-in to keep records of your students' progress.
        </p>
        <Link
          href={"/"}
          className={"bg-accent rounded-full px-6 py-2.5 inline-block"}
        >
          <span
            className={
              "text-primary font-bold tracking-[0.03em] inline-block align-super"
            }
          >
            Sign-In
          </span>
        </Link>
      </CardShell>
    </div>
  );
}

