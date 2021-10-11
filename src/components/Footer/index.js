import React from "react";

import { List, ListItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                About me
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, made by Talia
        </div>
      </div>
    </footer>
  );
}
