import React from 'react'
import PageDesc from '@/layout/PageDesc'
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from "@/components/ui/button"

import CheHunTiau from '@/assets/images/CheHunTiau.jpg';

function FoodDetails() {
    return (
        <div>
            <PageDesc />
            <div className='flex flex-col h-fit items-center bg-tertiaryColor gap-[3.125rem] pt-[4.375rem] pb-[3.125rem] px-[20rem]'>
                <div className='grid grid-cols-9 gap-16 items-center'>
                    <img src={CheHunTiau} className='h-[24.5rem] col-span-5 w-full object-cover rounded-[0.625rem]'/>
                    <div className='flex flex-col col-span-4 gap-6 justify-center border-secondaryColor border-2 rounded-[2rem] p-8 bg-primaryColor'>
                        <h1 className='text-secondaryColor font-bold text-[2rem]'>Food</h1>
                        <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. 
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-9 gap-16 items-center'>
                    <div className='flex flex-col col-span-4 gap-6 justify-center border-secondaryColor border-2 rounded-[2rem] p-8 bg-primaryColor'>
                        <h1 className='text-secondaryColor font-bold text-[2rem]'>Lokasi (Resto)</h1>
                        <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum. Mauris ut accumsan magna. Aliquam aliquet accumsan metus, sed congue ipsum hendrerit eu. Fusce condimentum laoreet lacus eu dapibus. Proin a tempus justo. 
                        </p>
                        <Link className={buttonVariants({ variant: "secondary" })}>
                            Maps
                        </Link>
                    </div>
                    <img src={CheHunTiau} className='h-[24.5rem] col-span-5 w-full object-cover rounded-[0.625rem]'/>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.25794003408!2d108.9902423!3d0.9105629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e3720ccabf808d%3A0x78b48c1f3b9de95a!2sChoi%20Pan%20Tho%20Ce!5e0!3m2!1sen!2sid!4v1731047105380!5m2!1sen!2sid" 
                width="100%"
                height="450" 
                style={{ border: "0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
    )
}

export default FoodDetails