import React, { useState } from "react";
import styled from "styled-components";

import mediaQueries from "../../configs/mediaQueries";
import Container from "../Container";
import Button from "../OldButton";

const Wrapper = styled.div`
  background-image: url(/images/bg-hero.jpg);
  width: 100%;
  min-height: 80vh;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: min(135px, 20vh);
`;

const SContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 60px;
  padding-bottom: 60px;
  ${mediaQueries.xl} {
    // padding-left: 200px;
    padding-top: 150px;
    padding-bottom: 60px;
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  max-width: 550px;
  width: 100%;
  ${mediaQueries.xl} {
    margin-right: 50px;
  }
`;

const RightSide = styled.div`
  background-image: url(/images/bg-wooden-board.png);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-size: 100% 100%;
  max-width: 450px;
  min-height: 550px;
  padding: 70px 60px 80px;
`;

const Arrow = styled.img`
  width: 55px;
  background-color: hsla(0, 0%, 100%, 0.5019607843137255);
  height: 100%;
  border-radius: 100%;
  cursor: pointer;
  ${mediaQueries.xl} {
    width: 60px;
  }
`;

const ChestImage = styled.img`
  width: 100%;
  max-width: 350px;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Item = styled.label<{
  active?: boolean;
}>`
  background-color: ${(props) => (props.active ? "#1f8c0a;" : "unset")};
  border-color: #2330d0;
  color: ${(props) => (props.active ? "#fff" : "#1f8c0a;")};
  height: 48px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 4px;
  &:hover {
    border: 2px solid #1f8c0a;
    cursor: pointer;
  }
`;

const chests = {
  white: {
    key: "white",
    title: "White",
    description: "A Crazy Defense Heroes Gold Chest contains 3 TOWER Game Card NFT’s ranging in rarity from Common to Legendary.",
    image: "/images/White.png"
  },
  blue: {
    key: "blue",
    title: "Blue",
    description: "A Crazy Defense Heroes Silver Chest contains 3 TOWER Game Card NFT’s ranging in rarity from Common to Legendary",
    image: "/images/blue.png"
  },
  violet: {
    key: "violet",
    title: "Violet",
    description: "A Crazy Defense Heroes Bronze Chest contains 3 TOWER Game Card NFT’s ranging in rarity from Common to Epic.",
    image: "/images/violet.png"
  },
  black: {
    key: "black",
    title: "Black",
    description: "A Crazy Defense Heroes Bronze Chest contains 3 TOWER Game Card NFT’s ranging in rarity from Common to Epic.",
    image: "/images/Black.png"
  }
};

function SectionTwo() {
  const [chestSelected, setChestSelected] = useState(chests.white);
  const next = () => {
    switch (chestSelected.key) {
      case "white":
        setChestSelected(chests.blue);
        break;
      case "blue":
        setChestSelected(chests.violet);
        break;
      case "violet":
        setChestSelected(chests.black);
        break;
      case "black":
        setChestSelected(chests.white);
        break;

      default:
        break;
    }
  };
  const prev = () => {
    switch (chestSelected.key) {
      case "white":
        setChestSelected(chests.black);
        break;
      case "blue":
        setChestSelected(chests.white);
        break;
      case "violet":
        setChestSelected(chests.blue);
        break;
      case "black":
        setChestSelected(chests.violet);
        break;

      default:
        break;
    }
  };
  return (
    <Wrapper id="section-two">
      <SContainer>
        <LeftSide>
          <Arrow src="/images/icon-left.svg" alt="prev" onClick={prev} />
          <div style={{ padding: "0 20px" }}>
            <ChestImage src={chestSelected.image} alt="chest" />
          </div>
          <Arrow src="/images/icon-right.svg" alt="next" onClick={next} />
        </LeftSide>
        <RightSide>
          <div>
            <ButtonGroup>
              {Object.keys(chests).map((chestName) => {
                const chest = (chests as any)[chestName];
                return (
                  <Item key={chest.key} active={chestName === chestSelected.key} onClick={() => setChestSelected(chest)}>
                    {chest.title}
                  </Item>
                );
              })}
            </ButtonGroup>
            <h2>{chestSelected.title}</h2>
            <p>{chestSelected.description}</p>
          </div>
          <Button onClick={() => alert("Coming soon")}>CONNECT METAMASK</Button>
        </RightSide>
      </SContainer>
    </Wrapper>
  );
}

SectionTwo.propTypes = {};

export default SectionTwo;
