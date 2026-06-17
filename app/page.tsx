import DigitandoTexto from "@/components/DigitandoTexto";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import SobreMim from "@/components/SobreMim";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar /> 
      <HeroSection />
      <SobreMim />

    </div>
  );
}
