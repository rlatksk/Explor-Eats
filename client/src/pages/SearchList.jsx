import React, { useState, useEffect } from 'react';
import PageDesc from '@/layout/PageDesc';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import axios from 'axios';

function SearchList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [totalItems, setTotalItems] = useState(0);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    axios.get('/api/food')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setItems(res.data);
          setTotalItems(res.data.length);
        } else {
          console.error('Expected an array in response, but got:', res.data);
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const paginatedItems = items.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const paginationRange = [];
  const maxPagesToShow = 3;

  let startPage = Math.max(page - Math.floor(maxPagesToShow / 2), 1);
  let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationRange.push(i);
  }

  return (
    <div>
      <PageDesc title={'Search List'} route={'Home / List'} />
      <div className='flex flex-col h-fit bg-primaryColor gap-[2rem] pt-[4.375rem] pb-[3.125rem] px-[15rem]'>
        <div className='flex justify-between'>
          <h2 className='text-[2rem] text-secondaryColor'>Search for "{keyword}"</h2>
          <div className="flex items-center bg-secondaryColor rounded-full px-4 py-2 w-64">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </button>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6 p-4'>
        {Array.isArray(items) ? (
          items.map((item, index) => (
            <Card key={index} className={` w-full bg-secondaryColor ${index === items.length - 1 ? 'col-span-2' : ''}`} style={{ height: '32rem' }}>
              <img src={item.foodImage} className='w-full rounded-t-xl object-cover h-1/2' alt={item.name} />
              <CardHeader className="h-fit gap-3">
                <CardTitle className="text-primaryColor">{item.name}</CardTitle>
                <CardDescription className="text-gray line-clamp-6 overflow-hidden text-ellipsis whitespace-pre-line" >{item.description}</CardDescription>
                <Button className="rounded-full" variant='default2' asChild>
                  <Link to={`/details/food/${item._id}`}>
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
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(page - 1)} />
            </PaginationItem>
            {page > 1 && (
              <PaginationItem>
                <PaginationLink onClick={() => handlePageChange(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
            )}
            {paginationRange.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink 
                  href="#"
                  isActive={page === pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}
            {page < totalPages && (
              <PaginationItem>
                <PaginationLink onClick={() => handlePageChange(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(page + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default SearchList;
