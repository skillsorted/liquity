import { Container, Link } from "theme-ui";
import { BondsMarket as BondsMarketPanel } from "../components/Bonds/BondsMarket";
import { useBondMarketView } from "../components/Bonds/context/BondMarketViewContext";
import type {
  BondTransaction,
    TransactionStatus as TransactionStatusType
} from "../components/Bonds/context/transitions";
import { TransactionStatus } from "../components/TransactionStatus";
import type { TransactionStateType } from "../components/TransactionStatus";

type BondTransactionStatusToTransactionStateMap = Record<
  TransactionStatusType,
  TransactionStateType
>;
const statusMap: BondTransactionStatusToTransactionStateMap = {
  IDLE: "idle",
  PENDING: "waitingForConfirmation",
  FAILED: "failed",
  CONFIRMED: "confirmed"
};

export const BondsMarket: React.FC = () => {


  return (
    <>
      <Container variant="columns" sx={{ justifyContent: "flex-start" }}>

        <Container variant="" sx={{ width: ["100%", "70%"] }}>
          <br />
          <Link href="#/bonds/all"> &#8592; Back</Link>
          <BondsMarketPanel />
        </Container>
      </Container>
    </>
  );
};
