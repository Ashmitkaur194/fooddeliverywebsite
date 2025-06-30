import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { MdDomain } from "react-icons/md";

export const categories=[
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600"/>
    },

     {
        id:2,
        name:"Breakfast",
        icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>
    },

     {
        id:3,
        name:"Soups",
        icon:<TbSoup className="w-[60px] h-[60px] text-green-600"/>
    },

     {
        id:4,
        name:"Pasta",
        icon:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600"/>
    },  

     {
        id:5,
        name:"main_course",
        icon:<MdDomain className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:6,
        name:"Pizza",
        icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:7,
        name:"burger",
        icon:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    }
]
export default categories;
