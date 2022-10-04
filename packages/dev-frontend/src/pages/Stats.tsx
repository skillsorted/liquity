import { Card, Heading, Box, Container, Link } from "theme-ui";

import React from "react";
import styles from "../styles.module.css";



export const Stats: React.FC = () => (
    // <div className={styles.stats} dangerouslySetInnerHTML={{ __html: "<iframe src='https://duneanalytics.com/freelyfinance/LiquityStats' frameborder='0' onload='this.width=screen.width;this.height=screen.height;'/>"}}/>
    <Container variant="right">
        <Card>
            <Heading>
                Liquity Stats Dashboards
            </Heading>
            <Box sx={{ p: [12, 20] }}>
                <Link href={`https://dune.com/freelyfinance/LiquityStats`} target="_blank">Liquity Protocol Stats from @freelyfinance</Link>
                <br></br>
                <br></br>
                <Link href={`https://dune.com/dani/Liquity`} target="_blank">Liquity Protocol Stats from @dani</Link>
                <br></br>
                <br></br>
                <Link href={`https://dune.com/zanzai/LQTY`} target="_blank">LQTY-LUSD Staking APRs from @zanzai</Link>
            </Box>
        </Card>
    </Container >


);

