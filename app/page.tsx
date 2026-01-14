import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/Hero";
import Curriculum from "@/components/Curriculum";
import Mentors from "@/components/Mentors";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <Hero />
      <Curriculum />
      <Mentors />
    </div>
  );
}
