import { NavLink } from "react-router-dom"

function Header(){
    return(
         <div className="bg-slate-400 flex justify-center ">
               <ul className="flex  gap-2">
                   <li> <NavLink to='/' >Home</NavLink></li>
              <li><NavLink to='contact' >Contact</NavLink></li>
             <li><NavLink to='github' >github</NavLink></li>
               </ul>

         </div> 
    )
}
export default Header