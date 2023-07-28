import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useWatchLocation from "../../hooks/useWatchLocation";

const NavMenu = ({ children, path }) => {
  const watchState = useWatchLocation(path);

  return (
    <NavList to={path} watchstate={`${watchState}`}>
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
    font-weight: ${({ watchstate }) => watchstate === "true" && "bold"};
  }
`;
