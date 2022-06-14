import BandMemberCard from "../BandMemberCard/BandMemberCard";
import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL, axiosInstance } from "../../configs/api";



const BandSection = () => {

  const [listMember, setListMember] = useState([])

function fetchListMember() {
  // axios.get( API_URL + "/bandmember/").then((res) => {

    axiosInstance.get("/bandmember/").then((res) => {
      
        setListMember(res.data)
      })
}

function renderList(){
  return listMember.map((val)=> {
   return  (
    <BandMemberCard
      name={val.name}
      id={val.id}
    />

   )
  })
}

useEffect(()=>{
fetchListMember()

}, [])

  return (
    <section id="band" className="container py-5">
      <div className="band-info">
        <h2>THE BAND</h2>
        <div className="text-muted mt-3">We love Kangen Band</div>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          consectetur, accusamus perferendis delectus qui quam explicabo corporis,
          necessitatibus tenetur fugiat est, provident laborum cupiditate
          doloremque dolores id iure voluptatem sit. Quas tenetur eius,
          consectetur, odit vero quae pariatur necessitatibus excepturi quia iure
          ullam eos molestiae. Non, animi? Hic adipisci quibusdam corrupti
          exercitationem sapiente alias quia, nostrum repudiandae quidem neque
          impedit explicabo architecto voluptatibus necessitatibus perspiciatis
          sit molestias veniam at eos!
        </p>
      </div>
      <div className="band-photos">
       {renderList()}
      </div>
    </section>
  )
}

export default BandSection;