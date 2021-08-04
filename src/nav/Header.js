import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home">
        <Link to="/">Home</Link>
      </Item>

      <Item key="create-post">
        <Link to="/posts">Create Post</Link>
      </Item>
    </Menu>
  );
};

export default Header;
