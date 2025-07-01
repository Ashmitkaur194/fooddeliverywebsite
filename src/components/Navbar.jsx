import { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { dataContext } from "../context/UserContext";
import { food_items } from "../../food";


function Navbar() {
  let {input,setInput,cate,setCate}=useContext(dataContext);
  useEffect(()=>{
    let newlist=food_items.filter((item)=>item.food_name.includes(input) ||item.food_name.toLowerCase().includes(input))
    setCate(newlist);
  },[input])
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md'>
        <MdFastfood  className='w-[30px] h-[30px] text-green-500'/>
        {/* Logo or icon can go here */}
      </div>

      <form className='w-[40%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'
      onSubmit={(e)=>e.preventDefault()}>
        <IoSearch className='text-green-500 w-[20px] h-[20px]' />
        <input
          type='text'
          placeholder='Search Items...'
          className='w-[100%] outline-none text-[20px]'
          onChange={(e)=>setInput(e.target.value)} value={input}
        />
      </form>

      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>0</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
      </div>
    </div>
  );
}

export default Navbar;