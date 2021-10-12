import Head from "next/head";
import PropTypes from "prop-types";
import getHeros from "../api/hero";

import classNames from "classnames";

import Container from "../../components/Container";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/hero";
const useStyles = makeStyles(styles);

export default function Hero({ hero }) {
  const classes = useStyles();
  const {
    name,
    thumbnail: { path, extension },
    description,
  } = hero;

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Head>
        <title>{name} | Marvel Heroes</title>
      </Head>
      <Parallax small filter image="../../../images/bg-profile.png" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container justify="center">
          <div className={classes.profile}>
            <div>
              <img
                src={`${path}/standard_xlarge.${extension}`}
                alt={name}
                className={imageClasses}
              />
            </div>
            <div className={classes.name}>
              <h3 className={classes.title}>{name}</h3>
              <p className={classes.description}>
                {description || "No description available"}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const hero = await getHeros({ id });
  return {
    props: {
      hero,
    },
  };
}

Hero.propTypes = {
  hero: PropTypes.object,
};
