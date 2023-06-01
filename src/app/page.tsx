import Link from "next/link";
import { CardShell } from "@/components/CardShell";
import { Button } from "@/components/Button";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <section
      className={
        "h-screen w-full bg-landing bg-cover bg-center bg-no-repeat bg-origin-content pb-24"
      }
    >
      <Nav />
      <CardShell
        title="Welcome to Little Steps!"
        className={"w-10/12 mt-52"}
      >
        <p
          className={
            "text-black text-2xl font-light pb-6 text-center leading-9 px-6"
          }
        >
          Please sign-in to keep records of your students' progress.
        </p>
        <Button
          text={"Sign-In"}
          link={"/"}
        />
      </CardShell>
    </section>
  );
}

