import styled from "styled-components";
// import logo from "../../assets/logo.png";
import stick from "../../assets/stick.gif";
import NavMenu from "./NavMenu";
import NavIcon from "./NavIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderCompo>
      <LogoWrapper>
        <Link to={"/"}>
          <Logo src={stick} />
        </Link>
      </LogoWrapper>
      <CenterNav>
        <NavUl>
          <NavMenu path={"/about"}>We&apos;re</NavMenu>
          <NavMenu path={"/board"}>Board</NavMenu>
          <NavMenu path={"/ranking"}>Ranking</NavMenu>
          <NavMenu path={"/login"}>Login</NavMenu>
        </NavUl>
      </CenterNav>
      <NavIcons>
        {/* <NavIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </NavIcon> */}
        <NavIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </NavIcon>
        <NavIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </NavIcon>
      </NavIcons>
    </HeaderCompo>
  );
};

export default Header;

const HeaderCompo = styled.header`
  position: fixed;
  height: 100px;
  left: 0;
  top: 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 5vw;
  top: 25px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const CenterNav = styled.nav`
  display: flex;
  align-items: center;
  width: 400px;
`;

const NavUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavIcons = styled.ul`
  position: absolute;
  top: 42px;
  right: 3vw;
  display: flex;
  justify-content: center;
`;
