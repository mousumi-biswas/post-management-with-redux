import React, { useState, useEffect } from "react";
import img from "../images/Logo.jpg";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  let id = props.match.params.id;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState([]);

  // for routing
  const history = useHistory();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setPost(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (post) {
    return (
      <>
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-md-7 mt-5">
              <img
                src={img}
                alt=""
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>

            <div className="col-md-5">
              <h4 className="bg-info p-3 mt-5">{post.title} </h4>

              <ul className="list-group ">
                <li className="list-group-item  ">
                  <h4>
                    <strong>Description</strong>{" "}
                  </h4>
                  <h5>
                    <span className="label label-default label-pill pull-xs-right mt-3">
                      {post.body}
                    </span>
                  </h5>
                </li>
              </ul>
            </div>

            <button
              className="btn btn-outline-info"
              onClick={() => history.push("/")}
            >
              Back
            </button>
          </div>
        </div>
      </>
    );
  }
};
export default Post;
