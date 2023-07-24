import styled from "styled-components";

const Title = ({ children }) => {
  return <TitleH2>{children}</TitleH2>;
};

export default Title;

const TitleH2 = styled.h2`
  font-size: 100px;
  font-family: "Roboto";
  font-weight: 200 !important;
`;
