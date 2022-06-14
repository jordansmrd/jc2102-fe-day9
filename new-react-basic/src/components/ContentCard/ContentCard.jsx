// import {
//   Card,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   CardFooter,
//   CardText,
//   Button,
// } from "reactstrap";

import { Card, CardBody, CardTitle,CardFooter, CardText, Button, CardSubtitle } from "reactstrap"


import { FaRegThumbsUp } from "react-icons/fa";
// import newyork from "./newyork.jpeg";

const username = "mobil_keren";
const location = "BSD";
const caption =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam laboriosam culpa accusamus? Corrupti fugit libero alias facere eaque magni dolore maiores perspiciatis, ullam ipsam similique repellat, odit, architecto placeat officiis rem voluptatem fuga corporis tempora labore? Mollitia praesentium, eveniet maxime officia laudantium enim. Fugiat eum ut quasi mollitia tenetur, labore praesentium? Neque obcaecati sapiente quis hic. Fugiat vitae et error cumque enim magni, voluptatibus autem nesciunt quos aperiam laborum!";


// npm install react-icons
// npm install bootstrap 
// npm install reactstrap
// Props merupakan argumen yang di-passing dari satu komponen ke komponen lain
// State merupakan tipe data pada komponen React yang bersifat privat.
//  Artinya, data dengan tipe state hanya dapat digunakan di dalam komponen itu sendiri.

function ContentCard(props){
  let numberOfLikes = props.numberOfLikes;


  function likePost(amount)
 {
    numberOfLikes += 1
    alert(`Liked post ${numberOfLikes}`);
  };

  return (
    // <Card >
    //   <CardBody>
    //     <CardTitle tag="h5" >
    //       {username}
    //     </CardTitle>
    //     <CardSubtitle tag="h6" className="text-muted mb-4">
    //       {location}
    //     </CardSubtitle>

    //     <img
    //       style={{
    //         width: "100%",
    //       }}
    //       className="rounded"
    //       src={newyork}
    //       alt="user's content"
    //     />

    //     <CardText tag="h6" className="fw-bold mt-3 mb-3">
    //       {numberOfLikes.toLocaleString()} likes
    //     </CardText>
    //     <CardText>
    //       <span className="fw-bold">{username}</span>{" "}
    //       {caption.length > 140 ? caption.slice(0, 140) + "..." : caption}
    //     </CardText>

    //     <Button
    //       onClick={() => likePost(14)}
    //       color="danger"
    //       className="d-flex justify-content-center align-items-center"
    //     >
    //       Like &nbsp;&nbsp;
    //       <FaRegThumbsUp />
    //     </Button>
    //   </CardBody>
    // </Card>
<>
    <Card className="mb-3">
      <CardBody>
      <CardTitle tag="h5">
        {props.username}
      </CardTitle>
    <CardSubtitle tag="h6" className="text-muted mb-4">
      {props.location}
    </CardSubtitle>

    <img
          style={{
            width: "100%",
          }}
          className="rounded"
          src={props.img_src}
          alt="user's content"
        />
        <CardText className="mt-3"> {props.numberOfLikes.toLocaleString()} likes
        </CardText>
        <CardText> 
        <span className="fw-bold">{props.username}</span>{" "}
           {props.caption.length > 140 ? props.caption.slice(0, 140) + "..." : props.caption}
        </CardText>

        <Button onClick={likePost} 
                  className="d-flex justify-content-center align-items-center"
                 color="danger" >

        Like &nbsp;&nbsp;
          <FaRegThumbsUp />
        </Button>
      </CardBody>

    </Card>

{/* 
     <div className="card">
    <div className="card-body">
      <div className="card-title"> <h5>
      {username}
        </h5> </div>
      <div className="card-subtitle text-muted mb-4"> {location} </div>
      <img
          style={{
            width: "100%",
          }}
          className="rounded"
          src={newyork}
          alt="user's content"
        />
          <div className="card-text mt-3">
          {numberOfLikes.toLocaleString()} likes
          </div>

          <div className="card-text mt-3 mb-3">
          <span className="fw-bold">{username}</span>{" "}
           {caption.length > 140 ? caption.slice(0, 140) + "..." : caption}
          </div>

          <button
          onClick={() => likePost(14)}
          type="button"
          className="btn btn-danger d-flex justify-content-center align-items-center"
        >
          Like &nbsp;&nbsp;
          <FaRegThumbsUp />
        </button>
    </div>
  </div>  */}

  </>

    );
};

export default ContentCard;
