import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavMenu = ({ children, path }) => {
  return (
    <NavList to={path}>
      <li>{children}</li>
    </NavList>
  );
};

export default NavMenu;

const NavList = styled(NavLink)`
  font-weight: 400;
  font-size: 22px;
  vertical-align: baseline;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
`;
