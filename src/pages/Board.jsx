import styled from "styled-components";
import Title from "../components/common/Title";
import BoardCard from "../components/Board/BoardCard";
import Pen from "../assets/Pen.svg";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();

  const moveToCreatePost = () => {
    navigate("/board/create");
  };

  return (
    <>
      <Title>Board</Title>
      <ListWrapper>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </ListWrapper>
      <PostBtn onClick={moveToCreatePost}>
        <img src={Pen} alt="" />
      </PostBtn>
    </>
  );
};

export default Board;

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 1200px;
  margin-top: 200px;
`;

const PostBtn = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  border-radius: 30px;
  border: 1px solid black;
  background-color: white;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
