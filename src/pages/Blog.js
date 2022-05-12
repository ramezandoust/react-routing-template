import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router";
import { Row, Col, Card, Button, Spin } from "antd";

const Blog = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [Posts, setPosts] = useState();

  // load posts data from api
  useEffect(() => {
    const load = async () => {
      setLoader(true);
      await axios
        .get("https://gorest.co.in/public/v2/posts")
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoader(false);
    };
    load();
  }, []);

  // set current post data to localStorage and navigate to post url
  const gotoPost = (post) => {
    localStorage.setItem("current_post", JSON.stringify(post));
    navigate(`${location.pathname}/${post.id}`);
  };

  return !params?.id ? (
    <>
      {loader ? (
        <div className="center-absolute">
          <Spin tip="Loading..." size="large"></Spin>
        </div>
      ) : (
        <div className="site-card-wrapper" style={{ padding: "5em" }}>
          <Row gutter={[16, 16]}>
            {Posts &&
              Posts.map((item, index) => {
                return (
                  <Col key={index} span={6}>
                    <Card title={item.title} bordered={false}>
                      <p>{item.body}</p>
                      <p>
                        <strong>ID: </strong>
                        {item.id} - <strong>USER ID: </strong>
                        {item.user_id}
                      </p>

                      <Button type="primary" onClick={() => gotoPost(item)}>
                        Read More
                      </Button>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      )}
    </>
  ) : (
    <Outlet />
  );
};

export default Blog;
