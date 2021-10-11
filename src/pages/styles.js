import { title } from "../utils/global-definitions";

const styles = {
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    minHeight: "32px",
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: "3rem",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  subtitle: {
    color: "#fffff",
    fontWeight: "500",
  },
  mainRaised: {
    "@media (max-width: 576px)": {
      margin: "20px 5px 0px",
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
};

export default styles;
