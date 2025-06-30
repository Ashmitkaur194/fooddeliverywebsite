import React from 'react'
import Navbar from '../components/Navbar';
import categories from './category';
import Cards from '../components/Cards';
import { food_items } from '../../food';

const Home = () => {
  return (
    <div className='bg-slate-300 w-full min-h-screen'>
    <Navbar/>
    <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
      {categories.map((item)=>{
        return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-700 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-200'>
          {item.icon}
          {item.name}
         
          </div>
      })}
    </div>
    {food_items.map((item)=>(
      <Cards name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
    ))}
    </div>
  )
}

export default Home;
