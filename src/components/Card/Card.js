import Image from "next/image";
import styles from './Card.module.css'

const Card = (props) => {
    const { image, title, description } = props
    return(
        <div className={styles["contenedorcard"]}>
            <Image
            src={image}
            alt='Next.js Logo'
            width={200}
            height={200}
            priority/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Give me love</button>
        </div>
    );
};

export default Card