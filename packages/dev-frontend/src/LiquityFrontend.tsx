import React from "react";
import { Flex, Container } from "theme-ui";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Wallet } from "@ethersproject/wallet";

import { Decimal, Difference, Trove } from "@liquity/lib-base";
import { LiquityStoreProvider } from "@liquity/lib-react";

import { useLiquity } from "./hooks/LiquityContext";
import { TransactionMonitor } from "./components/Transaction";
import { UserAccount } from "./components/UserAccount";
import { SystemStatsPopup } from "./components/SystemStatsPopup";
import { Header } from "./components/Header";

import { PageSwitcher } from "./pages/PageSwitcher";
import { Stats } from "./pages/Stats";
import { Analysts } from "./pages/Analysts";
import { BuySwap } from "./pages/BuySwap";
import { RiskyTrovesPage } from "./pages/RiskyTrovesPage";
import { Bonds } from "./pages/Bonds";
import { BondsMarket } from "./pages/BondsMarket";

import { TroveViewProvider } from "./components/Trove/context/TroveViewProvider";
import { StabilityViewProvider } from "./components/Stability/context/StabilityViewProvider";
import { StakingViewProvider } from "./components/Staking/context/StakingViewProvider";
import { FaqsPage } from "./pages/FaqsPage";
import { BProtocolPage } from "./pages/BProtocolPage";
import "tippy.js/dist/tippy.css"; // Tooltip default style
import { BondsProvider } from "./components/Bonds/context/BondsProvider";
import { BondsMarketProvider } from "./components/Bonds/context/BondsMarketProvider";


type LiquityFrontendProps = {
  loader?: React.ReactNode;
};
export const LiquityFrontend: React.FC<LiquityFrontendProps> = ({ loader }) => {
  const { account, provider, liquity } = useLiquity();

  // For console tinkering ;-)
  Object.assign(window, {
    account,
    provider,
    liquity,
    Trove,
    Decimal,
    Difference,
    Wallet
  });

  return (
    <LiquityStoreProvider {...{ loader }} store={liquity.store}>
      <Router>
        <TroveViewProvider>
          <StabilityViewProvider>
            <StakingViewProvider>
              <BondsProvider>
                <BondsMarketProvider>
                  <Flex sx={{ flexDirection: "column", minHeight: "100%" }}>
                    <Header>
                      <UserAccount />
                      <SystemStatsPopup />
                    </Header>

                    <Container
                      variant="main"
                      sx={{
                        display: "flex",
                        flexGrow: 1,
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                    >
                      <Switch>
                        <Route path="/" exact>
                          <PageSwitcher />
                        </Route>
                        <Route path="/bonds/explore">
                          <BondsMarket />
                        </Route>
                        <Route path="/bonds">
                          <Bonds />
                        </Route>
                        <Route path="/b-protocol">
                          <BProtocolPage />
                        </Route>
                        <Route path="/stats" >
                          <Stats />
                        </Route>
                        <Route path="/analysts" >
                          <Analysts />
                        </Route>
                        <Route path="/buy">
                          <BuySwap />
                        </Route>
                        <Route path="/risky-troves">
                          <RiskyTrovesPage />
                        </Route>
                        <Route path="/faqs">
                          <FaqsPage />
                        </Route>
                      </Switch>
                    </Container>
                  </Flex>
                </BondsMarketProvider>
              </BondsProvider>
            </StakingViewProvider>
          </StabilityViewProvider>
        </TroveViewProvider>
      </Router>
      <TransactionMonitor />
    </LiquityStoreProvider >
  );
};
