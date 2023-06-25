import React, { useState, useCallback, useEffect, useRef } from "react";
import { BondMarketViewContext } from "./BondMarketViewContext";

import type {
  BondView,
    Bond,
    BondEvent,
    Payload,
    PagePayload
} from "./transitions";

import { Decimal } from "@liquity/lib-base";
import { api, _getProtocolInfo } from "./api";
import { useBondContracts } from "./useBondContracts";

// Refresh backend values every 30 seconds
const SYNCHRONIZE_INTERVAL_MS = 30 * 1000;

export const EXAMPLE_NFT = "./bonds/egg-nft.png";

export const BondMarketViewProvider: React.FC = props => {
  const { children } = props;
  const [view] = useState<BondView>("IDLE");
  const viewRef = useRef<BondView>(view);

  const [totalSupply, setTotalSupply] = useState<Decimal>();
  const [shouldSynchronize, setShouldSynchronize] = useState<boolean>(true);
  const [bonds, setBonds] = useState<Bond[]>();
  const [isSynchronizing, setIsSynchronizing] = useState(true);
  const contracts = useBondContracts();


  useEffect(() => {
    if (isSynchronizing) return;
    const timer = setTimeout(() => setShouldSynchronize(true), SYNCHRONIZE_INTERVAL_MS);

    return () => {
      clearTimeout(timer);
    };
  }, [isSynchronizing]);

  useEffect(() => {
    (async () => {
      try {
        if (
          contracts.lusdToken === undefined ||
          contracts.bondNft === undefined ||
          contracts.chickenBondManager === undefined ||
          contracts.bLusdToken === undefined ||
          contracts.bLusdAmm === undefined ||
          !shouldSynchronize
        ) {
          return;
        }

        setShouldSynchronize(false);
        setIsSynchronizing(true);
        const latest = await contracts.getBondsById(1, 10, api);
        if (latest === undefined) {
          setIsSynchronizing(false);
          return;
        }

        const {
          bondsById,
          totalSupply
        } = latest;


        setBonds(bondsById);
        setTotalSupply(totalSupply)
      } catch (error: unknown) {
        console.error("Caught exception", error);
      }
    })();
  }, [shouldSynchronize, contracts,]);


  const dispatchEvent = useCallback(
    async (event: BondEvent, payload?: Payload) => {

      console.log("New Bonds event", event)
      try {
        if (
          contracts.lusdToken === undefined ||
          contracts.bondNft === undefined ||
          contracts.chickenBondManager === undefined ||
          contracts.bLusdToken === undefined ||
          contracts.bLusdAmm === undefined
        ) {
          console.log("New Bonds event", contracts.lusdToken, contracts.bondNft, contracts.chickenBondManager, contracts.bLusdToken, contracts.bLusdAmm
          )
          return;
        }


        let index = 1
        if (payload) {
          const { pageStartingIndex } = payload as PagePayload;
          index = pageStartingIndex
        }
        const latest = await contracts.getBondsById(index, index + 9, api);
        if (latest === undefined) {
          return;
        }

        const {
          bondsById,
          totalSupply,
        } = latest;

        setBonds(bondsById);
        setTotalSupply(totalSupply);

      } catch (error: unknown) {
        console.error("dispatchEvent(), event handler failed\n\n", error);
      }
    },
    [shouldSynchronize, contracts,]
  );

  useEffect(() => {
    viewRef.current = view;
  }, [view]);


  const provider = {
    view,
    bonds,
    hasFoundContracts: contracts.hasFoundContracts,
    dispatchEvent,
    totalSupply
  };

  // @ts-ignore
  window.__LIQUITY_BONDS__ = provider.current;
  console.log("BondMarketViewProvider:bonds" + provider.bonds)
  return <BondMarketViewContext.Provider value={provider}>{children}</BondMarketViewContext.Provider>;
};
