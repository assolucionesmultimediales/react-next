import styles from './hero.module.css'

const Hero = ({ imagen, alt, title }) => {
    return (
      <div className={styles.conteiner}>
        <h3 >{title}</h3>
        <p>puro amor</p>
        <img src={imagen} alt={alt} />
        
      </div>
    );
  };
  

export default Hero;
