import React, { useEffect } from "react";
import "./Main.scss";
import Feed from "./Feed";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [feeds, setFeeds] = useState([]);
  const [userEmail, setuserEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/feeds.json")
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data.feeds);
      });
  }, []);

  useEffect(() => {
    fetch("http://auth.jaejun.me:10010/me", {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NywiaWF0IjoxNjYxMjU1NzIxLCJleHAiOjE2NjM5MzQxMjF9.3B-Fvy8ws_HcE6D3Lo2M4L0hci6UXg_qsFEu4YabkVs",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.email !== undefined ? setuserEmail(data) : navigate("/login");
      });
  });

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
          {/* <img src="/images/profile.png" className="mg-r20" /> */}
          {userEmail && userEmail.email}
        </div>
      </header>
      <main>
        {feeds.map((feed) => {
          return <Feed key={feed.id} feedData={feed} />;
        })}
      </main>
    </>
  );
}

export default Main;
