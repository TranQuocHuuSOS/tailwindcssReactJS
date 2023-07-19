
import {BiHomeAlt,BiMoviePlay,BiInfoCircle, BiMenu} from 'react-icons/bi'
import NavItem from './NavItem'
import { useState } from 'react'
const defaultIconSize='1.875rem'
const items=[
    {label:'Home', icon:<BiHomeAlt size={defaultIconSize}/>, active:true},
    {label:'Movies', icon:<BiMoviePlay size={defaultIconSize}/>},
    {label:'About', icon:<BiInfoCircle size={defaultIconSize}/>}
]

const NavItemsContainer=()=><>{
    items.map((item, index) =><NavItem item={item}  key={index}/>)
}
</>
const index=()=>{
    const[isNavMenuMobileOpen, setIsNavMenuMobileOpen] =useState(false)
    return(
        <nav className='md:col-span-1 lg:col-span-1 col-span-5 bg-cyan-200'>
            <div className='flex md:block mx-4 justify-between items-center'>
                <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">Phimmoi.net</h4>
                <BiMenu  className="cursor-pointer md:hidden"  size={defaultIconSize} onClick={()=> setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}/>
            </div>
            <ul className={`mx-4 my-2${isNavMenuMobileOpen ? '' : ' hidden'} md:block`}>
                <NavItemsContainer/> 
                
            </ul>
        </nav>
    )
}
export default index;