import { container } from "../../utils/global-definitions";

const styles = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
    grid: {
      marginRight: "-15px",
      marginLeft: "-15px",
      width: "auto",
    },
    gridItem: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
  };

  export default styles;