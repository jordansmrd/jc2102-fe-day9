import { useSelector } from "react-redux"
import BandSection from "../components/BandSection/BandSection"
import { Navigate } from "react-router-dom"


function BandPage() {
    const userSelector = useSelector((state) => state.auth)
    if(userSelector.role !== "admin")
    {
        return <Navigate to="/"></Navigate>
    }
    return (
        <BandSection/>
    )
}

export default BandPage