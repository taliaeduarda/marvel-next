import { forwardRef } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
};

const useStyles = makeStyles(styles);

const GridItem = forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  const classes = useStyles();
  
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
})

GridItem.defaultProps = {
  className: "",
};

export default GridItem;