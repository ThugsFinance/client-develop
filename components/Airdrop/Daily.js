import React, { useState, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import { useWalletModal } from "widgets/WalletModal";
import useAuth from "hooks/useAuth";
import DailyBonusAbi from "config/abi/DailyBonusAbi.json";
import { useCustomContract } from "hooks/useContract";
import useToast from "hooks/useToast";
import { get, tokenKey } from "services/http";

import { Button } from "../Button";
import { Flex } from "../Box";
import { Input } from "../Input";

const Item = styled.div`
  margin: 6px;
  width: 300px;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-image: url(/images/bg-m-paper-long.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const ItemName = styled.h4`
  font-size: 30px;
  text-align: center;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 30px;
`;

const StyledInput = styled(Input)`
  border: 1px solid #a4867c;
  color: #4c1723;
  border-radius: 2px;
  box-shadow: none;
  &:focus {
    bos-shadow: unset;
  }
`;

const HelperText = styled.a`
  text-decoration: underline;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 10px;
  cursor: pointer;
`;

const StyledForm = styled(Flex)``;

const SHOW_FORM_SUBMIT_TWEETID = "isShowFormSubmitTweetId";

function Airdrop(props) {
  const timeLeftElm = useRef(null);
  const router = useRouter();
  const { login, logout } = useAuth();
  const { account } = useWeb3React();
  const { toastSuccess, toastError } = useToast();
  const DailyBonusContract = useCustomContract(DailyBonusAbi, "0x430560ef7a552891a6146626a08696377f8d4df4");
  const { onPresentConnectModal } = useWalletModal(login, logout, account);

  const [isClient, setIsClient] = useState(false);
  const [tick, forceUpdate] = useState(0);
  const [isShowFormSubmitTweetId, setIsShowFormSubmitTweetId] = useState(false);
  const [tweetId, setTweetId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const showFormSubmitTweetId = window.localStorage.getItem(SHOW_FORM_SUBMIT_TWEETID);
    setIsShowFormSubmitTweetId(showFormSubmitTweetId);
  }, []);

  const allowClaim = useMemo(() => {
    if (isClient) {
      const now = new Date().getTime();
      const lastReceivedTime = window.localStorage.getItem(`${account}-lastReceivedTime`) || "0";
      const nextTimeAllowedReceive = parseInt(lastReceivedTime) + 86400000;
      return now > nextTimeAllowedReceive;
    }
    return false;
  }, [isClient, account, tick]);

  useEffect(() => {
    let interval;
    if (!allowClaim && isClient) {
      const now = new Date().getTime();
      const lastReceivedTime = window.localStorage.getItem(`${account}-lastReceivedTime`) || "0";
      const nextTimeAllowedReceive = parseInt(lastReceivedTime) + 86400000;
      const timeLeft = nextTimeAllowedReceive - now;
      setInterval(() => {
        if (timeLeftElm.current) {
          timeLeftElm.current.timeLeft = (timeLeftElm.current.timeLeft || timeLeft) - 1000;

          const hour = Math.floor(timeLeftElm.current.timeLeft / 3600000);
          const minute = Math.floor((timeLeftElm.current.timeLeft % 3600000) / 60000)
            .toString()
            .padStart(2, "0");
          const second = Math.floor(((timeLeftElm.current.timeLeft % 3600000) % 60000) / 1000)
            .toString()
            .padStart(2, "0");

          timeLeftElm.current.innerText = `(${hour ? hour.toString().padStart(2, "0") : ""}:${minute ? minute.toString().padStart(2, "0") : ""}:${
            second ? second.toString().padStart(2, "0") : ""
          })`;
        }
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [allowClaim, isClient]);

  // const onClaim = async () => {
  // if (!account) {
  //   onPresentConnectModal();
  // } else {
  //   if (!allowClaim) {
  //     return;
  //   }
  //   window.open(loginInfo.redirectUrl, "_blank").focus();

  // const isAvailableClaim = await DailyBonusContract.isAvailableClaim(account);
  // if (isAvailableClaim) {
  //   const TIMES_RECEIVED_KEY = `${account}-daily-bonus`;
  //   const timesReceived = parseInt(window.localStorage.getItem(TIMES_RECEIVED_KEY) || 0);

  //   if (timesReceived < 10) {
  //     const response = await DailyBonusContract.claim();

  //     const now = new Date().getTime();

  //     window.localStorage.setItem(`${account}-lastReceivedTime`, now.toString());
  //     window.localStorage.setItem(TIMES_RECEIVED_KEY, timesReceived + 1);

  //     forceUpdate(tick + 1);
  //     toastSuccess("Claim success");
  //   } else {
  //     toastError("Limit has been reached");
  //   }
  // }
  //   }
  // };

  const handleTweet = () => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      window
        .open("https://twitter.com/intent/tweet?screen_name=lamtanphiho&hashtags=BSC%20%23NFT%20%23Play2Earn%0Ahttps%3A%2F%2Fcowswap.app", "_blank")
        .focus();
      setIsShowFormSubmitTweetId(true);
    } else {
      get({ path: "/user/login" })
        .then((rs) => {
          localStorage.setItem("p", rs.oauthTokenSecret);
          window.location.href = rs.redirectUrl;
        })
        .catch(async (err) => {
          console.log(err);
          toastError(err.message);
        });
    }
  };

  const authHandler = async () => {
    try {
      const parsed = queryString.parse(window.location.search);
      const oauthTokenSecret = localStorage.getItem("p");

      const query = {
        address: account,
        oauth_token: parsed.oauth_token,
        oauthTokenSecret,
        oauth_verifier: parsed.oauth_verifier
      };

      const response = await get({ path: "/user/tokenAccess", body: query });
      window.localStorage.setItem(tokenKey, response.token);
      window.localStorage.setItem(SHOW_FORM_SUBMIT_TWEETID, true);
      window.location.href =
        "https://twitter.com/intent/tweet?screen_name=lamtanphiho&hashtags=BSC%20%23NFT%20%23Play2Earn%0Ahttps%3A%2F%2Fcowswap.app";
    } catch (error) {
      console.log(error);
      toastError(error.data?.message || error.message);
    }
    router.replace(router.pathname, undefined, { shallow: true });

    // get({ path: "/user/tokenAccess", body: query })
    //   .then((data) => {
    //     window.localStorage.setItem(tokenKey, data.token);
    //     // console.log(data);
    //   })
    //   .catch(async (err) => {
    //     console.log(err);
    //     toastError(err.message);
    //   });
  };

  useEffect(() => {
    if (window.location.search.includes("oauth_token") && window.location.search.includes("oauth_verifier") && account) {
      authHandler();
    }
  }, [account]);

  const toggleShowFormSubmitTweetId = () => {
    setIsShowFormSubmitTweetId(!isShowFormSubmitTweetId);
  };

  // const handleSubmitTweetId = (event) => {
  //   event.preventDefault();
  //   get({ path: `/user/sign2claim-daily/twitter/${tweetId}` })
  //     .then((data) => {
  //       // console.log(data);

  //     })
  //     .catch(async (err) => {
  //       console.log(err);
  //       toastError(err.message);
  //     });
  // };

  const handleSubmitTweetId = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await get({ path: `/user/sign2claim-daily/twitter/${tweetId}` });
      const isAvailableClaim = await DailyBonusContract.isAvailableClaim(account);
      if (isAvailableClaim) {
        const TIMES_RECEIVED_KEY = `${account}-daily-bonus`;
        const timesReceived = parseInt(window.localStorage.getItem(TIMES_RECEIVED_KEY) || 0);

        if (timesReceived < 10) {
          await DailyBonusContract.claim(response.twid, response.sign.v, response.sign.r, response.sign.s);

          const now = new Date().getTime();

          window.localStorage.setItem(`${account}-lastReceivedTime`, now.toString());
          window.localStorage.setItem(TIMES_RECEIVED_KEY, timesReceived + 1);

          forceUpdate(tick + 1);
          toastSuccess("Claim success");
          setIsShowFormSubmitTweetId(false);
        } else {
          toastError("Limit has been reached");
        }
      }
    } catch (error) {
      console.log(error);
      toastError(error.data?.message || error.message);
    }
    setIsLoading(false);
    window.localStorage.removeItem(SHOW_FORM_SUBMIT_TWEETID);
  };

  return (
    <Item>
      <ItemName>Daily Bonus</ItemName>
      <ItemContent>
        <p>- Every day you will receive 1 PMON</p>
        <p>- Each wallet is received 10 times</p>
        {!account ? (
          <Button width="180px" ml="auto" mr="auto" mt="auto" mb="30px" onClick={onPresentConnectModal}>
            Connect wallet
          </Button>
        ) : (
          <>
            {isShowFormSubmitTweetId ? (
              <StyledForm mt="auto" onSubmit={handleSubmitTweetId}>
                <StyledInput placeholder="Enter tweet id" value={tweetId} onChange={(event) => setTweetId(event.target.value)} />
                <Button height="40px" ml="10px" width="75px" type="submit" onClick={handleSubmitTweetId} isLoading={isLoading}>
                  Submit
                </Button>
              </StyledForm>
            ) : (
              <>
                {!allowClaim ? (
                  <Button width="180px" ml="auto" mr="auto" mt="auto" mb="30px" disabled>
                    Get now <span ref={timeLeftElm}></span>
                  </Button>
                ) : (
                  <>
                    <Button width="180px" ml="auto" mr="auto" mt="auto" onClick={handleTweet}>
                      Tweet and claim
                    </Button>
                  </>
                )}
              </>
            )}
            {allowClaim && <HelperText onClick={toggleShowFormSubmitTweetId}>{isShowFormSubmitTweetId ? "Tweet" : "Submit tweet id"}</HelperText>}
          </>
        )}

        {/* <Button width="180px" ml="auto" mr="auto" mt="auto" onClick={onClaim} disabled={!allowClaim}>
          {allowClaim ? (
            "Claim"
          ) : (
            <>
              Get now <span ref={timeLeftElm}></span>
            </>
          )}
        </Button> */}
        {/* <Flex mt="auto"> */}

        {/* </Flex> */}
      </ItemContent>
    </Item>
  );
}

Airdrop.propTypes = {};

export default Airdrop;
