import React from 'react'
import PageDesc from '@/layout/PageDesc';
import CheHunTiau from '@/assets/images/CheHunTiau.jpg';

function About() {
  return (
    <div>
        <PageDesc title={'About Us'} route={null} />
        <div className='flex flex-col h-fit items-center bg-primaryColor gap-[2rem] pt-[4.375rem] pb-[3.125rem] px-[20rem]'>
            <img src={CheHunTiau} alt="" className='h-[20rem] w-[45rem] object-cover ' />
            <p className='text-secondaryColor font-semibold text-[1.2 rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. Nullam arcu nunc, fermentum molestie diam in, pellentesque ultrices orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mauris libero, pretium eu porttitor vel, pretium vel purus.</p>
        </div>
    </div>
    

  )
}

export default About