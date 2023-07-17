import React, { useState, useRef } from "react";
import "../styles/Signup.css";

function SignupForm() {
  // 입력받을 값
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  //오류메시지 상태저장
  const [idMessage, setIdMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  //회원가입
  const onSignup = async (e) => {
    if (password === passwordConfirm) {
      setPasswordMessage("비밀번호가 일치합니다");
      setIsPassword(true);
    } else {
      setPasswordMessage("비밀번호가 달라요 !!");
      setIsPassword(false);
      return;
    }
  };

  // 아이디
  const onChangeId = (e) => {
    setId(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 8) {
      setIdMessage("2글자 이상 8글자 미만으로 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("올바른 이름 형식입니다 :)");
      setIsId(true);
    }
  };

  // 아이디중복 확인
  const idCheck = async (e) => {
    if (isId) {
      const res = await fetch("/loginCheck", {
        method: "post",
        body: JSON.stringify(id),
      });

      const data = await res.json();
      if (data.status === 200) {
        setIdMessage("사용할수있는 아이디에요");
        setIsId(true);
      } else {
        setIdMessage("중복된 아이디에요!!");
        setIsId(false);
      }

      return;
    } else {
      setIdMessage("글자수를 맞춰주세요 ");
    }
  };

  const emailCheck = async (e) => {
    let test = email.split("@");
    console.log(test);
    if (email.split("@")) {
      setIsEmail(true);
      setEmailMessage("올바른 이메일 형식입니다");
    } else {
      setEmail("");
      setEmailMessage("올바른 이메일 형식이 아니에요!!");
      setIsEmail(false);
      return;
    }

    return;
  };

  //이메일 입력
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  //패스워드 입력
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  // 패스워드 확인 입력
  const passwordCheck = (e) => {
    setPasswordConfirm(e.target.value);
  };

  // 렌더링될부분 //
  return (
    <>
      <div className="signupbox">
        <div className="mb-3 ">
          <label htmlFor="signup_input_id" className="form-label">
            아이디
          </label>

          <input
            onChange={onChangeId}
            type="text"
            className="form-control"
            id="signup_input_id"
            name="signup_input_id"
            placeholder="2글자 이상 8글자 미만으로 입력해주세요."
          />
          <div>
            {id.length > 0 && (
              <span className={`${isId ? "success" : "error"}`}>
                {idMessage}
              </span>
            )}
            <button
              onClick={idCheck}
              type="button"
              className="btn btn-outline-dark"
            >
              중복확인
            </button>
          </div>
        </div>
        <div className="mb-3 ">
          <label htmlFor="signup_input_email" className="form-label">
            이메일
          </label>
          <input
            onChange={inputEmail}
            type="text"
            className="form-control"
            id="signup_input_email"
            name="signup_input_email"
            placeholder="이메일을 입력해주세요"
          />
          <span className={`${isEmail ? "success" : "error"}`}>
            {emailMessage}
          </span>
          <button
            onClick={emailCheck}
            type="button"
            className="btn btn-outline-dark"
          >
            중복확인
          </button>
        </div>
        <div className="mb-3 ">
          <label htmlFor="signup_input_pw" className="form-label">
            비밀번호
          </label>
          <input
            onKeyUp={inputPassword}
            type="password"
            className="form-control"
            id="signup_input_pw"
            name="signup_input_pw"
            placeholder="비밀번호를 입력해주세요"
          />
          {password.length > 0 && (
            <span className={`${isPassword ? "success" : "error"}`}>
              {passwordMessage}
            </span>
          )}
        </div>
        <div className="mb-3 ">
          <label htmlFor="signup_input_pwConfirm" className="form-label">
            비밀번호 확인
          </label>
          <input
            onKeyUp={passwordCheck}
            type="password"
            className="form-control"
            id="signup_input_pwConfirm"
            name="signup_input_pwConfirm"
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </div>
        {password.length > 0 && (
          <span className={`${isPassword ? "success" : "error"}`}>
            {passwordMessage}
          </span>
        )}

        <div>
          <button type="button" className="btn btn-secondary btn-lg">
            뒤로가기
          </button>
          <button
            onClick={onSignup}
            type="button"
            className="btn btn-primary btn-lg"
          >
            회원가입 하기
          </button>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
