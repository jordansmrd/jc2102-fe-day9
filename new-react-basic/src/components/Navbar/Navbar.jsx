import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Navbar = () => {
const userSelector = useSelector((state) => state.auth)
const counterSelector = useSelector((state) => state.counter)


  return (
    <nav>
      <div className="link-wrapper">
       <Link to="/"> Home</Link> 
       <Link to="/Band"> Band</Link> 
       <Link to="/Contact"> Contact</Link> 
       <Link to="/Contact"> {counterSelector.count}</Link> 

      
      </div>
     
    </nav>
    
  )
}

export default Navbar;