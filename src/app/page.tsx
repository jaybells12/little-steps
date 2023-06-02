import { CardShell } from "@/components/CardShell";
import { Button } from "@/components/Button";
import { Nav } from "@/components/Nav";

export default function LandingPage() {
  return (
    <main
      className={
        "h-screen w-full bg-landing bg-[size:1200px_800px] bg-[position:center_-50px] bg-no-repeat"
      }
    >
      <Nav />
      <CardShell
        title="Welcome to Little Steps!"
        className={"w-80 mt-64"}
      >
        <p
          className={
            "text-black text-2xl font-light pb-8 text-center leading-9 px-6"
          }
        >
          Please sign-in to keep records of your students' progress.
        </p>
        <Button
          text={"Sign-In"}
          link={"/"}
        />
      </CardShell>
    </main>
  );
}

