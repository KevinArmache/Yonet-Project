import React from 'react'

const CategoryCard = ({ category }) => {
  return (
    <div className='hover:text-primary ease-in duration-300 text-secondary hover:cursor-pointer'>
      <img src="https://st4.depositphotos.com/16490812/38513/i/600/depositphotos_385133228-stock-photo-producer-dj-mixer-in-a.jpg" alt="" className='w-full object-cover rounded-md' />
      <div className='mt-2'>
        <p className='font-light text-base'>
          Beat maker
        </p>
      </div>
    </div>
  )
}

export default CategoryCard