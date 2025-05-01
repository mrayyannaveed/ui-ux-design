import Image from 'next/image'

const Hero_section = () => {
  return (
    <div className='grid grid-cols-2 bg-[#F2F0F1]'>
        <section>
            <h1 className='text-2xl font-extrabold'>FIND CLOTHES THAT MATHES YOUR STYLES</h1>
        </section>
        <section>
            <Image className='h-[400px]' src={'/hero/hero.jpg'} alt='hero' width={600} height={600} />
        </section>
    </div>
  )
}

export default Hero_section