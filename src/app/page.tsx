import About from "@/components/sections/about";
import IndexSection from "@/components/sections/indexSection";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <IndexSection />
      <About />
      <Services />
    </main>
  );
}
