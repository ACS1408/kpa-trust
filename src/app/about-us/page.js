import AboutAvenues from "@/components/AboutAvenues";
import AboutBanner from "@/components/AboutBanner";
import AboutBoardMembers from "@/components/AboutBoardMembers";
import AboutLegalInfo from "@/components/AboutLegalInfo";
import ContributeBanner from "@/components/ContributeBanner";

export default function AboutUs() {
  return (
    <main>
      <AboutBanner />
      <AboutAvenues />
      <AboutBoardMembers />
      <ContributeBanner />
      <AboutLegalInfo />
    </main>
  );
}
