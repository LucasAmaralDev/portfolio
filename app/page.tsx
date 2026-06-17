import Contato from "@/components/Contato";
import ExperienciaProfissional from "@/components/ExperienciaProfissional";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import Projetos from "@/components/Projetos";
import SobreMim from "@/components/SobreMim";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SobreMim />
      <ExperienciaProfissional />
      <Projetos />
      <Contato />
    </div>
  );
}
