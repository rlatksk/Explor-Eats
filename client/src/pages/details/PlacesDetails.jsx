import React from 'react'
import PageDesc from '@/layout/PageDesc'
import CheHunTiau from '@/assets/images/CheHunTiau.jpg';
import { Link } from 'react-router-dom';

function PlacesDetails() {
  return (
    <div>
      <PageDesc title={'PlacesDetails'} route={'Home/Place/(Choipan)'}/>
      <div className='flex flex-col h-fit bg-tertiaryColor gap-[3.125rem] pt-[4.375rem] pb-[3.125rem] px-[15rem]'>
        <Link to={"/"} className='text-secondaryColor font-semibold text-[1.25rem]'>
          &larr; Back
        </Link>
        <div className='grid grid-cols-7 gap-12'>
          <div className='flex flex-col col-span-3'>
            <img src={CheHunTiau} className='object-cover h-full w-full' />
          </div>
          <div className='grid grid-cols-2 grid-rows-2 col-span-4 gap-x-8 gap-y-10 py-10'>
            <div className='flex flex-col bg-primaryColor text-secondaryColor border-secondaryColor border-2 rounded-[2rem] p-6'>
              <h1 className='text-secondaryColor font-bold text-[2rem]'>People</h1>
              <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. </p>
            </div>
            <div className='flex flex-col bg-primaryColor text-secondaryColor border-secondaryColor border-2 rounded-[2rem] p-6'>
              <h1 className='text-secondaryColor font-bold text-[2rem]'>Culture</h1>
              <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. </p>
            </div>
            <div className='flex flex-col bg-primaryColor text-secondaryColor border-secondaryColor border-2 rounded-[2rem] p-6'>
              <h1 className='text-secondaryColor font-bold text-[2rem]'>Culinary</h1>
              <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. </p>
            </div>
            <div className='flex items-center justify-center flex-col gap-10 bg-secondaryColor text-primaryColor border-secondaryColor border-2 rounded-[2rem] p-6'>
              <h1 className='text-primaryColor font-bold text-[2rem]'>List Makanan</h1>
              <Link to='/' className='bg-primaryColor text-white px-6 py-4 rounded-full flex items-center justify-center hover:bg-gray'>
                <h1 className='text-secondaryColor font-bold text-[2rem]'>
                  &rarr;
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PlacesDetails