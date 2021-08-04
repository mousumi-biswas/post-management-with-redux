import React, { useState } from "react";
import { toast } from "react-toastify";

const CreatePost = () => {
  // usestate hook to grab the value
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);

  // function to create new post
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title, body };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    // Here used fetch instead of axios
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((res) => res.json())
      .then((res) => console.log(res));
    toast.success("Post created successfully");
  };

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-md-8">
          <form>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={title}
                onChange={onTitleChange}
                placeholder={title}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                name={body}
                placeholder="Body"
                value={body}
                onChange={onBodyChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={handleSubmit}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
