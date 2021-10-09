import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import CardHero from "../Card";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";

const useStyles = makeStyles(styles);

export default function Section({ list }) {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.title}>Characters List</h2>
      <div>
        <Grid container>
          {list.map((l) => {
            const {
              id,
              name,
              thumbnail: { path, extension },
            } = l;
            return (
              <Link href={`/hero/${id}`} key={id}>
                <Grid item xs={6} sm={6} md={4}>
                  <CardHero
                    plain
                    name={name}
                    path={path}
                    extension={extension}
                  />
                </Grid>
              </Link>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

Section.propTypes = {
  list: PropTypes.array
};