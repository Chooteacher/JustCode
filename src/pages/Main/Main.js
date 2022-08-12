import React from "react";
import "./Main.css";

function Main() {
  return (
    <>
      <header>
        <div className="left-meun">
          <img src="/images/main.png" className="main-logo" />
          <img src="/images/line.png" className="main-line" />
          <span className="Jg-logo">Justgram</span>
        </div>
        <div className="center-menu">
          <input type="text" placeholder="검색" className="search-bar" />
        </div>
        <div className="right-menu">
          <img src="/images/explore.png" className="mg-r20" />
          <img src="/images/heart.png" id="heart" className="mg-r20" />
          <img src="/images/profile.png" className="mg-r20" />
        </div>
      </header>
      <main>
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
          <div className="comment-list"></div>
          <p className="feed-time">42분 전</p>
          <div className="comment-box">
            <input type="text" placeholder="댓글 달기..." className="comment" />
            <button type="button" onclick="" className="comment-button">
              게시
            </button>
          </div>
        </div>
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
          <div className="comment-list"></div>
          <p className="feed-time">42분 전</p>
          <div className="comment-box">
            <input type="text" placeholder="댓글 달기..." className="comment" />
            <button type="button" onclick="" className="comment-button">
              게시
            </button>
          </div>
        </div>
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
          <div className="comment-list"></div>
          <p className="feed-time">42분 전</p>
          <div className="comment-box">
            <input type="text" placeholder="댓글 달기..." className="comment" />
            <button type="button" onclick="" className="comment-button">
              게시
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
