import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageDesc from '@/layout/PageDesc';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from "@/components/ui/button";
import axios from 'axios';

function FoodDetails() {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/food/${id}`)
      .then((response) => {
        setFood(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food details:", error);
        setError('Failed to fetch food details');
        setLoading(false);
      });
  }, [id]);

  if (!food) {
    return <div>Food not found.</div>;
  }

  return (
    <div>
      <PageDesc title={`${food.name}`} route={`Home / Food / ${food.name}`} />
      <div className='flex flex-col h-fit bg-tertiaryColor gap-[3.125rem] pt-[4.375rem] pb-[3.125rem] px-[20rem]'>
        <Link to="/list" className='text-secondaryColor font-semibold text-[1.25rem]'>
          &larr; Back
        </Link>
        <div className='grid grid-cols-9 gap-16 items-center'>
          <img src={food.foodImage} className='h-[24.5rem] col-span-5 w-full object-cover rounded-[0.625rem]' alt={food.name} />
          <div className='flex flex-col col-span-4 gap-6 justify-center border-secondaryColor border-2 rounded-[2rem] p-8 bg-primaryColor'>
            <h1 className='text-secondaryColor font-bold text-[2rem]'>{food.name}</h1>
            <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>
              {food.description}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-9 gap-16 items-center'>
          <div className='flex flex-col col-span-4 gap-6 justify-center border-secondaryColor border-2 rounded-[2rem] p-8 bg-primaryColor'>
            <h1 className='text-secondaryColor font-bold text-[2rem]'>Location</h1>
            <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>
              {food.location}
            </p>
            <Link className={buttonVariants({ variant: "secondary" })} href={food.gMapLocation} target="_blank">
              Maps
            </Link>
          </div>
          <img src={food.ambienceImage} className='h-[24.5rem] col-span-5 w-full object-cover rounded-[0.625rem]' alt="Ambience" />
        </div>
        <iframe src={food.gMapLocation}
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  );
}

export default FoodDetails;
