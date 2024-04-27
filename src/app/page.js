
import NavBar from "@/components/NavBar/Navbar";
import Card from "@/components/Card/Card";
import cardGrid from "@/components/CardsGrid/CardsGrid";
import Hero from "@/components/hero/hero"
import fotos from "@/components/fotos/foto";
import Hero2 from "@/components/hero2/hero2";
import CardsGridComp from "@/components/CardsGrid/CardsGridComp";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <NavBar title={'Satoru Gojo'}/>
      <Hero imagen={fotos[0].imagen} alt={fotos[0].description} title={fotos[0].title} />
      <Hero2 mainText={`抵抗しないでください`}/>
      <CardsGridComp cards={cardGrid}/>
      <Footer/>
    </main>
  );
}
