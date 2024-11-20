import React, { useState, useEffect } from 'react';
import { Carousel } from '@/components/Carousel';
import CheHunTiau from '@/assets/images/CheHunTiau.jpg';
import axios from 'axios';

function FoodHome() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const OPTIONS = { loop: true };

  useEffect(() => {
    axios.get('/api/food')
      .then((response) => {
        const foodData = response.data;

        const mappedSlides = foodData.map((food) => ({
          id: food._id,
          text: food.description,
          name: food.name,
          image: food.foodImage,
        }));

        setSlides(mappedSlides);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching food data');
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex flex-col h-fit items-center bg-primaryColor gap-[3.125rem] pt-[4.375rem] pb-[3.125rem] px-[10rem]'>
      <div className='flex flex-col gap-[1.125rem] items-center'>
        <hr className='border-t-8 border-secondaryColor w-full rounded-full' />
        <h1 className='text-secondaryColor font-bold text-[4rem]'>THE FOODS</h1>
        <p className='text-secondaryColor font-semibold text-[0.938rem] text-center w-4/5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum rutrum elit, ut mattis dolor vulputate eu. Nam vel libero ex. Quisque finibus ligula ac tempus dapibus. Cras sed dictum ligula. Vivamus hendrerit egestas laoreet. Pellentesque varius in nibh eu elementum. In congue sed lacus in condimentum.
        </p>
        <hr className='border-t-8 border-secondaryColor w-11/12 rounded-full' />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Carousel slides={slides} options={OPTIONS} />
        )}
        
      </div>
        <hr className='border-t-8 border-secondaryColor w-11/12 rounded-full' />
    </div>
  );
}

export default FoodHome;