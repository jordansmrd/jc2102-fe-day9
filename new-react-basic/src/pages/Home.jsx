import "../assets/styles.css"
// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Alert, Button, Input, Spinner } from "reactstrap";
import ToDoListSection from "../components/ToDoListSection/ToDoListSection";
import axios from "axios";
import { API_URL } from "../configs/api";



function Home() {

    const [todoList, setTodoList] = useState([]);

    const [serverError, setServerError] = useState(false);


    const [inputValues, setInputValues] = useState({
      todoInput: "",
      dateInput: "",
    });
  
    function TodoListRender() {
      return todoList.map((val, idx) => {
        return (
          <ToDoListSection
            tgl={val.tgl}
            action={val.action}
            status={val.status}
            deleteItem={() => deleteTodoItem(val.id)}
            toggleStatus={() => toggleTodoStatus(val.id)}
          />
        );
      });
    }
  
  
    function inputHandler(event) {
      const { value, name } = event.target;
  
      setInputValues({
        ...inputValues,
        [name]: value,
      });
    }
  
    function fetchTodoList() {
    setTimeout(() => {
        axios.get( API_URL+"/todos").then((res) => {
        // console.log(res.data);
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err)
        alert(err)
        setServerError(true)
      }).finally(()=> {
        SetIsLoading(false)
      })
     
    }, 2000);
      
    //   console.log("request");
      //berjalan secara asynchronous
    }
  
    function addTodoItem() {
      const newdata = {
        tgl: inputValues.dateInput,
        action: inputValues.todoInput,
        status: false,
      };
  
      axios.post(API_URL+"/todos", newdata).then(() => {
        fetchTodoList();
      });
    }
  
    function deleteTodoItem(id) {
      axios.delete(`${API_URL}/todos/${id}`).then(() => {
        fetchTodoList();
      });
    }
  
    function toggleTodoStatus(id) {  
      const todo = todoList.find((val) => {
        return val.id === id;
      });
      axios
        .patch(API_URL+"/todos/" + id, { status: !todo.status })
        .then(() => {
          fetchTodoList();
        });    }
  
    // componentDidMount;
    //method yang jalan setelah component ter-render
    useEffect(() => {
        // alert('this is componentdidmount ')
      fetchTodoList();
    }, []);

  
    //componentWillUnmount
    useEffect(() => {
      return () => {
        alert("good bye");
      };
    }, []);
  
    // //componentDidUpdate
    useEffect(() => {
    //   alert("terjadi perubahan state react hooks");
    }, [todoList]);

    const [isLoading, SetIsLoading] = useState(true)
  

    return (
        <>
        {
            isLoading?     
                <div className="d-flex justify-content-center">
            <Spinner ></Spinner>
                </div>
: null

        }
        { serverError ? 
        <Alert color="danger">
            server error
        </Alert> : 
        <div className="container">
    <div className="row mt-3 mx-2">

  <div className="offset-3 col-5">
    <Input name="todoInput" onChange={inputHandler} />
    <Input name="dateInput" onChange={inputHandler} type="date" />
  </div>
  <div className="col-2">
    <Button onClick={addTodoItem} color="success">
      Add To do
    </Button>

    {/* <Button onClick={fetchTodoList} color="info">
      Fetch To do
    </Button> */}
  </div>
</div>

<div className="col-5 offset-3 p-3">
  <TodoListRender></TodoListRender>
</div>
</div>
}
  </>
    )
}

export default Home