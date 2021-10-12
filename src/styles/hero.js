import { container, title } from "../utils/global-definitions";

import imagesStyle from "../utils/imagesStyles";

const heroStyles = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "1rem auto",
    maxWidth: "600px",
    textAlign: "center !important",
    fontSize: "1.1rem",
    color: "#555"
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    "@media (max-width: 576px)": {
      margin: "0px 5px 0px",
    },
    "@media (min-width: 576px)": {
      margin: "-20px 30px 0px",
    },

    "@media (min-width: 992px)": {
      margin: "-60px 30px 0px",
    },
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#151515",
    fontSize: '1.5rem',
  },
};

export default heroStyles;