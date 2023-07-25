import styled from "styled-components";
import Logo from "../assets/projet-logo2.svg";

const Card = () => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <CardImg src={Logo} />
      </ImgWrapper>
      <DescWrapper>
        <CardTitle>프로젝트 이름</CardTitle>
      </DescWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  height: 600px;
  margin-bottom: 20px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 75%;
  border-radius: 35px;
  border: 1px solid gray;
  overflow: hidden;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transform: translateY(-5px);
  }
`;

const CardImg = styled.img`
  width: 90%;
  height: 100%;
`;

const DescWrapper = styled.div`
  margin-top: 20px;
  /* background-color: gray; */
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  font-family: "Roboto";
`;
