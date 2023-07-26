import axios from 'axios';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const Members = () => {

    const [memberInfo, setMemberInfo] = useState(
        {
            memberId: "tjwndnjs1998",
            email: "tjwndnjs1998@naver.com",
            name: "서주원",
            nickName: "서주원닉네임",
            profileImageUrl: ""
        }
    )





    const jwtToken = localStorage.getItem('access_token')
    const 회원정보조회 = () => {
        axios.get('members',
            {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                }
            })
            .then(response => {
                // 서버 응답 데이터 처리
                console.log(response.data);

                setMemberInfo({
                    ...memberInfo,
                    memberId: response.data["memberId"],
                    email: response.data["email"],
                    name: response.data["name"],
                    nickName: response.data["nickName"],
                    profileImageUrl: response.data["profileImageUrl"],
                })
            })
    }

    return (
        <>
            <MemberSetup>
                <div>
                    회원정보수정하는곳
                    <p>아이디 : {memberInfo.memberId}</p>
                    <p>이메일 : {memberInfo.email}</p>
                    <p>이름 : {memberInfo.name}</p>
                    <p>닉네임 : {memberInfo.nickName}</p>
                    <p>프로필사진 : {memberInfo.profileImageUrl}</p>
                </div>
            </MemberSetup>

        </>
    );
};

export default Members;




const MemberSetup = styled.div`
    margin: auto;
`