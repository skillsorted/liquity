import styles from "../styles.module.css";
import { Box, Card, Container, Paragraph, Heading, Link } from "theme-ui";

export const BuySwap: React.FC = () => (
  <Container variant="columns" sx={{ justifyContent: "flex-start" }}>


    <Container variant="right">
      <Card>
        <Heading>
          Swap via All-in-One Cross chain Swap Aggregator
        </Heading>
        <Box sx={{ p: [2, 0.5] }}>
          {/* <div className={styles.inchswap} dangerouslySetInnerHTML={{ __html: "<iframe src='https://whichswap.com' height='700px'  scrolling='no' width='100%' style='border: 0; margin: 0 auto; display: block; max-width: 660px; min-width: 300px;' id='freely.finance'/>" }} /> */}
          <br />
          <Link href={`https://whichswap.com`} target="_blank">WhichSwap.com</Link>
        </Box>
        <br />

      </Card>
    </Container >

    <Container variant="right">
      <Card>
        <Heading>
          Buy or Swap via Changelly.com
        </Heading>
        <Box sx={{ p: [2, 0.5] }}>
          <div className={styles.changelly} dangerouslySetInnerHTML={{ __html: "<iframe width='100%' height='100%' frameborder='0' src='https://widget.changelly.com?from=*&to=*&amount=2000&address=&fromDefault=usd&toDefault=eth&theme=default&merchant_id=YVDq7wEQx4e5K9ok&payment_id=&v=3   style='border: 0; margin: 0 auto; display: block; ' >Can't load widget</iframe>" }} />

        </Box>
        <Paragraph >
          Disclosure: As an affiliate freely.finance gets revenue share from changelly.com, which gets added to the development cost.
        </Paragraph>

      </Card>
    </Container>



    {/* <Container variant="right">
      <SystemStats />
    </Container> */}
  </Container >
);
