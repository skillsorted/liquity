import { Container } from "theme-ui";

import React from "react";
import styles from "../styles.module.css";



export const Stats: React.FC = () => (
    <div className={styles.stats} dangerouslySetInnerHTML={{ __html: "<iframe src='https://duneanalytics.com/freelyfinance/LiquityStats' frameborder='0' onload='this.width=screen.width;this.height=screen.height;'/>"}}/>
);

