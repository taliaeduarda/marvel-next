import { container, title } from "../utils/global-definitions";
import imagesStyle from "../utils/imagesStyles";

const comicStyles = {
  container,
  profile: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 576px)": {
      flexDirection: "column",
    },
    "& h3": {
      fontWeight: "600",
      color: "#ffffff",
    },
    "& img": {
      maxWidth: "250px",
      height: "290px",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  info: {
    color: "#FFFFF",
    marginLeft: "100px",
    "@media (max-width: 776px)": {
      transform: "translate3d(0, -40%, 0)",
    },
    "@media (max-width: 576px)": {
      margin: "auto",
    },
  },
  description: {
    margin: "1rem auto",
    maxWidth: "700px",
    fontSize: ".9rem",
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    background: "black",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    "@media (max-width: 576px)": {
      margin: "-20px 5px 0px",
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
    minHeight: "32px",
    textDecoration: "none",
  },
};

export default comicStyles;
