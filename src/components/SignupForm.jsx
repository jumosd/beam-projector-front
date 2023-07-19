import React, { useState, useRef } from "react";
import styled from "styled-components";

import "../styles/Signup.css";

function SignupForm() {

  //회원가입폼
  const [signupForm, setSignupForm] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    passwordconfirm: ''
  })
  //유효성 체크
  const [empty, setEmpty] = useState(true)

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


  const Clickkkk = () => {
    if (signupForm.id.trim() === '' ||
      signupForm.name.trim() === '' ||
      signupForm.password.trim() === '' ||
      signupForm.passwordconfirm.trim() === '' ||
      signupForm.email.trim() === '') {
      setEmpty(false)
    } else if (signupForm.id.length < 4 || signupForm.id.length > 16) {

    } else {

      setEmpty(true)
    }


  }
  // 렌더링될부분 //
  return (
    <>
      <SignupContainer >
        <SignupTitle>JOIN</SignupTitle>
        {empty === false ? <IsValidDiv>빈칸이 있어요 다시 입력 해주세요</IsValidDiv> : <IsValidDiv>ㅇㅇㅇ</IsValidDiv>}
        <InputBox>
          <Label htmlFor="input_id">아이디<Required>*</Required></Label>
          <Input type="text" ref={idRef} id="input_id" onChange={() => inputHandler(idRef, "id")}></Input>
          <InputRightSpace>(영문소문자/숫자,4~16자)</InputRightSpace>
        </InputBox>


        <InputBox>
          <Label htmlFor="input_name">이름<Required>*</Required></Label>
          <Input type="text" ref={nameRef} id="input_name" onChange={() => inputHandler(nameRef, "name")}></Input>
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
          <InputRightSpace></InputRightSpace>
        </InputBox>

        <InputBox>
          <Label htmlFor="confirmPassword">비밀번호확인<Required>*</Required></Label>
          <Input type="password" ref={passwordConfirmRef} id="confirmPassword" onChange={() => inputHandler(passwordConfirmRef, "passwordconfirm")}></Input>
          <InputRightSpace></InputRightSpace>
        </InputBox>

        <FlexDiv>
          <GoBackButton>뒤로가기</GoBackButton>
          <SingupButton onClick={Clickkkk}>회원가입</SingupButton>
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
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 400;
  
`

const InputBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: auto;
    padding: 1rem 1rem 2rem 1rem;
    border-bottom: 1px solid #cfcfcf;
`

const Input = styled.input`
width: 300px;
height: auto;
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
`

const SingupButton = styled.button`
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-left: 3rem;
  width: 200px;
  padding: 0.6rem;
  border: 1px solid #cfcfcf;
  background-color: #c8fffb;
  transition: all 0.3s ease-out; ;
  &:hover{
    background-color: #9ec3f9;
  }
`



const FlexDiv = styled.div`
  margin: auto;
  display: flex;
  
`
const IsValidDiv = styled.div`
  color: #fa8a8a;
  font-size: 1.5rem;
  font-weight: 600;
`