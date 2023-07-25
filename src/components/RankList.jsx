import React from 'react';
import { styled } from 'styled-components';

const RankList = () => {
    return (
        <>
            <RankListBox>
                <RankImage></RankImage>
                <RankDescription>
                    <ProjectName>프로젝트이름</ProjectName>
                    <TeamName>팀이름</TeamName>
                    <LikeCount>좋아요수</LikeCount>
                </RankDescription>
                <CreateAt>2020.07.07</CreateAt>
            </RankListBox>
        </>
    );
};

export default RankList;

const RankListBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    padding: 5px;
    width: 800px;
    height: 70px;
    border-radius: 10px;
  box-shadow: 10px 10px 10px #ededed;
`
const RankImage = styled.div`
box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 1px solid black;
`
const RankDescription = styled.div`
display: flex;
align-items: center;
 margin-left: 0.5rem;
  width: 600px;
  height: 50px;
`

const ProjectName = styled.div`
    width:250px
`

const TeamName = styled.div`
width:250px
`

const LikeCount = styled.div`
width:100px
`

const CreateAt = styled.div`
display: flex;
justify-content:center  ;
align-items: center;
justify-content: center;
margin-left: 0.5rem;
    width: 100px;
    height: 100%;

`