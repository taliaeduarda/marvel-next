import { cardTitle } from "../../utils/global-definitions";
import imagesStyle from "../../utils/imagesStyles";

const cardStyle = {
  card: {
    border: "0",
    marginTop: "30px",
    borderRadius: "6px",
    background: "#fff",
    width: "90%",
    boxShadow:
      "0 26px 24px -16px rgb(0 0 0 / 40%)",
    position: "relative",
    transition: "all 300ms linear",
    overflow: "visible",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  ...imagesStyle,
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
};

export default cardStyle;
