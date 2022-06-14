import { useState } from "react"
import { Card, CardBody, CardTitle, CardText, Button} from "reactstrap"
import moment from "moment";


function ToDoListSection(props){
    const [myStatus, setStatus] = useState(props.status)

    function changeStatus() {
        myStatus? setStatus(false) 
        : setStatus(true)
        
    }

    return (
        <Card>
            <CardBody>
            <CardTitle className="fw-bold">
                {moment(props.tgl).format("DD MMMM YYYY")}</CardTitle>
            <div style={{ display:  "flex" , justifyContent: "space-between" }}>
                
            <CardText> {props.action}</CardText>

                <div>
                {
                    // myStatus==true ?
                    props.status ?
                    // <Button color="success"  className="mx-2" onClick={changeStatus}> Done</Button>
                    <Button color="success"  className="mx-2" onClick={props.toggleStatus}> Done</Button>
                    :
                    // <Button color="warning"  className="mx-2" onClick={changeStatus}> On Going</Button>
                    <Button color="warning"  className="mx-2" onClick={props.toggleStatus}> On Going</Button>

                }
                <Button color="danger"  className="mx-2" onClick={props.deleteItem}> Delete</Button> 

                </div>

                </div>

            </CardBody>
        </Card>

    )
}

export default ToDoListSection
