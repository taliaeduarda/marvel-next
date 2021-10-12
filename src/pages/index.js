import { useState } from "react";
import Head from "next/head";
import classNames from "classnames";
import PropTypes from "prop-types";

import getHeros from "./api/hero";
import getComics from "./api/comics";

import Parallax from "../components/Parallax";
import Characters from "../components/Characters";
import Comics from "../components/Comics";
import Loading from "../components/Loading";
import CustomInput from "../components/CustomInput";
import Container from "../components/Container";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/home";
import Footer from "../components/Footer";
const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();

  const [heroList, setHeroList] = useState([]);
  const [comicList, setComicList] = useState([]);
  const { characters, comicsList, loaded, setLoaded } = props;

  return (
    <div>
      <Head>
        <title>Home | Marvel Heroes</title>
      </Head>
      <Parallax filter image="images/marvel.jpg">
        <Container>
          <h1 className={classes.title}>Marvel Heroes</h1>
          <h4 className={classes.subtitle}>
            Access information about Marvel's vast library of comics—from what's
            coming up, to 70 years ago.
          </h4>
        </Container>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container>
          <CustomInput
            labelText="Comic name"
            setLoaded={setLoaded}
            setList={setComicList}
            id={1}
          />
          {comicList.length > 0 ? (
            <Comics comics={comicList} />
          ) : (
            <Comics comics={comicsList} />
          )}

          <CustomInput
            labelText="Character name"
            setLoaded={setLoaded}
            setList={setHeroList}
            id={2}
          />
          {!loaded && <Loading />}

          {heroList.length > 0 ? (
            <Characters data={heroList} />
          ) : (
            <Characters data={characters} />
          )}
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const response = await getComics({});
  const data = await getHeros({});
  
  const comicsList = response;
  const characters = data;
  return {
    props: {
      comicsList,
      characters,
    },
  };
}

Home.propTypes = {
  characters: PropTypes.array,
  comicsList: PropTypes.array,
  loaded: PropTypes.bool,
  setLoaded: PropTypes.func,
};
