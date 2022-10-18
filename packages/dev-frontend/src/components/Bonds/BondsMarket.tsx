import React from "react";
import { useBondMarketView } from "./context/BondMarketViewContext";
import { IdleMarket } from "./views/idle/IdleMarket";
import { InfoMessage } from "../InfoMessage";
import { Container } from "theme-ui";

export const BondsMarket: React.FC = () => {
  const { view, hasFoundContracts } = useBondMarketView();

  if (!hasFoundContracts) {
    return (
      <Container sx={{ position: "absolute", left: "30%", top: "40%" }}>
        <InfoMessage title="Unsupported network">
          LUSD Bonds don't seem to be deployed to this network.
        </InfoMessage>
      </Container>
    );
  }

  return (
    <>
      <IdleMarket />
    </>
  );
};
