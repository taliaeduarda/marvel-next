import * as React from 'react'
import { Toolbar, AppBar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

export function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.appBar}>
        <div className={classes.container}>
          <a href="/">Marvel Heroes</a>
        </div>
      </Toolbar>
    </React.Fragment>
  );
}
