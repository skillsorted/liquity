import React from "react";
import { Link } from "theme-ui";
import { InfoMessage } from "../../../InfoMessage";
import { NOT_BONDED_YET } from "../../lexicon";

export const Empty: React.FC = () => {
  return <InfoMessage title={NOT_BONDED_YET.term}>{NOT_BONDED_YET.description}
    <br></br>
    <br></br>
    Learn more: <Link href={`https://liquity.gitbook.io/chicken-bonds/`} target="_blank">What is a bond?</Link>
  </InfoMessage>;

};
