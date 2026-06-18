import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { BetaNotice } from "@/components/sections/BetaNotice";
import { Pricing } from "@/components/sections/Pricing";
import { ProfitSharing } from "@/components/sections/ProfitSharing";
import { CollectionReservation } from "@/components/sections/CollectionReservation";
import { ApiAccess } from "@/components/sections/ApiAccess";
import { FAQ } from "@/components/sections/FAQ";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <BetaNotice />
        <Pricing />
        <ProfitSharing />
        <CollectionReservation />
        <ApiAccess />
        <FAQ />
        <FooterCTA />
      </main>
    </>
  );
}
