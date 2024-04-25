import Image from "next/image";

const Card = (props) => {
    const { image, title, description } = props
    return(
        <div style={{background:'#75005D',padding:'30px', marginBottom:'30px', marginTop:'30px'}}>
            <Image
            src={image}
            alt='Next.js Logo'
            width={180}
            height={37}
            priority/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Click me Alicia</button>
        </div>
    );
};

export default Card