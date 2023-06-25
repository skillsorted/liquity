import React from "react";
import { Bond as BondType } from "../../context/transitions";

import { useBondMarketView } from "../../context/BondMarketViewContext";
import { BondMarket } from "./BondMarket";

export const BondMarketList: React.FC = () => {

  const { bonds } = useBondMarketView();
  console.log("BondMarketList------" + bonds);

  return (
    <>
      {bonds && bonds.map((bond: BondType, idx: number) => {
        const isFirst = idx === 0;
        const style = { mt: isFirst ? "16px" : "32px" };
        return <BondMarket bond={bond} key={idx} style={style} />;

      })}
    </>
  );
};
