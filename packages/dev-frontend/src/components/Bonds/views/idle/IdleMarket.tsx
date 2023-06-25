import React, { useState } from "react";

import { Card, Button, Box, Heading, Flex } from "theme-ui";
import { Icon } from "../../../Icon";
import { Abbreviation } from "../../../Abbreviation";
import { BondMarketList } from "./BondMarketList";
import { PagePayload } from "../../context/transitions";

import { useBondMarketView } from "../../context/BondMarketViewContext";

export const IdleMarket: React.FC = () => {


  let {
    dispatchEvent,
    totalSupply,
  } = useBondMarketView();

  // const [chain, setChain] = useState<number>();
  // console.log("dleMarket" + bonds)

  // if (!hasLoaded) return null;

  // const hasBonds = bonds !== undefined && bonds.length > 0;
  // const [loading, setLoading] = useState(true);

  // const [setReload] = useState({});
  // const forceReload = useCallback(() => setReload(), []);
  let pageSize = 10
  let supply = 0;
  if (totalSupply) {
    supply = Number(totalSupply.toString())
  }
  let numberOfbonds = supply
  const [page, setPage] = useState(0);
  const numberOfPages = Math.ceil(numberOfbonds / pageSize) || 1;
  const clampedPage = Math.min(page, numberOfPages - 1);


  const handleNextPagePressed = () => {

    if (clampedPage < numberOfPages - 1) {
      let page = clampedPage + 1
      setPage(page);
      dispatchEvent("SWITCH_PAGE_PRESSED", { pageStartingIndex: (page * pageSize) + 1 } as PagePayload);
    }
  }

  const handlePreviousPressed = () => {
    if (clampedPage > 0) {
      let page = clampedPage - 1

      setPage(page);
      dispatchEvent("SWITCH_PAGE_PRESSED", { pageStartingIndex: (page * pageSize) + 1 } as PagePayload);
    }
  }

  const handleReload = () => {
    //forceReload();
    dispatchEvent("SWITCH_PAGE_PRESSED", { pageStartingIndex: (page * pageSize) + 1 } as PagePayload);
  }







  return (
    <>
      <Card sx={{ width: "100%" }}>
        <Heading>
          <Abbreviation short="Bonds">Bonds</Abbreviation>

          <Flex sx={{ alignItems: "center" }}>
            {numberOfbonds !== 0 && (
              <>
                <Abbreviation
                  short={`page ${clampedPage + 1} / ${numberOfPages}`}
                  sx={{ mr: [0, 3], fontWeight: "body", fontSize: [1, 2], letterSpacing: [-1, 0] }}
                >
                  {clampedPage * pageSize + 1}-{Math.min((clampedPage + 1) * pageSize, numberOfbonds)}{" "}
                  of {numberOfbonds}
                </Abbreviation>

                <Button variant="titleIcon" onClick={handlePreviousPressed} disabled={clampedPage <= 0}>
                  <Icon name="chevron-left" size="lg" />
                </Button>

                <Button
                  variant="titleIcon"
                  onClick={handleNextPagePressed}
                  disabled={clampedPage >= numberOfPages - 1}
                >
                  <Icon name="chevron-right" size="lg" />
                </Button>


                <Button
                  variant="titleIcon"
                  onClick={handleReload}
                >
                  <Icon name="redo" size="lg" />
                </Button>
              </>
            )}

          </Flex>
        </Heading>
        <Box sx={{ p: [2, 3] }}>
          {<BondMarketList />}
        </Box>
      </Card>
    </>
  );
};
