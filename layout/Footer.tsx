/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

import mediaQueries from "../configs/mediaQueries";
import Container from "../components/Container";

const Wrapper = styled.div`
  background-color: #000;
  width: 100%;
  color: #fff;
  min-height: 160px;
  display: flex;
`;

const FContainer = styled(Container)`
  position: relative;
  display: flex;
`;

const Data = styled.div`
  flex: 1 1;
  ${mediaQueries.lg} {
    flex: unset;
  }
`;

const Links = styled.div`
  display: flex;
  etter-spacing: 0.7px;
  text-transform: uppercase;
  margin-top: 48px;
  justify-content: space-evenly;
  > a {
    margin-right: 16px;
    color: #f7f7f7;
    cursor: pointer;
  }
  ${mediaQueries.lg} {
    justify-content: start;
  }
`;

const Copyright = styled.div`
  margin-top: 12px;
  font: normal normal normal 10px/20px Roboto;
  color: #89898e;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px 0;
  > p {
    margin-top: 12px;
    font-size: 12px;
  }
  ${mediaQueries.lg} {
    flex-direction: row;
    > p {
      margin-left: 12px;
    }
  }
`;

const Logo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: none;
  ${mediaQueries.lg} {
    display: block;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <FContainer>
        <Data>
          <Links>
            <a>Smart Contract Audit Report</a>
            <a>LIGHTPAPER</a>
            <a>PRIVACY POLICY</a>
            <a>CONTACT US</a>
          </Links>
          <Copyright>
            <a>
              <img src="/images/logo-dark.svg" width="170px" alt="logo" />
            </a>
            <p style={{ margin: "20px 0 0 25px" }}>Copyright © 2021 Crypto Monster. All rights reserved.</p>
          </Copyright>
        </Data>
        <Logo>
          <img src="/images/unicorn.png" alt="footer" width="292px" />
        </Logo>
      </FContainer>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
