import styled from "styled-components";

const Main = ({ children }) => {
  return <HomeMain>{children}</HomeMain>;
};

export default Main;

const HomeMain = styled.main`
  height: 100vh;
  padding-top: 100px;
  background-color: #fff;
`;
