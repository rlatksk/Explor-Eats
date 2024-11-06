import React from 'react'
import Carousel from '@/components/Carousel'
import CheHunTiau from '@/assets/images/CheHunTiau.jpg'

function FoodHome() {
  const slides = [
    { id: 1, text: 'Slide 1', image: CheHunTiau },
    { id: 2, text: 'Slide 2', image: CheHunTiau },
    { id: 3, text: 'Slide 3', image: CheHunTiau },
    { id: 4, text: 'Slide 4', image: CheHunTiau },
    { id: 5, text: 'Slide 5', image: CheHunTiau },
  ];

  return (
    <div className='flex flex-col h-fit bg-[#F3F1E7] gap-[3.125rem] pt-[4.375rem] pb-[3.125rem] px-[6.25rem]'>
        <div className='flex flex-col gap-[1.125rem] items-center'>
            <hr className='border-t-8 border-secondaryColor w-full rounded-full' />
            <h1 className='text-secondaryColor font-bold text-[4rem]'>THE FOODS</h1>
            <p className='text-secondaryColor font-semibold text-[0.938rem] text-center w-4/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. </p>
            <hr className='border-t-8 border-secondaryColor w-11/12 rounded-full' />
            <div>
                <Carousel slides={slides}/>
            </div> 
        </div>
        <hr className='border-t-8 border-secondaryColor w-11/12 rounded-full' />
    </div>
  )
}

export default FoodHome