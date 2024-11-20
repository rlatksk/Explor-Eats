import React, { useState, useEffect } from 'react'
import Button from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CheHunTiau from '@/assets/images/CheHunTiau.jpg';
import Singkawang1 from '@/assets/images/Singkawang1.png';
import Pontianak1 from '@/assets/images/Pontianak1.png';
import axios from 'axios';

function PlaceHome() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('/api/city')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCities(res.data);
        } else {
          console.error('Expected an array in response, but got:', res.data);
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className='flex flex-col h-fit items-center bg-secondaryColor gap-[3.125rem] pt-[4.375rem] pb-[3.125rem] px-[15rem]'>
      <div className='flex flex-col gap-[1.125rem] items-center'>
        <hr className='border-t-8 border-primaryColor w-full rounded-full' />
        <h1 className='text-primaryColor font-bold text-[4rem]'>THE PLACES</h1>
        <p className='text-primaryColor font-semibold text-[0.938rem] text-center w-4/5'>
          Explore the beauty of various cities, their culture, and their culinary experiences.
        </p>
        <hr className='border-t-8 border-primaryColor w-11/12 rounded-full' />

        {cities.map((city, index) => (
          <div key={index} className='grid grid-cols-2 gap-16'>
            {index % 2 === 0 ? (
              <>
                <img src={Singkawang1} 
                     alt={city.city} 
                     className='h-[24.5rem] w-full object-cover rounded-[0.625rem]' />
                <div className='flex flex-col gap-6 justify-center'>
                  <h1 className='text-primaryColor font-bold text-[2rem]'>{city.city}</h1>
                  <p className='text-primaryColor font-semibold text-[0.938rem] text-justify'>
                    {city.culinaryDescription}
                  </p>
                  <Button className="min-w-[34.375rem]" variant="default2">
                    <Link to={`/details/place/${city.city}`}>
                      Start Discovering
                    </Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-col gap-6 justify-center'>
                  <h1 className='text-primaryColor font-bold text-[2rem]'>{city.city}</h1>
                  <p className='text-primaryColor font-semibold text-[0.938rem] text-justify'>
                    {city.culinaryDescription}
                  </p>
                  <Button className="min-w-[34.375rem]" variant="default2">
                    <Link to={`/details/place/${city.city}`}>
                      Start Discovering
                    </Link>
                  </Button>
                </div>
                <img src={Pontianak1} 
                     alt={city.city} 
                     className='h-[24.5rem] w-full object-cover rounded-[0.625rem]' />
              </>
            )}
          </div>
        ))}
      </div>
      <hr className='border-t-8 border-primaryColor w-full rounded-full' />
    </div>
  );
}

export default PlaceHome;