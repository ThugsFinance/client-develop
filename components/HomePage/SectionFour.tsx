import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Container from "../Container";
import mediaQueries from "../../configs/mediaQueries";

const SContainer = styled(Container)`
  padding-top: 75px;
  padding-bottom: 175px;
`;

const Content = styled.div`
  width: 100%;
  margin: auto;
  ${mediaQueries.md} {
    width: 70%;
  }
  ${mediaQueries.xl} {
    width: 100%;
  }
`;

const ArticleList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;
  flex-direction: column;
  ${mediaQueries.sm} {
    flex-direction: row;
  }
`;

const ArticleItem = styled.div`
  background: #fafafa 0 0 no-repeat padding-box;
  box-shadow: 0 0 12px rgb(0 0 0 / 5%);
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 28px;
  width: 100%;
  > p {
    color: #0d1c2b;
    min-height: 70px;
    max-height: 110px;
    overflow: hidden;
    text-align: justify;
  }
  ${mediaQueries.sm} {
    width: 45%;
  }
  ${mediaQueries.lg} {
    width: 23%;
  }
`;

// const Time = styled.div`
//   color: #2330d0;
//   font-size: 14px;
//   display: flex;
//   align-items: center;
// `;

const Title = styled.h2`
  color: #0d1c2b;
  text-transform: capitalize;
  font-size: 60px;
  font-weight: normal;
  margin: 0;
`;

function SectionFour() {
  return (
    <>
      <SContainer id="section-four">
        <Content>
          <Title>Market Place</Title>
          <p>Hot Monsters</p>
          <ArticleList>
            <Link href="/detail">
              <ArticleItem>
                <img width="100%" src="/images/245083807_649804032652753_4715436386866100168_n.jpg" alt="thump"></img>
              </ArticleItem>
            </Link>
            <Link href="/detail">
              <ArticleItem>
                <img width="100%" src="/images/Ackygama_BG_23092021_Color_3_ver5.png" alt="thump"></img>
              </ArticleItem>
            </Link>
            <Link href="/detail">
              <ArticleItem>
                <img width="100%" src="/images/246629683_562051811744843_8493437280040564784_n.jpg" alt="thump"></img>
              </ArticleItem>
            </Link>
            <Link href="/detail">
              <ArticleItem>
                <img width="100%" src="/images/Ackygama_BG_23092021_Color_1.png" alt="thump"></img>
              </ArticleItem>
            </Link>
            <Link href="/detail">
              <ArticleItem>
                <img width="100%" src="/images/245083807_649804032652753_4715436386866100168_n.jpg" alt="thump"></img>
              </ArticleItem>
            </Link>
            <Link href="/detail">
              <ArticleItem>
                <img width="100%" src="/images/Ackygama_BG_23092021_Color_3_ver5.png" alt="thump"></img>
              </ArticleItem>
            </Link>
            <Link href="/detail">
              <ArticleItem>
                <img width="100%" src="/images/246629683_562051811744843_8493437280040564784_n.jpg" alt="thump"></img>
              </ArticleItem>
            </Link>
            <Link href="/detail">
              <ArticleItem>
                <img width="100%" src="/images/Ackygama_BG_23092021_Color_1.png" alt="thump"></img>
              </ArticleItem>
            </Link>
          </ArticleList>
        </Content>
      </SContainer>
    </>
  );
}

SectionFour.propTypes = {};

export default SectionFour;
