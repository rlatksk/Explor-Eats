import React from 'react'
import Button from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CheHunTiau from '@/assets/images/CheHunTiau.jpg';

function PlaceHome() {
  return (
    <div className='flex flex-col h-fit items-center bg-secondaryColor gap-[3.125rem] pt-[4.375rem] pb-[3.125rem] px-[15rem]'>
      <div className='flex flex-col gap-[1.125rem] items-center'>
        <hr className='border-t-8 border-primaryColor w-full rounded-full' />
        <h1 className='text-primaryColor font-bold text-[4rem]'>THE PLACES</h1>
        <p className='text-primaryColor font-semibold text-[0.938rem] text-center w-4/5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum.
        </p>
        <hr className='border-t-8 border-primaryColor w-11/12 rounded-full' />
        <div className='grid grid-cols-2 gap-16'>
          <img src={CheHunTiau} className='h-[24.5rem] w-full object-cover rounded-[0.625rem]'/>
          <div className='flex flex-col gap-6 justify-center'>
            <h1 className='text-primaryColor font-bold text-[2rem]'>Daerah A</h1>
            <p className='text-primaryColor font-semibold text-[0.938rem] text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. Nullam arcu nunc, fermentum molestie diam in, pellentesque ultrices orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mauris libero, pretium eu porttitor vel, pretium vel purus.
            </p>
            <Button className="min-w-[34.375rem]" variant="default2" >
              <Link to="/">
                Start Discovering
              </Link>
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-16'>
          <div className='flex flex-col gap-6 justify-center'>
            <h1 className='text-primaryColor font-bold text-[2rem]'>Daerah A</h1>
            <p className='text-primaryColor font-semibold text-[0.938rem] text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. Nullam arcu nunc, fermentum molestie diam in, pellentesque ultrices orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mauris libero, pretium eu porttitor vel, pretium vel purus.
            </p>
            <Button className="{}min-w-[34.375rem]" variant="default2" >
            <Link to="/">
                Start Discovering
              </Link>
            </Button>
          </div>
          <img src={CheHunTiau} className='h-[24.5rem] w-full object-cover rounded-[0.625rem]'/>
        </div>
        
        
      </div>
        <hr className='border-t-8 border-primaryColor w-full rounded-full' />
    </div>
  )
}

export default PlaceHome