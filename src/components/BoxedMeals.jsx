import React from 'react'
import '../App.css'
import Box from '@mui/material/Box';
const BoxedMeals = () => {

  return (
    <>
  
    <div className='box_m' >
      <h1 className='flex justify-center text-6xl underline ' >Boxed Meals</h1>
      <h2 className=' text-white text-lg py-3 ' >"Cooking is all about people. Food is maybe the only universal thing that really has the power<br/> to bring everyone together.
      No matter what culture, everywhere around the world, people get together to eat.<br/>
      "Catering is an art. It’s about creating an atmosphere and a vibe to make a lasting impression.<br/>
      "Great food has a kind of magic. It makes families, friends, and communities come together.</h2>
      <hr className=' border-3 text-white ' ></hr>
      <h3 className='text-white py-9 text-3xl ' >BreakFast Box Meals</h3>
      
        <div className='sq_1' >
        <Box
          height={300}
          width={400}
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '5px solid grey' }}
          
        >
          <ul className='' >
            <h1 className='text-2xl text-white underline py-2 ' >Foods</h1>
            <li>★ Muffins</li>
            <li>★ Bagels & Cream Cheese</li>
            <li>★ Croissants</li>
            <li>★ Biscuits & Jam</li>
            <li>★ Granola Bars</li>
            <li>★ Yogurts</li>
            <li>★ Hard Boiled Eggs</li>
            <li>★ Whole Fruit</li>
            <li>★ Pancakes</li>
          </ul>
        
        </Box>
        </div>
    </div>

    </>
  )
}

export default BoxedMeals