import React, { useState, useRef } from "react";
import styled from "styled-components";

import "../styles/Signup.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SignupForm() {


  //회원가입폼
  const [signupForm, setSignupForm] = useState({
    memberId: '',
    email: '',
    name: '',
    nickName: '',
    password: '',
    passwordconfirm: '',
    profileImageUrl: ''
  })
  //유효성 체크
  const [isEmpty, setIsEmpty] = useState(false)
  const [isPassswordCheck, setIsPasswordCheck] = useState(false)

  const [isValid, setIsValid] = useState({
    isId: true,
    isName: true,
    isEmail: true,
    isPassword: true,
    isPasswordconfirm: true
  })

  //에러메시지
  const [message, setMessage] = useState('')

  //ref들
  const idRef = useRef()
  const nameRef = useRef()
  const nickNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  //인풋 입력 부분
  const inputHandler = (ref, formKey) => {
    setSignupForm({
      ...signupForm,
      [formKey]: ref.current.value
    })
  }

  function oneSecoundSleep() {
    setIsEmpty(false)
    setIsPasswordCheck(false)
  }



  // 로그인 요청 하기

  const Clickkkk = () => {
    if (signupForm.memberId.trim() === '' ||
      signupForm.name.trim() === '' ||
      signupForm.nickName.trim() === '' ||
      signupForm.password.trim() === '' ||
      signupForm.passwordconfirm.trim() === '' ||
      signupForm.email.trim() === '') {
      setIsEmpty(true)
      setTimeout(oneSecoundSleep, 1000)
    }

    const pattern = /[~!@#$%^&*()_+|<>?:{}]/;	// 특수문자
    console.log(pattern.test(signupForm.password))
    if (signupForm.password.length < 2 || !pattern.test(signupForm.password)) {
      setIsPasswordCheck(true)
      setTimeout(oneSecoundSleep, 1000)
    }



    axios.post('/signup', {
      memberId: idRef.current.value,
      name: nameRef.current.value,
      nickName: nickNameRef.current.vvalue,
      password: passwordRef.current.value,
      profileImageUrl: ''
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    }
    ).then((response) => {
      console.log(response.data)

      navigate("/login")


    }).catch(function (error) {
      // 에러 핸들링
      console.log(error.response.status);

      if (error.errorCode === "DUPLICATED_MEMBER_EMAIL") {
        alert("중복된 이메일입니다")
      } else if (error.errorCode === "DUPLICATED_MEMBER_NICKNAME") {
        alert("중복된 닉네임입니다")
      } else if (error.errorCode === "DUPLICATED_MEMBER_ID") {
        alert("중복된 아이디입니다")
      }

    })
  }

  // 렌더링될부분 //
  return (
    <>
      <SignupContainer >

        <FlexDiv>
          <SignupTitle>JOIN</SignupTitle>
          {isEmpty === true ? <IsValidDiv>빈칸이 있어요 다시 입력 해주세요</IsValidDiv> : null}
          {isPassswordCheck === true ? <IsValidDiv>비밀번호를 다시 입력해주세요</IsValidDiv> : null}
          <InputBox>
            <Label htmlFor="input_id">아이디<Required>*</Required></Label>
            <Input type="text" ref={idRef} id="input_id" onChange={(e) => inputHandler(idRef, "id")}></Input>
            <InputRightSpace>(영문소문자/숫자,4~16자)</InputRightSpace>
          </InputBox>


          <InputBox>
            <Label htmlFor="input_name">이름<Required>*</Required></Label>
            <Input type="text" ref={nameRef} id="input_name" onChange={() => inputHandler(nameRef, "name")}></Input>
            <InputRightSpace></InputRightSpace>
          </InputBox>

          <InputBox>
            <Label htmlFor="input_nickName">닉네임<Required>*</Required></Label>
            <Input type="text" ref={nickNameRef} id="input_name" onChange={() => inputHandler(nameRef, "nickName")}></Input>
            <InputRightSpace></InputRightSpace>
          </InputBox>

          <InputBox>
            <Label htmlFor="input_email">이메일<Required>*</Required></Label>
            <Input type="email" ref={emailRef} id="input_email" onChange={() => inputHandler(emailRef, "email")}></Input>
            <InputRightSpace></InputRightSpace>
          </InputBox>

          <InputBox>
            <Label htmlFor="password">비밀번호<Required>*</Required></Label>
            <Input type="password" ref={passwordRef} id="password" onChange={() => inputHandler(passwordRef, "password")}></Input>
            <InputRightSpace>2자이상 특수문자포함</InputRightSpace>
          </InputBox>

          <InputBox>
            <Label htmlFor="confirmPassword">비밀번호확인<Required>*</Required></Label>
            <Input type="password" ref={passwordConfirmRef} id="confirmPassword" onChange={() => inputHandler(passwordConfirmRef, "passwordconfirm")}></Input>
            <InputRightSpace>2자이상 특수문자 포함</InputRightSpace>
          </InputBox>

          <InputBox>
            <Link to={'/login'}>
              <GoBackButton>뒤로가기</GoBackButton>
            </Link>
            <SingupButton onClick={Clickkkk}>회원가입</SingupButton>
          </InputBox>

        </FlexDiv>
      </SignupContainer >
    </>
  );
}

export default SignupForm;


const SignupContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
const SignupTitle = styled.div`
  margin: 2rem auto;
  font-size: 2rem;
  font-weight: 400;
  
`

const InputBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 1rem 1rem 1rem 1rem;

`

const Input = styled.input`
width: 300px;
height: 30px;
margin-left: 2rem;
margin-right: 0.5rem;
border: 1px solid #cfcfcf;
`
const Label = styled.label`
    width: 100px;
`
const InputRightSpace = styled.div`
  width: 200px;
`

const Required = styled.span`
  color: red;
`
const GoBackButton = styled.button`
  font-size: 1.3rem;
  margin-top: 1rem;
  width: 200px;
  padding: 0.6rem;
  border: 1px solid #cfcfcf;
  background-color: white;
   transition: all 0.1s ease-out; ;
  &:hover{
    scale: 1.1;
  }
`

const SingupButton = styled.button`
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-left: 3rem;
  width: 200px;
  padding: 0.6rem;
  color: white;
  background-color: #000000;
  transition: all 0.1s ease-out; ;
  &:hover{
    scale: 1.1;
  }
`



const FlexDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction:column;
  
`
const IsValidDiv = styled.div`
margin: auto;
  color: #fa8a8a;
  font-size: 1.5rem;
  font-weight: 600;
`