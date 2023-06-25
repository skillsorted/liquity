import { Flex, Box } from "theme-ui";
import { Link } from "./Link";

export const Nav: React.FC = () => {
  return (
    <Box as="nav" sx={{ display: ["none", "flex"], alignItems: "center", flex: 1 }}>
      <Flex>
        <Link sx={{ fontSize: 1 }} to="/">Dashboard</Link>
        <Link sx={{ fontSize: 1 }} to="/bonds">Bonds</Link>
        <Link sx={{ fontSize: 1 }} to="/stats">Stats</Link>
        {/* <Link sx={{ fontSize: 1 }} to="/analysts">Analysts</Link> */}
        <Link sx={{ fontSize: 1 }} to="/buy">Buy/Swap</Link>

      </Flex>
      <Flex sx={{ justifyContent: "flex-end", mr: 1, flex: 4 }}>
        <Link sx={{ fontSize: 1 }} to="/risky-troves">
          Risky Troves
        </Link>

        {/* <Link sx={{ fontSize: 1 }}  to="/b-protocol">B-Protocol</Link> */}
        <Link sx={{ fontSize: 1 }} to="/faqs">
          FAQs
        </Link>

      </Flex>
    </Box>
  );
};
