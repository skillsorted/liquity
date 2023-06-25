import { Container, Link } from "theme-ui";
import { BondsMarket as BondsMarketPanel } from "../components/Bonds/BondsMarket";

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
