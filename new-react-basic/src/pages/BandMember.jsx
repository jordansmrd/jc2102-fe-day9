import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL, axiosInstance } from "../configs/api";


function BandMember() {
    const params = useParams();

    const [member, setMember] = useState({})

  
    function fetchBandMember() {
        // alert(params.id)
        axiosInstance.get("/bandmember/"+ params.id  ).then((res) => {
            // console.log(res.data);
            setMember(res.data)
          })
 }
 
 useEffect(()=>{
    fetchBandMember()
    },[]);

    
return(
    <>
    <h1>
        {/* {params.id} */}
        {member.name}

    </h1>
    <ul>
        <li>
            Instrument : 
            {member.Instrument}
        </li>
        <li>
            Date of Birth: 
            {member.datebirth}
        </li>
        <li>
        Hobby: {member.hobby}
        </li>
    </ul>
</>
)
}

export default BandMember