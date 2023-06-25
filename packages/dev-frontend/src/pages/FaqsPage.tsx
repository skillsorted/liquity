import React from "react";
import { FreelyFaqs } from "../components/FreelyFaqs";
import styles from "../styles.module.css";



export const FaqsPage: React.FC = () => (
    <div className={styles.faqs}>
        <FreelyFaqs />
    </div>
);

