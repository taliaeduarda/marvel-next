import React from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import CardHero from "../Card";

import styles from "./styles";

const useStyles = makeStyles(styles);

export default function Section({ list }) {
  const classes = useStyles();

  return (
    <div className={classes.section}>













      <h2 className={classes.title}>Characters List</h2>
      <div>
        <GridContainer>
          {list.map((l) => {
            const {
              id,
              name,
              thumbnail: { path, extension },
            } = l;
            return (
              <Link href={`/hero/${id}`} key={id}>
                <GridItem xs={6} sm={6} md={4}>
                  <CardHero
                    plain
                    name={name}
                    path={path}
                    extension={extension}
                  />
                </GridItem>
              </Link>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
