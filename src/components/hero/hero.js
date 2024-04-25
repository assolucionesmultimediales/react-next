const Hero = ({ imagen, alt, title }) => {
    return (
      <div>
        <img src={imagen} alt={alt} />
        <h3 style={{color:'#75005D'}}>{title}</h3>
      </div>
    );
  };
  

export default Hero;
