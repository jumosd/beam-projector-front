import styled from "styled-components";

const Main = ({ children }) => {
  return (
    <HomeMain>
      <HomeWrapper>{children}</HomeWrapper>
    </HomeMain>
  );
};

export default Main;

const HomeMain = styled.main`
  padding-top: 100px;
`;

const HomeWrapper = styled.div`
  margin: 80px 8vw 80px 8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
