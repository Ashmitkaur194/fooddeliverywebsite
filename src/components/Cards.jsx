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







import React from 'react';
import image1 from "./assets/image1.avif";
import { LuLeafyGreen } from 'react-icons/lu';

function Card() {
  return (
    <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image1} alt="Food Item" className="object-cover w-full h-full" />
      </div>
      <div className="text-2xl font-semibold">Pancakes</div>
      <div className="flex items-center justify-between text-lg">
        <span>Rs 299/-</span>
        <span><LuLeafyGreen size={24} className="text-green-500" /></span>
      </div>
    </div>
  );
}

export default Card;
