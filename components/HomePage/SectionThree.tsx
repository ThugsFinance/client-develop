/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";

import styled from "styled-components";

import mediaQueries from "../../configs/mediaQueries";
import Container from "../Container";
import Button from "../OldButton";

const Wrapper = styled.div`
  background-image: url(/images/phoenix2.png);
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f9f9f9;
  margin-top: max(-135px, -20vh);

  background-size: 65%;
`;

const SContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 75px;
  padding-bottom: 25px;
  justify-content: space-between;
  ${mediaQueries.md} {
    padding-top: 100px;
  }
  ${mediaQueries.xl} {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > h2 {
    font-weight: normal;
    font-size: 60px;
    margin: 0;
  }
  ${mediaQueries.md} {
    width: 75%;
    > h2 {
      font-size: 95px;
    }
  }
  ${mediaQueries.xl} {
    width: 45%;
  }
`;

const RightSide = styled.div`
  width: 100%;
  display: flex;
  ${mediaQueries.md} {
    width: 75%;
  }
  ${mediaQueries.xl} {
    width: 45%;
  }
`;

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 3px 12px rgb(0 0 0 / 10%);
  background-color: #fff;
  overflow: hidden;
  width: 100%;
`;

const CardHeader = styled.div`
  background-color: #0d1c2b;
  color: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h3 {
    font-weight: normal;
    margin: 0;
  }
  > p {
    width: 70%;
    margin: 5px 0 0 0;
    text-align: center;
  }
`;

const CardContent = styled.div`
  padding: 12px 12px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    width: 80%;
  }
`;

const DownloadBox = styled.div`
  width: 80%;
  display: flex;
  margin: 20px 0;
`;

// const Partner = styled.div`
//   width: 100%;
//   margin-top: 50px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 50px;
//   > h2 {
//     font-weight: normal;
//     font-size: 60px;
//     margin: 0;
//     text-align: center;
//   }
//   ${mediaQueries.md} {
//     width: 70%;
//   }
// `;

// const PartnerList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin: 20px 0;
//   align-items: center;
//   > a {
//     margin: 10px 20px;
//   }
// `;

function SectionThree() {
  return (
    <Wrapper id="section-three">
      <SContainer>
        <LeftSide>
          <h2>Get MONSTERS</h2>
          <p>
            MONSTER token is the ERC-20 utility token for the Crazy Kings tower defense game franchise developed and published by Animoca Brands,
            which includes Crazy Kings, Crazy Defense Heroes, and an upcoming blockchain PC game.
          </p>
        </LeftSide>
        <RightSide>
          <Card>
            <CardHeader>
              <h3>Play-to-Earn</h3>
              <p>Download the games, complete challenges and claim your MONSTERS</p>
            </CardHeader>
            <CardContent>
              <Image src="/images/logo.png" height="120px" width="120px" alt="logo" />
              <p>
                Crazy Defense Heroes is the game for strategy lovers. Defend your kingdom from evil enemies by commanding heroes and lead your army to
                win the ambush.
              </p>
              <DownloadBox>
                {/* <Image src="https://crazydefenseheroes.com/static/media/qr_cdh.4f43a0b4.png" alt="qr" width="68px" height="68px" />
                <div style={{ marginLeft: "10px" }}>
                  <a>
                    <Image src="https://crazydefenseheroes.com/static/media/icon-android.345b6b25.svg" alt="android" layout="fill" />
                  </a>
                  <a style={{ marginLeft: "10px" }}>
                    <Image src="https://crazydefenseheroes.com/static/media/icon-apple.6fe0b955.svg" alt="ios" layout="fill" />
                  </a>
                </div> */}
              </DownloadBox>
              <Button style={{ width: "70%" }}>More Details</Button>
              <h3>MONSTERS Token claim available soon</h3>
            </CardContent>
          </Card>
        </RightSide>
      </SContainer>
      {/* <Container>
        <Partner>
          <h2>MONSTERS is Available On</h2>
          <PartnerList>
            <a>
              <img width="200px" src="https://crazydefenseheroes.com/static/media/logo-mxc.52fc313f.png" />
            </a>
            <a>
              <img width="200px" src="https://crazydefenseheroes.com/static/media/logo-mxc.52fc313f.png" />
            </a>
            <a>
              <img width="200px" src="https://crazydefenseheroes.com/static/media/logo-mxc.52fc313f.png" />
            </a>
            <a>
              <img width="200px" src="https://crazydefenseheroes.com/static/media/logo-mxc.52fc313f.png" />
            </a>
            <a>
              <img width="200px" src="https://crazydefenseheroes.com/static/media/logo-mxc.52fc313f.png" />
            </a>
            <a>
              <img width="200px" src="https://crazydefenseheroes.com/static/media/logo-mxc.52fc313f.png" />
            </a>
          </PartnerList>
        </Partner>
      </Container> */}
    </Wrapper>
  );
}

SectionThree.propTypes = {};

export default SectionThree;
