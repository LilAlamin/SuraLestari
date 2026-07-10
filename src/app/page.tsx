import { HeroSection } from "@/components/HeroSection";
import { TentangSection } from "@/components/TentangSection";
import { PendekatanSection } from "@/components/PendekatanSection";
import { DestinasiSection } from "@/components/DestinasiSection";
import { DampakSection } from "@/components/DampakSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TentangSection />
      <PendekatanSection />
      <DestinasiSection />
      <DampakSection />
      <FooterSection />
    </main>
  );
}
