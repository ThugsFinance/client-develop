import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ConnectWalletButton from "components/ConnectWalletButton";
import { Button } from "components/Button";

import mediaQueries from "../configs/mediaQueries";

const SContainer = styled.div`
  ${mediaQueries.lg} {
    margin-left: 17vw;
  }
`;

const Header = styled.div`
  background-image: url(/images/bg-inventory.3f624c3d.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 75px;
  > h3 {
    font-size: 60px;
    line-height: 50px;
    margin: 40px;
  }
  ${mediaQueries.lg} {
    margin-top: 0;
    height: 300px;
    > h3 {
      margin-left: 70px;
    }
  }
`;

const Content = styled.div`
  margin-top: 50px;
  margin-bottom: 250px;
  display: flex;
  flex-direction: column;
  padding: 0 30px 0 30px;

  ${mediaQueries.md} {
    padding: 0 50px 0 50px;
  }

  ${mediaQueries.lg} {
    flex-direction: row;
    padding: 0;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaQueries.lg} {
    width: 35%;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0px;

  ${mediaQueries.lg} {
    width: 65%;
    padding-left: 50px;
  }
`;

const ButtonConnectWallet = styled(Button)`
  width: 100% !important;
  margin-top: 20px;
  border-radius: 10px;
`;

function Detail(props) {
  return (
    <SContainer>
      <Header>
        <h3>Pokamon</h3>
      </Header>
      <Content>
        <LeftSide>
          <video src="/videos/CanhSang_MP4.mp4" loop playsInline width="100%" autoPlay muted></video>
          <ButtonConnectWallet style={{ background: "#de6a1e" }}>Please connect your wallet</ButtonConnectWallet>
          <ButtonConnectWallet>Trade NFT on tofu</ButtonConnectWallet>
        </LeftSide>
        <RightSide>
          {/* <h2>Pokamon</h2> */}
          <p style={{ fontSize: "20px" }}>
            The Unibranch embodies the art of elegance and grace. Gathering and attracting large crowds, Unibranch manifest scene of delight and
            charm.
          </p>
          <table>
            <tr>
              <td>TOKEN ID</td>
              <td>Maria Anders</td>
            </tr>
            <tr>
              <td>NAME</td>
              <td>Francisco Chang</td>
            </tr>
            <tr>
              <td>BACKGROUND</td>
              <td>Francisco Chang</td>
            </tr>
            <tr>
              <td>COLOR</td>
              <td>Francisco Chang</td>
            </tr>
            <tr>
              <td>OPENING NETWORK</td>
              <td>Francisco Chang</td>
            </tr>
            <tr>
              <td>SPECIAL</td>
              <td>Francisco Chang</td>
            </tr>
            <tr>
              <td>TYPE</td>
              <td>Francisco Chang</td>
            </tr>
          </table>
        </RightSide>
      </Content>
      {/* <Items>
        <Daily />
      </Items> */}
    </SContainer>
  );
}

Detail.propTypes = {};

export default Detail;
