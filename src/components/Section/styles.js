import { cardTitle, title } from "../../utils/global-definitions";
import imagesStyle from "../../utils/imagesStyles";

const sectionStyle = {
  section: {
    padding: "70px 0",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textTransform: "uppercase",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
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
  margin5: {
    margin: "5px",
  },
};

export default sectionStyle;