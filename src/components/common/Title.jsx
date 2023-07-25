import styled from "styled-components";

const Title = ({ children, size, fw = 200, mb }) => {
  return (
    <TitleH2 size={size} fw={fw} mb={mb}>
      {children}
    </TitleH2>
  );
};

export default Title;

const TitleH2 = styled.h2`
  font-size: 100px;
  font-family: "Roboto";
  text-align: center;
  font-weight: ${({ fw }) => fw};
  font-size: ${({ size }) => size};
  margin-bottom: ${({ mb }) => mb};
  color: #353535;
`;
