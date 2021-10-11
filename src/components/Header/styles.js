import { container, defaultFont } from "../../utils/global-definitions";

const headerStyle = {
  appBar: {
    display: "flex",
    borderRadius: "3px",
    padding: "0.625rem 0",
    color: "#ffffff",
    width: "100%",
    backgroundColor: "transparent",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    position: "absolute",
    zIndex: "1100",
  },
  container: {
    ...container,
    minHeight: "70px",
    flex: "1",
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    paddingLeft: '20px'
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "12px",
    borderRadius: "3px",
    textTransform: "uppercase",
    padding: "8px 16px",
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: "1px",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent",
    },
  },
};

export default headerStyle;
