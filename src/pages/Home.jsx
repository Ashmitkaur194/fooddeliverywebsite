// import React, { useContext} from 'react'
// import Navbar from '../components/Navbar';
// import categories from './category';
// import Cards from '../components/Cards';
// import { food_items } from '../../food';
// import { dataContext } from '../context/UserContext';

//  const Home = () => {
//     let {cate,setCate,input}=useContext(dataContext); //destructing
  
//   function filter(category) {
//     if (category === "All") {
//       setCate(food_items);
//     } else {
//       let newList = food_items.filter((item) => item.food_category === category);
        
//       setCate(newList);
//     }
//   }
//   return (
//     <div className='bg-slate-300 w-full min-h-screen'>
//     <Navbar/>
   
//    {!input ? (
//   <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
//     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
//       {categories.map((item) => (
//         <div
//           key={item.name}
//           className='w-5 justify-start text-[20px] font-semibold text-gray-700 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-200'
//           onClick={() => filter(item.name)}
//         >
//           {item.icon}
//           {item.name}
//         </div>
//       ))}
//     </div>
//   </div>
// ) : null}



// {/* 
//     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>

//       {categories.map((item)=>{
//         return <div className='w-5 justify-start text-[20px] font-semibold text-gray-700 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-200' 
//         onClick={()=>filter(item.name)} >
//           {item.icon}
//           {item.name}
         
//           </div>
//       })}
//     </div> */}


//     { <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
//     {cate.map((item)=>(
//       <Cards name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
//     ))}
//     </div>
//     </div>
//   )
// }


// export default Home; 









// import React, { useContext } from 'react';
// import Navbar from '../components/Navbar';
// import categories from './category';
// import Cards from '../components/Cards';
// import { food_items } from '../../food';
// import { dataContext } from '../context/UserContext';

// const Home = () => {
//   const { cate, setCate, input } = useContext(dataContext);

//   // Filter food items by category
//   const filter = (category) => {
//     if (category === 'All') {
//       setCate(food_items);
//     } else {
//       const newList = food_items.filter((item) => item.food_category === category);
//       setCate(newList);
//     }
//   };

//   return (
//     <div className='bg-slate-300 w-full min-h-screen'>
//       <Navbar />

//       {/* Category Section */}
//       {!input ? (
//         <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
//           {categories.map((item) => (
//             <div
//               key={item.name}
//               onClick={() => filter(item.name)}
//               className='w-[110px] h-[110px] bg-white shadow-md hover:bg-green-100 text-green-700 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all'
//             >
//               <div className='text-3xl'>{item.icon}</div>
//               <div className='text-[16px] font-medium'>{item.name}</div>
//             </div>
//           ))}
//         </div>
//       ) : null}

//       {/* Cards Section */}
//       <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
//         {cate.map((item) => (
//           <Cards
//             key={item.id}
//             name={item.food_name}
//             image={item.food_image}
//             price={item.price}
//             id={item.id}
//             type={item.food_type}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;















import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import categories from './category';
import Cards from '../components/Cards';
import { food_items } from '../../food';
import { dataContext } from '../context/UserContext';

const Home = () => {
  const { cate, setCate, input } = useContext(dataContext); // added input

  // Function to filter food by category
  const filter = (category) => {
    if (category === 'All') {
      setCate(food_items);
    } else {
      const newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
  };

  return (
    <div className='bg-slate-300 w-full min-h-screen'>
      <Navbar />

      {/* Category buttons /}
      {!input && (
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
          {categories.map((item) => (
            <div
              key={item.name}
              className='px-4 py-2 flex items-center gap-2 text-[18px] font-semibold text-gray-700 bg-white rounded-lg shadow-md hover:bg-green-200 cursor-pointer transition duration-200'
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/ Food cards */}
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cate.map((item) => (
          <Cards
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;