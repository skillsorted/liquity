import { BondMarketViewProvider } from "./BondMarketViewProvider";

export const BondsMarketProvider: React.FC = ({ children }) => {
  return (
    <BondMarketViewProvider>{children}</BondMarketViewProvider>
  );
};
