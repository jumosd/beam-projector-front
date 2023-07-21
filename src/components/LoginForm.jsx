import React from "react";
import { styled } from "styled-components";

function LoginForm() {
  return (
    <>
      ㅁㄴㅇㄹㅁㄴㅇㄹ
      <SignupContainer >
        <SignupTitle>JOIN</SignupTitle>
        <InputBox>
          <Label htmlFor="input_id">아이디<Required>*</Required></Label>
          <Input type="text" ref={idRef} id="input_id" onChange={() => inputHandler(idRef, "id")}></Input>
          <InputRightSpace>(영문소문자/숫자,4~16자)</InputRightSpace>
        </InputBox>
      </SignupContainer >
    </>)
}

export default LoginForm;



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
    `

const SingupButton = styled.button`
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-left: 3rem;
    width: 200px;
    padding: 0.6rem;
    border: 1px solid #cfcfcf;
    background-color: #c8fffb;
    transition: all 0.3s ease-out;
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