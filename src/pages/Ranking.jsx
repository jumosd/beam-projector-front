import Title from "../components/common/Title";
import RankList from "../components/Ranklist";
import styled from "styled-components";
import fistgrade from "../assets/first-grade.png"

const Ranking = () => {


  return (
    <>
      <Title>Ranking</Title>;

      <FirstRank>
        <FirstGrade src={fistgrade} />
        <FirstRankImage src="https://i.namu.wiki/i/pkJeMQAe4Fo6MdOZ6MMnDjy19pjW25K7ZER3ZOs_2HO4PRBa4_SIGUVKUgdj5awSCxQN3IEgyG2Mr6VC4nePVg.gif"></FirstRankImage>
        <FirstRankDescription>
          <FirstRankDescription_list>프로젝트이름</FirstRankDescription_list>
          <FirstRankDescription_list>팀이름</FirstRankDescription_list>
          <FirstRankDescription_list>좋아요수</FirstRankDescription_list>
        </FirstRankDescription>
        <CreateAt>
          2020.02.13
        </CreateAt>
      </FirstRank >
      <RankList></RankList>




    </>
  )
};

export default Ranking;

const FirstRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 170px;
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #ededed;
  margin: 20px 0px;
`
const FirstGrade = styled.img`
  position: relative;
  width: 60px;
  bottom: 40px;
`
const FirstRankImage = styled.img`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 10px;
`
const FirstRankDescription = styled.div`
  margin-left: 1rem;
  width: 500px;
  height: 150px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content:space-between;


`

const FirstRankDescription_list = styled.li`
  font-size: 36px;
  list-style-type:none;
`

const CreateAt = styled.div`
display: flex;
justify-content:center  ;
align-items: end;
text-align: end;
justify-content: center;
margin-left: 0.5rem;
    width: 100px;
    height: 100%;
   
`