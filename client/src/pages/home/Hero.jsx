import React from 'react';
import bgDayak from '@/assets/images/bg-dayak.jpg';
import heroImg from '@/assets/images/hero-img.png';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bgDayak})` }}>
      <div className='absolute inset-0 bg-black opacity-65'></div> {/* Overlay with opacity */}
      <div className='relative grid grid-cols-2 gap-5 place-items-center align-center h-full w-full px-[3.25rem] pt-[10rem] pb-[5rem]'>
        <div className='flex flex-col items-start gap-y-[1.25rem]'>
          <h1 className='text-white text-[2.5rem] font-bold'>West Borneo Culinary</h1>
          <hr className='border-t-2 border-gray-300 w-full rounded-full' />
          <p className='text-[0.875rem] font-semibold text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. Nullam arcu nunc, fermentum molestie diam in, pellentesque ultrices orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mauris libero, pretium eu porttitor vel, pretium vel purus.
          </p>
          <Button className="min-w-[34.375rem]">
            <Link to="/">
              Start Discovering
            </Link>
          </Button>
        </div>
        <div className='items-center justify-center w-fit h-fit'>
          <img src={heroImg} className=''/>
        </div>
      </div>
    </div>
  );
}

export default Hero;