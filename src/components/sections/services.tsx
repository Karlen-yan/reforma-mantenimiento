import Link from 'next/link'
import Container from '../shared/container'
import Image from 'next/image'
import Card from '../shared/card'

const Services = () => {
  return (
    <section id='services' className=' bg-gray-300  mt-18 pt-16'>
      <Container>
        <h1 className=' text-5xl  font-montserrat text-center mb-12'>Servicios</h1>
        <div className=' flex flex-col lg:flex-row gap-4 justify-between items-center flex-wrap'>
          <div className='w-[32%]'>
            <Card
              imageUrl='/images/about.jpg'
              title='Encabezado'
              content='Algo para poner '
            />
          </div>
          <div className='w-[32%]'>
            <Card
              imageUrl='/images/about.jpg'
              title='Encabezado'
              content='Algo para poner '
            />
          </div>
          <div className='w-[32%]'>
            <Card
              imageUrl='/images/about.jpg'
              title='Encabezado'
              content='Algo para poner '
            />
          </div>
          <div className='w-[32%]'>
            <Card
              imageUrl='/images/about.jpg'
              title='Encabezado'
              content='Algo para poner '
            />
          </div>
          <div className='w-[32%]'>
            <Card
              imageUrl='/images/about.jpg'
              title='Encabezado'
              content='Algo para poner '
            />
          </div>
          <div className='w-[32%]'>
            <Card
              imageUrl='/images/about.jpg'
              title='Encabezado'
              content='Algo para poner '
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services
