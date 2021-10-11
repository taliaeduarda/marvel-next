import Link from "next/link";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import CardHero from "../Card";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

export default function Characters({ data }) {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.title}>List</h2>
      <div>
        <Grid container spacing={1} columns={{ xs: 12, sm: 4, md: 12 }}>
          {data.map((d) => {
            const {
              id,
              name,
              thumbnail: { path, extension },
            } = d;
            return (
              <Link href={`/hero/${id}`} key={id}>
                <Grid item xs={6} sm={4} md={2}>
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

Characters.propTypes = {
  list: PropTypes.array,
};
