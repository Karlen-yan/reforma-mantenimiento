import Link from "next/link"
import Container from "../shared/container"

const IndexSection = () => {
  return (
    <section id='/' className='relative bg-cover bg-imagen  h-[300px] lg:h-[670px] border-b-2 border-primary'>
      <Container>
      <div className='absolute bg-opacity-70 left-0 top-8 p-5 bg-gray-200   lg:top-44 lg:left-44 lg:w-[40%] lg:p-7'>
        <h1 className=" text-2xl  font-montserrat m-8 lg:text-5xl ">Servicios de Construcción</h1>
        <p className=" text-secondary font-serif m-8 lg:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem
          reprehenderit rem, quas fuga aut laborum, voluptates facere illum,
          iste consequatur vitae fugi
        </p>
        <Link href="#contact" className=" bg-primary text-white rounded-lg lg:text-xl p-2 m-8">¿Hablamos?</Link>
      </div>
      </Container>
    </section>
  )
}

export default IndexSection
