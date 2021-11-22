import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
// import { useCustomContract } from "hooks/useContract";
import mediaQueries from "../configs/mediaQueries";

import Daily from "../components/Airdrop/Daily";
// import DailyBonusAbi from "config/abi/DailyBonusAbi.json";

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

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px 100px 20px;
  ${mediaQueries.lg} {
    padding: 50px 0 100px 0;
  }
`;

function Airdrop(props) {
  const { account } = useWeb3React();
  // const DailyBonusContract = useCustomContract(DailyBonusAbi, "0xcd83756b486563a75446f87dcf8442f065ECd3E6");
  // useEffect(() => {
  //   DailyBonusContract.SECOND_PER_DAY()
  //     .then((rs) => {
  //       console.log("test get contract info", rs.toNumber());
  //     })
  //     .catch(console.log);
  // }, []);

  return (
    <SContainer>
      <Header>
        <h3>Airdrop</h3>
      </Header>
      <Items>
        <Daily />
      </Items>
    </SContainer>
  );
}

Airdrop.propTypes = {};

export default Airdrop;
