// import React from 'react'
// import image1 from '../assets/image1.avif'; 

// import { LuLeafyGreen } from "react-icons/lu";

// const Cards = ({name,image,id,price,type}) => {

//   return (
//     <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg">
//       <div className="w-full h-[60%] overflow-hidden rounded-lg">
//         <img src={image} alt="Food Item" className="object-cover w-full h-full" />
//       </div>
//       <div className="text-2xl font-semibold">{name}</div>
//       <div className="w-full flex justify-between items-center">
//         <div className='text-lg font-bold text-green-500'>{price}</div>
//         <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'><LuLeafyGreen size={24} className='text-green-500 text-lg font-semibold'/><span>{type}</span></div>
//       </div>
//       <button className='w-full p-3 bg-green-300 rounded-lg text-gray-700 hover:bg-green-400'>Add to dish</button>
//     </div>
//   );
// }
// export default Cards







// import React from 'react';
// import image1 from "../assets/image1.avif";
// import { LuLeafyGreen } from 'react-icons/lu';

// function Card({name,image,id,price}) {
//   return (
//     <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg">
//       <div className="w-full h-[60%] overflow-hidden rounded-lg">
//         <img src={item.food_img} alt="Food Item" className="object-cover w-full h-full" />
//       </div>
//        <div className="w-full flex justify-between items-center">
//            <div className="text-lg font-bold text-green-500">Rs 299/-</div>
//         <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
//           <LuLeafyGreen />
//           <span>Veg</span>
//         </div>
//       </div>
//       <button className="w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-400 transition-all">
//         Add to dish
//       </button>
//     </div>
//   );
// }

// export default Card;


import { LuLeafyGreen } from 'react-icons/lu';
import { GiChickenOven } from "react-icons/gi";

function Card({name,image,price,id,type}) {
  return (
    <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 ">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="Food Item" className="object-cover w-full h-full" />
      </div>
       <div className='text-2xl font-semibold'>
{name}
      
           <div className="text-lg font-bold text-green-500">Rs {price}</div>
        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
          {type=="veg"?<LuLeafyGreen />:<GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button className="w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-400 transition-all">
        Add to dish
      </button>
    </div>
  );
}

export default Card;
