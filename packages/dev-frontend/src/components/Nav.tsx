import { Flex, Box } from "theme-ui";
import { Link } from "./Link";

export const Nav: React.FC = () => {
  return (
    <Box as="nav" sx={{ display: ["none", "flex"], alignItems: "center", flex: 1 }}>
      <Flex>
        <Link to="/">Dashboard</Link>
        {/* <Link to="/farm" >Farm</Link> */}
        <Link to="/stats">Stats</Link>
        <Link to="/analysts">Analysts View</Link>
        <Link to="/buy">Buy/Swap</Link>
      </Flex>
      <Flex sx={{ justifyContent: "flex-end", mr: 3, flex: 1 }}>
        <Link sx={{ fontSize: 1 }} to="/risky-troves">
          Risky Troves
        </Link>
        <Link sx={{ fontSize: 1 }} to="/redemption">
          Redemption
        </Link>
        <Link sx={{ fontSize: 1 }} to="/faqs">
        FAQs
        </Link>
      </Flex>
    </Box>
  );
};
