import { Box, Card, Container, Link, Paragraph } from "theme-ui";

import React from "react";
import styles from "../styles.module.css";

import { InfoMessage } from "../components/InfoMessage";
import { Icon } from "../components/Icon"

export const BProtocolPage: React.FC = () => (

    <Container >


    <Container>
    <br/>
    <Link href="#/"> &#8592; Back</Link>

      <Card>
        <Box sx={{ p: [2, 3] }}>
          <InfoMessage title="What is B.Protocol?">
            
            <Paragraph>
            In the B.Protocol V2, currently live over Liquity protocol, users are incentivized to deposit funds that will be used for the liquidation process in order to enjoy the full liquidation proceeds (e.g. becoming the keepers themselves). Users deposited funds are kept in a yield-bearing platform, and when liquidation is needed, their funds are used to execute the trade with 5-10% profit. Finally, a novel on-chain algorithm is used to rebalance the liquidation proceeds back to the originally deposited currency.
              

            </Paragraph>
            <br/>
            <Container>
            <Link href="https://docs.bprotocol.org/info/general#1.-what-is-b.protocol" target="_blank" style={{"margin":"15px"}}>
                Learn more <Icon name="external-link-alt" size="xs" />
            </Link>
            {/* <br/> */}
            <Link href="https://app.bprotocol.org/terms" target="_blank" style={{"margin":"15px"}}>
                Terms of Use <Icon name="external-link-alt" size="xs" />
            </Link> 
            </Container>
          </InfoMessage>
        </Box>
      </Card>
      

    </Container>
    <Card>

    <div  dangerouslySetInnerHTML={{ __html: "<iframe height='550px' width='100%' frameBorder='0' src='https://freely.finance/b-protocol?hideNav=true' onload='this.height=550;'/>"}}/>
    </Card>

    {/* <iframe title="b-protocol"
                        height="500px"
                        width="100%"
                        frameBorder="0" 
                      src={"https://freely.finance/b-protocol?hideNav=true/"}
                     
                        ></iframe> */}
  </Container>

);