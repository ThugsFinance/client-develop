/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

import mediaQueries from "../../configs/mediaQueries";

import Button from "../OldButton";

const Wrapper = styled.div`
  background-image: url(/images/phoenix1.png);
  background-attachment: fixed;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f9f9f9;
  padding-top: 100px;

  background-size: 42%;
  background-position-x: 15px;
  background-position-y: 80px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 75px;
  position: relative;
  ${mediaQueries.lg} {
    padding-top: 80px;
  }
`;

const LoginBox = styled.div`
  position: relative;
  width: 100%;
  height: 386px;
  background-image: url(/images/bg-m-paper-long.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  max-width: 384px;
  padding: 20px;
  ${mediaQueries.md} {
    max-width: unset;
    width: 650px;
    height: 344px;
    background-image: url(/images/bg-i-paper.png);
  }
`;

const ClaimBox = styled.div`
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 32px;
    line-height: normal;
    color: #69341d;
    margin: 0;
    padding: 12px 8px;
  }
  > p {
    font-size: 12px;
    width: 80%;
    margin-top: 4px;
    padding: 12px 8px;
  }
  ${mediaQueries.md} {
    > h3 {
      font-size: 60px;
      padding: 12px 18px;
    }
    > p {
      font-size: 14px;
      width: 70%;
      padding: 12px 18px;
    }
  }
`;

const CTAButton = styled(Button)`
  font-size: 14px;
  line-height: 12px;
  font-family: "CurseCasual";
  width: 92%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  padding: 12px 8px;

  ${mediaQueries.md} {
    width: 60%;
    margin-top: 0;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -4%;
  right: -4%;
  > img {
    max-width: 150px;
    max-height: 194px;
  }
  ${mediaQueries.md} {
    right: -9%;
    top: 0;
    > img {
      width: 190px;
      max-width: unset;
      max-height: unset;
    }
  }
`;

const DownloadBox = styled.div`
  width: 92%;
  background-color: #3c1e11;
  border-radius: 15px;
  padding: 12px;
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  margin: 30px auto 16px auto;
  max-height: 90px;
  > img {
    margin-right: 6px;
  }
  ${mediaQueries.md} {
    width: 100%;
    max-height: 70px;
    margin: 20px auto 16px auto;
  }
`;

const DownloadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  > p {
    margin: 0;
    margin-bottom: 5px;
  }
  ${mediaQueries.md} {
    flex-direction: row;
    align-items: center;
    > p {
      margin-bottom: 0px;
      margin-right: 10px;
    }
  }
`;

function SectionOne() {
  return (
    <Wrapper id="section-one">
      <Content>
        <LoginBox>
          <ClaimBox>
            <h3>View MONSTERS</h3>
            <p>If you have already completed the linking process, login with your CDH User ID to find out how many TOWER tokens you earned!</p>
            <CTAButton onClick={() => alert("Coming soon")}>Login your CDH User ID</CTAButton>
          </ClaimBox>
          <DownloadBox>
            <img src="/images/logo.png" height="50px" alt="logo"></img>
            <DownloadContent>
              <p>Wanna Earn MONSTER? Download and Play CDH</p>
              <div>
                <a>
                  <img src="https://crazydefenseheroes.com/static/media/icon-android-wht-circle.16be6ac7.svg" />
                </a>
                <a style={{ marginLeft: "5px" }}>
                  <img src="https://crazydefenseheroes.com/static/media/icon-apple-store-wht-circle.10995cb5.svg" />
                </a>
              </div>
            </DownloadContent>
          </DownloadBox>
          <ImageWrapper>
            <img src="/images/Grayhorse_Trans.png" alt="sophia" />
          </ImageWrapper>
        </LoginBox>
      </Content>
    </Wrapper>
  );
}

SectionOne.propTypes = {};

export default SectionOne;
