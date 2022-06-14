import React from "react";
import { Button } from "reactstrap";
import { Link } from 'react-router-dom'

class HomeClass extends React.Component {
    state = {
        username: "jordan"
    }

componentWillMount(){
    alert("componentWillMount")
}

componentDidMount() {
    alert("component did mount")
}

componentDidUpdate() {
    alert("terjadi perubahan state")
}

componentWillUnmount(){
    alert("component terhapus")

}

render(){

    return (
        <div>
            <button onClick={()=> this.setState({ username : "udin"})}> change state</button>
            <h1> Home Class</h1>
            <h1>{this.state.username}</h1>
            <Link to="/">
            <Button> go to Home</Button>
            </Link>
        </div>

    )
}
}

export default HomeClass