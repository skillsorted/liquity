import { Card, Container, Box , Link,Heading } from "theme-ui";

import React from "react";
import styles from "../styles.module.css";
import WidgetBot from '@widgetbot/react-embed'



export const Analysts: React.FC = () => (
    <div className={styles.analyst}> 
    
    <Card>
    <Heading>Views from Analysts</Heading>    
    
    <ul>
    <li>Freely.Finance do not provide personal investment advice.</li>
    <li>Any information or data published by analysts reflects their own views, ideas and opinions. </li>
    <li>Any information published by independent analysts, including any ideas, opinions, views, predictions, forecasts, commentaries, suggestions, or picks, expressed or implied herein, are for informational, entertainment or educational purposes only and should not be construed as personal investment advice. While the information provided is believed to be accurate, it may include errors or inaccuracies.</li>
    <li>Freely.Finance or any analyst will not and cannot be held liable for any actions you take as a result of anything you read in here or in the discord channel.</li>
    <li>Conduct your own due diligence </li>
    </ul>
    
    <Link href={`https://discord.gg/PrjhsnnT46`} target="_blank" > For full analysts view click here to Join Freely Discord Server </Link>
    
    
    <div  dangerouslySetInnerHTML={{ __html: "<iframe src='https://emerald.widgetbot.io/channels/829018895540551690/840663847983513692/' frameborder='0' onload='this.width=screen.width;this.height=600;' />"}}/>
    

    </Card>
    </div>

);