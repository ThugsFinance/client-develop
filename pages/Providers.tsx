import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { getLibrary } from "utils/web3React";
import { ThemeContextProvider } from "contexts/ThemeContext";
import { LanguageProvider } from "contexts/Localization";
import { RefreshContextProvider } from "contexts/RefreshContext";
import ModalProvider from "widgets/Modal/ModalContext";
import { ToastsProvider } from "contexts/ToastsContext";
import store from "state";
import Authenticate from "./Authenticate";

import Layout from "../layout";

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastsProvider>
          <ThemeContextProvider>
            <LanguageProvider>
              <RefreshContextProvider>
                <ModalProvider>
                  <Authenticate>
                    <Layout>{children}</Layout>
                  </Authenticate>
                </ModalProvider>
              </RefreshContextProvider>
            </LanguageProvider>
          </ThemeContextProvider>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
