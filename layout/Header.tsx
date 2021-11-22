import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { useWeb3React } from "@web3-react/core";
import ConnectWalletButton from "components/ConnectWalletButton";
import { useWalletModal } from "widgets/WalletModal";
import useAuth from "hooks/useAuth";

import { Button } from "../components/Button";

import mediaQueries from "../configs/mediaQueries";

const Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 9;
  height: 0;
  ${mediaQueries.lg} {
    background: transparent;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #fff;
  width: 100%;
  top: 0;
  z-index: 2;
  padding: 8px 16px;
  ${mediaQueries.lg} {
    flex-flow: row nowrap;
    justify-content: end;
    background: transparent;
  }
`;

const ButtonMenu = styled.button`
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  ${mediaQueries.lg} {
    display: none;
  }
`;

const Logo = styled.span`
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  ${mediaQueries.lg} {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  > a {
    padding: 10px 0;
    cursor: pointer;
  }
`;

const Wallet = styled.div`
  display: none;
  ${mediaQueries.lg} {
    padding-top: 25px;
    display: flex;
    margin-left: auto;
  }
`;

const Balance = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 30px rgb(0 0 0 / 5%);
  border-radius: 40px;
  padding: 6px 10px;
  margin-right: 20px;
  width: 45%;
  > img {
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
  > p {
    margin: 0;
    font-size: 20px;
  }
  ${mediaQueries.lg} {
    width: 180px;
  }
`;

const ButtonInfo = styled(Button)`
  width: 45%;
  ${mediaQueries.lg} {
    width: 180px;
    margin-right: 100px;
  }
`;

const ButtonConnectWallet = styled(ConnectWalletButton)`
  width: 45%;
  ${mediaQueries.lg} {
    width: 180px;
    margin-right: 100px;
  }
`;

function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const { login, logout } = useAuth();
  const { account } = useWeb3React();
  const { onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  const scrollToSectionOne = () => {
    router.push("/#section-one");
  };
  const scrollToSectionTwo = () => {
    router.push("/#section-two");
  };
  const scrollToSectionThree = () => {
    router.push("/#section-three");
  };
  const scrollToSectionFour = () => {
    router.push("/#section-four");
  };

  return (
    <Sticky>
      <Navbar>
        <ButtonMenu onClick={() => setOpenMenu(!openMenu)}>
          <img src="/images/menu.svg" alt="menu"></img>
        </ButtonMenu>
        <Link href="/">
          <Logo>
            <img src="/images/logo.png" alt="logo" width="44px"></img>
          </Logo>
        </Link>
        {openMenu && (
          <Menu>
            <a onClick={scrollToSectionOne}>View MONSTERS</a>
            <a onClick={scrollToSectionTwo}>Chest Sale</a>
            <a onClick={scrollToSectionThree}>Get MONSTERS</a>
            <a onClick={scrollToSectionFour}>Maket Place</a>
            <Link href="/airdrop">
              <a>Airdrop</a>
            </Link>
            <Link href="/tokenomics">
              <a>Tokenomics</a>
            </Link>
            <div style={{ display: "flex", marginTop: "10px", justifyContent: "space-between" }}>
              <Balance>
                <img src="/images/logo.png" width="30px" alt="logo"></img>
                <p>0</p>
              </Balance>
              {account ? (
                <ButtonInfo
                  variant="primary"
                  onClick={() => {
                    onPresentAccountModal();
                  }}
                  width="170px"
                  height="42px"
                  style={{ borderRadius: "30px" }}
                >
                  {accountEllipsis}
                </ButtonInfo>
              ) : (
                <ButtonConnectWallet height="42px" style={{ borderRadius: "30px" }} />
              )}
              {/* <Connect>Connect</Connect> */}
            </div>
          </Menu>
        )}
        <Wallet>
          <Balance>
            <img src="/images/logo.png" width="30px" alt="logo"></img>
            <p>0</p>
          </Balance>
          {account ? (
            <ButtonInfo
              variant="primary"
              onClick={() => {
                onPresentAccountModal();
              }}
              width="170px"
              height="42px"
              style={{ borderRadius: "30px" }}
            >
              {accountEllipsis}
            </ButtonInfo>
          ) : (
            <ButtonConnectWallet height="42px" style={{ borderRadius: "30px" }} />
          )}
          {/* <Connect onClick={() => alert("Coming soon")}>Connect</Connect> */}
        </Wallet>
      </Navbar>
    </Sticky>
  );
}

Header.propTypes = {};

export default Header;
