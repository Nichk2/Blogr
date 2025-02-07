import Phones from '../images/illustration-phones.svg';
import Circles from '../images/bg-pattern-circles.svg';

export default function StateArt() {
  return (
    <>
      <div className='relative'>
        {/* Section Container */}
        <section className='bg-darkBlue flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center h-[350px] lg:h-[400px] relative overflow-hidden rounded-bl-[5rem] rounded-tr-[5rem]'>
          
          {/* Background Circles */}
          <div className='absolute inset-0 overflow-hidden z-10'>
            <img
              src={Circles}
              alt="circles"
              className='absolute -left-40 -top-40 w-[800px] lg:w-auto' 
            />
          </div>

          {/* Text Content */}
          <div className='text-center lg:text-left z-20 pb-10 lg:ml-[600px] px-6 lg:px-0'> 
            <h1 className='text-white font-overpass text-3xl font-medium my-5'>
              State of the Art Infrastructure
            </h1>
            <p className='text-white font-ubuntu lg:w-2/3 mx-auto lg:mx-0'>
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
        </section>

        {/* Phones Image */}
        <img
          src={Phones}
          alt="phone"
          className='absolute lg:left-65 lg:top-40 lg:transform lg:-translate-y-1/2 z-30 w-[300px] md:w-[300px] lg:w-[500px] mx-auto lg:mx-0 left-1/2 transform -translate-x-1/2 -top-40 md:-top-35' 
        />
      </div>
    </>
  );
}