import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import mediaQueries from "../configs/mediaQueries";

const Wrapper = styled.div`
  position: fixed;
  width: 17vw;
  height: 100%;
  z-index: 99;
  padding: 25px 25px 25px 0;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  display: none;
  ${mediaQueries.lg} {
    display: flex;
    padding-left: 50px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(22 113 5);
  margin: 50px auto 0;
  font-size: 20px;
  line-height: 16px;
  > a {
    padding: 20px 0;
    cursor: pointer;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

function SideNav() {
  const router = useRouter();
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }, []);

  const goToHomePage = () => {
    router.push("/");
  };

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
    <Wrapper>
      <div>
        <img onClick={goToHomePage} src="/images/logo-light.svg" alt="logo" width="160px"></img>
        <Links>
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
        </Links>
      </div>
      <SocialLinks>
        <a>
          <img src="/images/icon-telegram.png" width="68px" />
        </a>
        <a>
          <img src="/images/icon-twitter.png" width="68px" />
        </a>
        {/* <a>
          <img src="/images/icon-fb.png" width="68px" />
        </a> */}
      </SocialLinks>
    </Wrapper>
  );
}

SideNav.propTypes = {};

export default SideNav;
