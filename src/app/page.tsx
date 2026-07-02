import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { ApproachSection } from "@/components/ApproachSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TeamSection } from "@/components/TeamSection";
import { MentorsSection } from "@/components/MentorsSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <ApproachSection />
      <PortfolioSection />
      <TeamSection />
      <MentorsSection />
      <FooterSection />
    </main>
  );
}
