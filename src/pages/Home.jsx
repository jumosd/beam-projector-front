import styled from "styled-components";
import Title from "../components/common/Title";

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Projects</Title>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  margin: 80px 8vw 80px 8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
