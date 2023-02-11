import { useRouter } from 'next/router';
import React, { useState } from 'react'

const SearchForm = () => {
  const router = useRouter()
  const [query, setQuery] = useState('');

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <div className='py-2 md:py-4 px-4 mx-auto lg:min-w-[400px]'>
      <form onSubmit={submitHandler}>
        <div className="flex w-full bg-light text-secondary items-center justify-start rounded h-12">

          <input
            placeholder="Rechercher un service"
            type="text"
            name="query"
            onChange={queryChangeHandler}
            className="ml-4 flex-grow overflow-hidden w-full placeholder-current font-normal text-base h-full transition duration-200 border-none outline-none focus:outline-none focus:border-none rounded-l appearance-none md:mb-0 bg-transparent"
          />
          <button className='bg-primary w-12 h-full flex items-center justify-center overflow-hidden rounded-r' type="submit" aria-label="search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-light">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm