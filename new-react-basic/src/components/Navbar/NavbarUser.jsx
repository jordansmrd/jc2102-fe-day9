import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import user_types from '../../redux/reducers/user/types';


function NavbarUser(){
const userSelector = useSelector((state) => state.auth)
const dispatch = useDispatch();

function btnlogout() {
  localStorage.removeItem("user_data")

  dispatch ({
    type: user_types.USER_LOGOUT
  })
  
}

  return (
    <nav>
      <div className="link-wrapper">
       <Link to="/"> Home</Link> 
       <Link to="/band"> Band</Link> 
       
      
      </div>
    

      <div className="link-wrapper"> 
        {userSelector.id
        ? 
        <Link  className="mx-3" to="/">
          Hello {userSelector.username} 
        </Link>
        : null}
      {userSelector.id ? (
        <Button className='mx-3'  color='danger' onClick={btnlogout}>
          Logout
        </Button>
      ) : (
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      )}
      </div>
    
     

     
    </nav>
    
  )
}

export default NavbarUser;