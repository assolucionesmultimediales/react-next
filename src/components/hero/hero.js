import styles from './hero.module.css'

const Hero = ({ imagen, alt, title }) => {
    return (
      <div className={styles.container}>
      <img src={imagen} alt={alt} />
      <div>
          <h3>{title}</h3>
          <p>puro amor</p>
      </div>
  </div>  
    );
  };
  

export default Hero;
