import Image from "next/image"
import styles from './hero2.module.css'

const Hero2 = ({mainText}) =>{
    return(
        <div className={styles["container"]}>
            <h3>{mainText}</h3>
            <p>mi amorrr</p>
        </div>
    )
}

export default Hero2