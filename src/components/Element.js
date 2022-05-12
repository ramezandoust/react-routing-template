import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Post from "../pages/Post";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

const Element = () => {
  const Authenticated = false;

  function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    });
    return null;
  }

  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Home /> },
    {
      path: "blog",
      element: <Blog />,
      children: [{ path: ":id", element: <Post /> }],
    },
    { path: "contact", element: <Contact /> },

    // dashboard is redirect to home if Authenticated was false
    { path: "dashboard", element: Authenticated ? <Dashboard /> : <Redirect to="/" /> },
    // Not found routes work as you'd expect
    { path: "*", element: <NotFound /> },
  ]);

  // The returned element will render the entire element
  // hierarchy with all the appropriate context it needs
  return element;
};

export default Element;
