import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' type='button' className='text-white'>
      <Image
        src={'/images/logo.jpg'}
        priority={true}
        width={300}
        height={200}
        alt=''
        className='rounded-xl'
      />
    </Link>
  )
}

export default Logo
