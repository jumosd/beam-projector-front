import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import "/src/styles/member.css"

const Members = () => {

    const [memberInfo, setMemberInfo] = useState(
        {
            memberId: "",
            email: "",
            name: "",
            nickName: "",
            profileImageUrl: ""
        }
    )
    const jwtToken = localStorage.getItem('access_token')
    const parseToken = JSON.parse(jwtToken)

    const 회원정보조회 = () => {
        axios.get('http://43.202.4.184:8080/members/',
            {
                headers: {
                    'Authorization': `Bearer ${parseToken}`
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
            }).catch((error) => {

                console.log("에러")
                console.log(error)
            })
    }

    useEffect(() => {
        회원정보조회()
    }, [])
    return (
        <>
            <MemberBox>
                <div>
                    <MemberImage src='https://i.ytimg.com/vi/yjdT05m8CqQ/maxresdefault.jpg' />

                </div>
                <div style={{ marginLeft: '40px' }}>
                    <div className='members-info'>
                        <div className='members-info__title'>이름</div>
                        <div className='members-info__description'>{memberInfo.name}</div>
                    </div>
                    <div className='members-info'>
                        <div className='members-info__title'>닉네임</div>
                        <div className='members-info__description'>{memberInfo.nickName}</div>
                    </div>
                    <div className='members-info'>
                        <div className='members-info__title'>이메일</div>
                        <div className='members-info__description'>{memberInfo.email}</div>
                    </div>
                </div>
            </MemberBox >
            <div className='member-Update__button'>
                <Link to={'/memberupdate'}  >회원 정보 수정하기</Link>
            </div>



        </>
    );
};

export default Members;




const MemberBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 800px;
    margin: auto;
`

const MemberImage = styled.img`
    width: 250px;
    height: 250px;
   
    border-radius: 9999px;
    object-fit: cover;
`

const SettingIcon = styled.img`
    width: 40px;
    height: 40px;
    position: relative;
    right: 30px;
    cursor: pointer;

`