import { Menu } from "@/components/Menu";
import { Nav } from "@/components/Nav";

export default function HomePage(props: any) {
  return (
    <section className={"bg-map"}>
      <Nav />
      <Menu />
    </section>
  );
}
