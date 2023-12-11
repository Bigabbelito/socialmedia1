import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Posts";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Abbelito_",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HCJlI_HQvwiok906NGGbyLwFCKes2Dx21Q&usqp=CAU",
      likes: 45,
      timestamp: "6d"
    },
    {
      user: "Alawie_",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGAmXeL9WiSTDKdhUkpVi9CXueDLI-TEzjA&usqp=CAU",
      likes: 322,
      timestamp: "12h"
    },
    {
      user: "Reemoz00",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadPwZgah-uHLeV0hRbLbc8NbChYjIRHeg5w&usqp=CAU",
      likes: 123,
      timestamp: "2d"
    },
    {
      user: "Sara58",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0btn-EDqmQJLPhjyza9zxCzTvZSmSqXqlEQ&usqp=CAU",
      likes:543,
      timestamp: "3h"
    }
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
        {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
