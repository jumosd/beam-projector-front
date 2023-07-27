import axios from 'axios';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import "/src/styles/member.css"

const Members = () => {

    const [memberInfo, setMemberInfo] = useState(
        {
            memberId: "test123123",
            email: "test12348@naver.com",
            name: "테스트",
            nickName: "테스트닉네임",
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
            <MemberBox>
                <div>
                    <MemberImage src='https://i.ytimg.com/vi/yjdT05m8CqQ/maxresdefault.jpg' />

                </div>
                <div style={{ marginLeft: '40px' }}>
                    <div className='members-info'>
                        <div className='members-info__title'>이름</div>
                        <div className='members-info__description'>하진수</div>
                    </div>
                    <div className='members-info'>
                        <div className='members-info__title'>닉네임</div>
                        <div className='members-info__description'>하방방ㅇ.{'<'}</div>
                    </div>
                    <div className='members-info'>
                        <div className='members-info__title'>이메일</div>
                        <div className='members-info__description'>jumosd@icloud.com</div>
                    </div>
                </div>
            </MemberBox >
            <div className='member-Update__button'>
                <Link to={'/memberupdate'}>회원 정보 수정하기</Link>
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