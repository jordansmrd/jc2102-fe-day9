import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedPage({
    children , 
    needLogin = false,
    guestOnly = false,
    authRoles = []
}) {

    const userSelector = useSelector((state) => state.auth)
    // alert(needLogin)
    // alert(userSelector?.id)


    //wajib login
    if(needLogin && !userSelector?.id)
    {
        return <Navigate to="/login" />
    }

    //guest only, ga boleh login
    if(guestOnly && userSelector.id)
    {
        return <Navigate to="/" />
    }

    //hanya yang punya role ini
    if(authRoles.length && !authRoles.includes(userSelector.role))
    {
        return <Navigate to="/" />
    }


    return children
}

export default ProtectedPage;