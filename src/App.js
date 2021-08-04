import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./nav/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/posts" component={CreatePost} />
      </Switch>
    </>
  );
}

export default App;
