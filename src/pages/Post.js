import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";

const Post = () => {
  const [post, setPost] = useState();

  // load post data from localStorage
  useEffect(() => {
    if (!localStorage.getItem("current_post")) return;
    setPost(JSON.parse(localStorage.getItem("current_post")));
  }, []);

  return (
    <div className="site-card-wrapper" style={{ padding: "5em" }}>
      <Card title={post?.title} bordered={false}>
        <p>{post?.body}</p>
        <p>
          <strong>ID: </strong>
          {post?.id} - <strong>USER ID: </strong>
          {post?.user_id}
        </p>

        <Button type="primary">
          <a href={`/blog`}>Go Back</a>
        </Button>
      </Card>
    </div>
  );
};

export default Post;
