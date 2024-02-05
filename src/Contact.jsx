import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
function Contact(){
   const {userid}=useParams()
    return  ( 
      <>  <div>
        <NavLink to='/contact/student' >Student</NavLink>
      </div>
    <div>{userid}:</div> 
    </>)
}
export default Contact