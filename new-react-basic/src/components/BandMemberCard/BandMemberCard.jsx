import member from './member.jpeg'
import { Link } from 'react-router-dom'
const BandMemberCard = (props) => {
  return (
    <div className="band-member-card">
      <p>{props.name}</p>
    <Link  to={`/member/${props.id}` }>  <img src={member} alt="" /></Link>  
    </div>
  )
}

export default BandMemberCard