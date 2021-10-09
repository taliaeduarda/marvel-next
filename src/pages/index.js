import Head from "next/head";
import classNames from "classnames";
import PropTypes from "prop-types";

import getHeros from "./api/hero";

import Parallax from "../components/Parallax";
import Section from "../components/Section";
import Loading from "../components/Loading";
import CustomInput from "../components/CustomInput";
import Container from "../components/Container";

import { makeStyles } from "@material-ui/core/styles";
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
      <Parallax filter image="images/bg-marvel.jpg">
        <Container>
          <h1 className={classes.title}>Marvel Characters</h1>
          <h4>
            Every landing page needs a small description after the big bold
            title.
          </h4>
          <br />
        </Container>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container>
          <CustomInput
            labelText="Search hero name"
            setLoaded={setLoaded}
            setHeroList={setHeroList}
          />
          {!loaded && <Loading />}

          {heroList.length > 0 ? (
            <Section list={heroList} />
          ) : (
            <Section list={characters} />
          )}
        </Container>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await getHeros();
  const characters = response;
  return {
    props: {
      characters,
    },
  };
}

Home.propTypes = {
  characters: PropTypes.array,
  loaded: PropTypes.bool,
  setLoaded: PropTypes.func,
  setHeroList: PropTypes.func,
  heroList: PropTypes.array
};