import { styled } from "styled-components";

const StackIcon = ({ src }) => {
  return (
    <StackList>
      <StackIconImg src={src} />
    </StackList>
  );
};

export default StackIcon;

const StackList = styled.li`
  margin-right: 6px;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const StackIconImg = styled.img`
  width: 30px;
  height: 30px;
`;
