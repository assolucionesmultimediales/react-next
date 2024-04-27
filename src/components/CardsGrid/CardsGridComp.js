import Card from "../Card/Card"
import styles from "../CardsGrid/CardsGrid.module.css"


const CardsGridComp = ({cards}) => {
    return(
        <div className={styles.containercardsgrid}>
        {
          cards.map((card, index)=>(
          <Card key={index} 
          title={card.title} 
          image = {card.image} 
          description={card.description}
          />
        ))}
        </div>  
    )
}

export default CardsGridComp