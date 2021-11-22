import styled from "styled-components";

import mediaQueries from "../../configs/mediaQueries";

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${mediaQueries.sm} {
    max-width: 540px;
  }
  ${mediaQueries.md} {
    max-width: 720px;
  }
  ${mediaQueries.lg} {
    max-width: 960px;
  }
  ${mediaQueries.xl} {
    max-width: 1140px;
  }
`;

export default Container;
