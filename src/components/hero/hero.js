const Hero = ({ imagen, alt, title }) => {
    return (
      <div>
        <h3 style={{color:'#AD77F1', textAlign:'center', fontSize:'30px', marginTop:'4%', marginBottom:'4%'}}>{title}</h3>
        <img src={imagen} alt={alt} />
        
      </div>
    );
  };
  

export default Hero;
