import React from "react";
import { styled } from "styled-components";

const Post = () => {
  return (
    <Layout>
      <PostTitle>포스트입니다.안녕하암난마나나나나나나</PostTitle>
    </Layout>
  );
};

export default Post;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 50px 200px 0 200px;
`;

const BtnBack = styled.button``;

const PostTitle = styled.h1`
  font-weight: bold;
  font-size: 60px;
`;
