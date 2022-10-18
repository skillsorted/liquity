import { createContext, useContext } from "react";
import type {
  BondView,
    Bond,
    BondEvent,
    Payload,
} from "./transitions";
import { PENDING_STATUS, CANCELLED_STATUS, CLAIMED_STATUS } from "../lexicon";
import { Decimal } from "@liquity/lib-base";

export type BondMarketViewContextType = {
  view: BondView;
  bonds?: Bond[];
  hasFoundContracts: boolean;
  dispatchEvent: (event: BondEvent, payload?: Payload) => void;
  totalSupply?: Decimal;
};

export const BondMarketViewContext = createContext<BondMarketViewContextType | null>(null);

export const useBondMarketView = (): BondMarketViewContextType => {
  const context: BondMarketViewContextType | null = useContext(BondMarketViewContext);
  if (context === null) {
    throw new Error("You must add a <BondMarketViewProvider> into the React tree");
  }

  return context;
};

export const statuses = {
  PENDING: PENDING_STATUS.term,
  CANCELLED: CANCELLED_STATUS.term,
  CLAIMED: CLAIMED_STATUS.term,
  NON_EXISTENT: "NON_EXISTENT"
};
