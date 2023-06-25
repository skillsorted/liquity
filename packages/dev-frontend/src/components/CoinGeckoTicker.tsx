import React from "react";
import { Card } from "theme-ui";

export const CoinGeckoTicker: React.FC = () => {

  return (
    <Card>
      <div dangerouslySetInnerHTML={{ __html: "<coingecko-coin-price-static-headline-widget  coin-ids='liquity,liquity-usd' currency='usd' locale='en' ></coingecko-coin-price-static-headline-widget>" }} />
    </Card>
  );
};
