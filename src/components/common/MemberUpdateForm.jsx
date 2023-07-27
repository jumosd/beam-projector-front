import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const MemberUpdateForm = () => {
    return (
        <>
            <MemberBox>
                <div>
                    <MemberImage src='https://i.ytimg.com/vi/yjdT05m8CqQ/maxresdefault.jpg' />
                    <SettingIcon src='src/assets/setting.svg' />
                </div>
                <div>
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
            <div className='member-Update__button'><Link to={'/memberupdate'}>수정하기</Link></div>
        </>
    );
};

export default MemberUpdateForm;



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