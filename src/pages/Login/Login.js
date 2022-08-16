import React from "react";
import "./Login.scss";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/Main");
  };

  return (
    <div className="login">
      <div className="fonts">Justgram</div>
      <div className="form">
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          className="form-design"
          id="input-id"
        />
      </div>
      <div className="form">
        <input
          type="password"
          placeholder="비밀번호"
          className="form-design"
          id="input-pw"
        />
      </div>
      <button id="login" onlick={goToMain}>
        {/* <Link to="/Main">로그인</Link> */}로그인
      </button>
      <button id="password" disabled>
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
}

export default Login;

// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Justgram</title>
//     <link rel="stylesheet" href="./style/login.css" />
//     <link rel="shortcut icon" href="./img/instagram.png" type="image/x-icon" />

//   </head>
//   <body>
//     <div className="login">
//         <div className="fonts">Justgram</div>
//         <div className="form">
//           <input
//             type="text"
//             placeholder="전화번호, 사용자 이름 또는 이메일"
//             className="form-design"
//             id="input-id"
//           />
//         </div>
//         <div className="form">
//           <input type="password" placeholder="비밀번호" className="form-design" id="input-pw" />
//         </div>
//         <button id="login" disabled>로그인</button>
//         <button id="password" disabled>비밀번호를 잊으셨나요?</button>
//       </div>
//     </div>
//     <script src="./js/login.js"></script>
//   </body>
// </html>
