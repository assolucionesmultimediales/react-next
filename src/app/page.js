import styles from "./page.module.css";
import NavBar from "@/components/NavBar/Navbar";
import Card from "@/components/Card/Card";
import cardGrid from "@/components/CardsGrid/CardsGrid";
import Hero from "@/components/hero/hero"
import fotos from "@/components/fotos/foto";
import Hero2 from "@/components/hero2/hero2";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar title={'Gojo Pasion'}/>
      <Hero imagen={fotos[0].imagen} alt={fotos[0].description} title={fotos[0].title} />
      <Hero2 mainText={`El mas lindo`}/>
      <div>
      {
        cardGrid.map((card, index)=>(
        <Card key={index} 
        title={card.title} 
        image = {card.image} 
        description={card.description}
        />
      ))}
      </div>  
      

    </main>
  );
}
