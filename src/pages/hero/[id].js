import Head from "next/head";
import getHeros from "../api/hero";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { Header } from "../../components/Header";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import Parallax from "../../components/Parallax";

import styles from "./styles";
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
      <Header
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
      <Parallax small filter image="../../../images/bg-profile.png" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
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
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const hero = await getHeros(id);

  return {
    props: {
      hero,
    },
  };
}
