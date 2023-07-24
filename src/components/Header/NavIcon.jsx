import styled from "styled-components";

const NavIcon = ({ children }) => {
  return (
    <IconWrapper>
      <a>{children}</a>
    </IconWrapper>
  );
};

export default NavIcon;

const IconWrapper = styled.i`
  margin-right: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
