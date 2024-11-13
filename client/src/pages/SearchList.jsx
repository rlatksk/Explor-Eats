import React, {useState, useEffect} from 'react'
import PageDesc from '@/layout/PageDesc'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import CheHunTiau from '@/assets/images/CheHunTiau.jpg';
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import axios from 'axios';

function SearchList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(9);
  const [pages, setPages] = useState(0);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    axios.get('/api/food')
      .then((res) => {
        console.log('Response data:', res.data);  // Inspect the structure of your data
        // Check if response data is an array and set items accordingly
        if (Array.isArray(res.data)) {
          setItems(res.data);  // Set items if it's an array
        } else {
          console.error('Expected an array in response, but got:', res.data);
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  
  
  return (
    <div>
      <PageDesc title={'Search List'} route={'Home / List'}/>
      <div className='flex flex-col h-fit bg-primaryColor gap-[2rem] pt-[4.375rem] pb-[3.125rem] px-[15rem]'>
        <div className='flex justify-between'>
          <h2 className='text-[2rem] text-secondaryColor'>Search for ""</h2>
          <div className="flex items-center bg-secondaryColor rounded-full px-4 py-2 w-64">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
            />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </button>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6 p-4'>
        {Array.isArray(items) ? (
          items.map((item, index) => (
            <Card key={index} className={`w-full bg-secondaryColor ${index === items.length - 1 ? 'col-span-2' : ''}`} style={{ height: '32rem' }}>
              <img src={item.foodImage} className='w-full rounded-t-xl object-cover h-2/3' alt={item.name} />
              <CardHeader className="h-1/3 gap-3">
                <CardTitle className="text-primaryColor">{item.name}</CardTitle>
                <CardDescription className="text-gray">{item.description}</CardDescription>
                <Button className="rounded-full" variant='default2' asChild>
                  <Link to={`/${item._id}`}>
                    Details
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          ))
        ) : (
          <p>No items available or data is not in the correct format.</p>
        )}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem >
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem >
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default SearchList