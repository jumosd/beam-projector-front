import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavMenu = ({ children, path }) => {
  const navigate = useNavigate();

  return (
    <NavList onClick={() => navigate(path)}>
      <a>{children}</a>
    </NavList>
  );
};

export default NavMenu;

const NavList = styled.li`
  font-weight: 400;
  font-size: 22px;
  ${({ active }) => active && "font-weight: bold"}
  vertical-align: baseline;
  cursor: pointer;
`;
