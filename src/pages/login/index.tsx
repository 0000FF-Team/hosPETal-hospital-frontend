import React from "react";
import "../../styles/login.scss";

export default function LoginPage() {
  return (
    <div className="container">
      <img className="logo" src="/images/logo/logo-v3.png" alt="로고 이미지" />
      <div className="login_input_wrapper">
        <input placeholder="이메일" type="email" />
        <div className="error">에러메세지</div>

        <input placeholder="비밀번호" type="password" />
        <div className="error"> 에러메세지</div>
      </div>

      <button className="btn btn_login">로그인하기</button>
      <button className="btn btn_signup">회원가입하기</button>
    </div>
  );
}