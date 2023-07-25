import { styled } from "styled-components";
import Title from "../components/common/Title";
import Logo from "../assets/projet-logo2.svg";

const About = () => {
  return (
    <>
      <Title size={"120px"} mb={"80px"}>
        We&apos;re
      </Title>
      <LogoImg src={Logo} />
      <Title size={"55px"} fw={"300"}>
        Build
        <br />A Project!
      </Title>
      <IntroP>
        슈퍼 코딩 프로젝트 동아리 입니다!
        <br /> 프로젝트를 만들면서 경험을 쌓고있습니다.
      </IntroP>
      <Video onLoadStart="this.volume=0.2" autoPlay loop muted playsInline>
        <source src="videos/supercoding-main-video.mp4" type="video/mp4" />
      </Video>
    </>
  );
};

export default About;

const LogoImg = styled.img`
  margin-bottom: 90px;
`;

const Video = styled.video`
  width: 1200px;
  height: 800px;
  display: flex;
  align-items: flex-start;
`;

const IntroP = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: -0.03em;
  color: #353535;
`;
