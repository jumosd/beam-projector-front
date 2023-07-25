import styled from "styled-components";
import Title from "../components/common/Title";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Title>Projects</Title>
      <CardSection>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardSection>
    </>
  );
};

export default Home;

const CardSection = styled.section`
  display: flex;
  width: 1200px;
  margin-top: 130px;
  flex-wrap: wrap;
`;
