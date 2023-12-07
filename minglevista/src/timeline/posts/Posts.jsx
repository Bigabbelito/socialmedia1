import React from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
function Posts() {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAouthor">
          <Avatar>A</Avatar>
          Abbelito_ • <span>12h</span>
        </div>

        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src="" alt=""/>
      </div>
      <div className="post__footer"></div>
    </div>
  );
}

export default Posts;
