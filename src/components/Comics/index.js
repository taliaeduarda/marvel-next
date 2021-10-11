import Link from "next/link";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import CardComic from "../CardComic";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

export default function Comics({ comics }) {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.title}>Comics</h2>
      <Grid container columns={{ xs: 12, sm: 4, md: 12 }}>
        {comics.map((comic) => {
          const {
            id,
            title,
            thumbnail: { path, extension },
          } = comic;
          return (
            <Link href={`/comic/${id}`} key={id}>
              <Grid item xs={6} sm={4} md={2}>
                <CardComic
                  plain
                  title={title}
                  path={path}
                  extension={extension}
                />
              </Grid>
            </Link>
          );
        })}
      </Grid>
    </div>
  );
}

Comics.propTypes = {
  comicsList: PropTypes.array,
};
