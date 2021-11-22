import React, { ReactNode } from "react";
import styled from "styled-components";

import Header from "./Header";
import SideNav from "./SideNav";
import Footer from "./Footer";

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

interface LaypoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: LaypoutProps) {
  return (
    <>
      <Header />
      <SideNav />
      <PageContent>{children}</PageContent>
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
