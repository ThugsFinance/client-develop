import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
// import { useCustomContract } from "hooks/useContract";
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
  display: flex;
  padding: 50px 20px 100px 20px;
  ${mediaQueries.lg} {
    padding: 50px 0 100px 0;
  }
`;

const Text = styled.div`
  background-color: rgba(24, 40, 55, 0.95);
  padding: 44px;
  color: #ccc;
  width: 100%;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 30px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 11px;
    font-weight: 500;
    margin-top: 0;
  }
  > img {
    width: 100%;
    margin: auto;
  }
  p {
    width: 100%;
    font-size: 20px;
    word-wrap: break-word;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 1.5px;
    margin-top: 0;
  }
  ${mediaQueries.sm} {
    > img {
      width: 75%;
    }
    p {
      width: 50%;
    }
  }
`;

function Tokenomics(props) {
  return (
    <SContainer>
      <Header>
        <h3>Tokenomics</h3>
      </Header>
      <Content>
        <Text>
          <h2>Descriptions</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <p>- Name: Viking War</p>
            <p>- Symbol: CMON</p>
            <p>- Decimal: 18</p>
            <p>- Blockchain: BSC - Binance Smart Chain</p>
            <p>- Init: 10 000 000</p>
            <p>- Max Supply: 100 000 000 </p>
            <p>- Can Burn</p>
          </div>
          <h2 style={{ marginTop: "20px" }}>Coin Supply & Distribution</h2>
          <img src="/images/tokenomics.png" alt="tokenomics" />
        </Text>
      </Content>
    </SContainer>
  );
}

Tokenomics.propTypes = {};

export default Tokenomics;
