import React, { useState, useRef } from "react";
function Feed() {
  const [comment, setComment] = useState();
  const [id, setId] = useState(1);
  const value = useRef();
  const [commentArray, setCommentArray] = useState([
    {
      id: 0,
      content: "으왕아아악",
    },
  ]);

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: value.current.value,
    };
    console.log(newComment);
    setCommentArray([...commentArray, newComment]);
  };

  return (
    <div className="main-feed">
      <div className="feed-header">
        <img src="/images/profile1.jpg" className="profile" />
        <span id="id">
          <b>Choo</b>
        </span>
        <img src="/images/dots.png" className="meun-dots" />
      </div>
      <div className="feed-photo">
        <img src="/images/cat.jpg" className="cat-photo" />
      </div>
      <div className="menu-bar">
        <img src="/images/heart.png" className="heart bar-icon" />
        <img src="/images/chat.png" className="chat-icon bar-icon" />
        <img src="/images/upload.png" className="up-icon bar-icon" />
        <img src="/images/mark.png" className="mark-icon bar-icon" />
      </div>
      <div className="feed-content">
        <p>야옹이 너무 귀엽죠 ㅎ</p>
      </div>
      <div className="comment-list">
        {commentArray.map((comment) => {
          return <li key={comment.id}>{comment.content}</li>;
        })}
      </div>
      <p className="feed-time">42분 전</p>
      <div className="comment-box">
        <input
          type="text"
          placeholder="댓글 달기..."
          className="comment"
          ref={value}
          // onChange={(e) => {
          //   setComment(e.target.value);
          // }}
        />
        <button type="button" className="comment-button" onClick={addComment}>
          게시
        </button>
      </div>
    </div>
  );
}
export default Feed;
