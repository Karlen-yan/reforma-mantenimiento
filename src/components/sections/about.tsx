import Container from "../shared/container"
import Image from "next/image";

const About = () => {
  return (
    <section id='about' className='h-[300px] lg:h-[670px] border-b-2 border-white mt-18 pt-52 mb-56'>
      <Container>
      <div className=' flex flex-col lg:flex-row justify-center items-center'>
        <div className="w-[100%] lg:w-[50%]">
            <Image src={"/images/about.jpg"} alt="Sobre mi" width={600} height={400} />
        </div>
        <div className="w-[100%] lg:w-[50%]">
        <h1 className=" text-2xl  font-montserrat m-8 lg:text-5xl ">Servicios de Construcción</h1>
        <p className=" text-secondary font-serif m-8 lg:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem
          reprehenderit rem, quas fuga aut laborum, voluptates facere illum,
          iste consequatur vitae fugi
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem
          reprehenderit rem, quas fuga aut laborum, voluptates facere illum,
          iste consequatur vitae fugi
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem
          reprehenderit rem, quas fuga aut laborum, voluptates facere illum,
          iste consequatur vitae fugi
        </p>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default About;
