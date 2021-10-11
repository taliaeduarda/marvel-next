import { container, title } from "../../utils/global-definitions";

const style = {
  section: {
    padding: "70px 0",
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "35px",
    minHeight: "32px",
    textTransform: "uppercase",
    fontSize: "18px",
    color: "#151515"
  },
};

export default style;
