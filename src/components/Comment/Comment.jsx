import { useState } from "react";
import { styled } from "styled-components";
import icon from "../../assets/stick.gif";

const Comment = ({ nickName, comments, createAt }) => {
  const [mode, setMode] = useState(true);
  const [comment, setComment] = useState(comments);

  const commentFix = () => {};

  return (
    <CommentList>
      <CommentHeader>
        <ProfileWrapper>
          <ProfileImg src={icon} />
          <UserWrapper>
            <UserId>{nickName}</UserId>
            <CommentDate>{createAt.replace("T", " ")}</CommentDate>
          </UserWrapper>
        </ProfileWrapper>
        <BtnWrapper>
          <CommentBtn onClick={() => setMode(true)}>수정</CommentBtn>
          <CommentBtn>삭제</CommentBtn>
        </BtnWrapper>
      </CommentHeader>
      {mode ? (
        <FixWrapper>
          <CommentFixInput
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
          <FixModeBtnWrapper>
            <ModeBtn>수정 완료</ModeBtn>
            <ModeBtn active={"false"} onClick={() => setMode(false)}>
              취소
            </ModeBtn>
          </FixModeBtnWrapper>
        </FixWrapper>
      ) : (
        <CommentBody>{comment}</CommentBody>
      )}
    </CommentList>
  );
};

export default Comment;

const CommentList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserId = styled.p`
  font-weight: bold;
`;

const CommentDate = styled.p`
  color: gray;
`;

const BtnWrapper = styled.div`
  display: flex;
`;

const CommentBtn = styled.button`
  color: gray;
  background: none;
  border: none;
`;

const CommentBody = styled.p`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  font-weight: 500;
  border-bottom: 1px solid gray;
`;

const FixWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CommentFixInput = styled.input`
  padding: 7px;
  border-radius: 5px;
  outline: none;
`;

const FixModeBtnWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  width: 200px;
`;

const ModeBtn = styled.button`
  background-color: ${({ active }) => (active ? "gray" : "black")};
  border: none;
  color: ${({ active }) => (active ? "black" : "white")};
  border-radius: 4px;
  margin-right: 10px;
  padding: 8px;
  width: 100%;
`;
