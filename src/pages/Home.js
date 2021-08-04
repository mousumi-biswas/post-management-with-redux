import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postAction";
import img from "../images/Logo.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";

const Home = (props) => {
  const [readMore, setReadMore] = useState(false);

  // redux
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { posts } = postList;

  // to get an id
  let id = props.match.params.id;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // function for delete button
  const handleRemove = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    // fetch single post
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id, requestOptions)
      .then((res) => res.json())
      .then((res) => console.log("Data deleted", res));
    toast.success("Post deleted successfully");
  };

  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Jumbotron text={["Post Management"]} />
      </div>

      <div className="container-fluid">
        <h3 className="text-center mt-5">All Posts</h3>
        <div className="col-md-8 offset-2">
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-md-4 mt-5 mb-2">
                <Card
                  style={{ width: 300, borderColor: "grey" }}
                  actions={[
                    <Link to={`/posts/${post.id}`}>
                      <button
                        className="btn btn-outline-info"
                        style={{
                          height: "30px",

                          fontSize: "10px",
                        }}
                      >
                        Read more
                      </button>
                    </Link>,

                    <DeleteOutlined
                      className="text-danger"
                      onClick={() => handleRemove(id)}
                    />,
                  ]}
                >
                  <img
                    src={img}
                    alt=""
                    style={{ height: "130px", objectFit: "cover" }}
                  />
                  <p className="mt-2">
                    <b>Title:</b> {post.title}
                  </p>
                  <p>
                    <b>Description:</b>
                    {readMore ? post.body : `${post.body.substring(0, 30)}...`}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
