import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";

import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  const [heroList, setHeroList] = useState([]);
  const [chosenHero, setChosenHero] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component
        {...pageProps}
        {...{
          heroList,
          setHeroList,
          chosenHero,
          setChosenHero,
          loaded,
          setLoaded,
        }}
      />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
