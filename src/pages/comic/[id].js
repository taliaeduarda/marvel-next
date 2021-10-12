import Head from "next/head";
import PropTypes from "prop-types";
import getComics from "../api/comics";

import classNames from "classnames";

import Container from "../../components/Container";
import Parallax from "../../components/Parallax";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/comic";
import Footer from "../../components/Footer";
const useStyles = makeStyles(styles);

export default function Comic({ comic }) {
  const {
    title,
    thumbnail: { path, extension },
    description,
    series: { name },
  } = comic;
  const classes = useStyles();
  
  const imageClasses = classNames(
    classes.imgInfo
  );

  return (
    <div>
      <Head>
        <title>{title} | Comics</title>
      </Head>
      <Parallax small filter image="../../../images/bg-profile.png" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container justify="center">
          <div className={classes.profile}>
            <div>
              <img
                src={`${path}/standard_xlarge.${extension}`}
                alt={title}
                className={imageClasses}
              />
            </div>
            <div className={classes.info}>
              <h3>{title}</h3>
              <p span={classes.description}>Series: {name}</p>
              <p className={classes.description}>
                {description || "No description available"}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const comicId = id;
  const comic = await getComics({ comicId });
  return {
    props: {
      comic,
    },
  };
}

Comic.propTypes = {
  comic: PropTypes.object,
};
