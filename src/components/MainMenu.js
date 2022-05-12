import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const menuItems = [
  {
    label: <Link to="/">Home</Link>,
    key: "",
  },
  {
    label: <Link to="/blog">Blog</Link>,
    key: "blog",
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "contact",
  },
  {
    label: <Link to="/dashboard">Dashboard</Link>,
    key: "dashboard",
  },
];

const MainMenu = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname.split("/")[1]);

  useEffect(() => {
    setCurrent(location.pathname.split("/")[1]);
  }, [location]);

  const handleMenu = (e) => {
    // setCurrent(e.key);
  };
  return <Menu onClick={handleMenu} selectedKeys={[current]} mode="horizontal" theme="dark" items={menuItems} />;
};

export default MainMenu;
