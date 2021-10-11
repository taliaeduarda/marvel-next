import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

export default function Container(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.gridItem}>
        {children}
      </Grid>
    </Grid>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
