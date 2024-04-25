import Image from "next/image"

const Hero2 = ({mainText}) =>{
    return(
        <div>
            <h3 style={{color:'#AD77F1', textAlign:'center', fontSize:'30px', marginTop:'4%', marginBottom:'4%'}}>{mainText}</h3>
            <Image alt="gojo2" 
            src={`/imagenes/gojo2.png`} 
            width={`1920`} 
            height={`1080`}/>
        </div>
    )
}

export default Hero2