import Head from "next/head";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import getHeros from "./api/hero";

import { Header } from "../components/Header";
import GridContainer from "../components/GridContainer";
import GridItem from "../components/GridItem";
import Parallax from "../components/Parallax";
import Section from "../components/Section";
import Loading from "../components/Loading";
import CustomInput from "../components/CustomInput";

import styles from "./styles";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const { characters, loaded, setLoaded, setHeroList, heroList } = props;
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Home | Marvel Heroes</title>
      </Head>
      <Header
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "#555",
        }}
      />
      <Parallax filter image="images/bg-marvel.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Marvel Characters</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CustomInput
            labelText="Search"
            setLoaded={setLoaded}
            setHeroList={setHeroList}
          />
          {!loaded && <Loading />}

          {heroList.length > 0 ? (
            <Section list={heroList} />
          ) : (
            <Section list={characters} />
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const characters = await getHeros();
  return {
    props: {
      characters,
    },
  };
}
