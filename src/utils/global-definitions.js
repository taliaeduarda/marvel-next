const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const containerFluid = {
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};

const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
};


const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
};

const defaultFont = {
  fontFamily: '"Roboto", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};


const primaryColor = "#9c27b0";
const grayColor = "#999999";

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px",
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
};

const title = {
  margin: "1.75rem 0 0.875rem",
  fontWeight: "700",
  fontFamily: `"Roboto", sans-serif`,
  fontSize: "1rem",
};

const cardTitle = {
  ...title,
  marginTop: ".625rem",
  textAlign: "center",
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem",
};

export {
  //variables
  transition,
  container,
  containerFluid,
  boxShadow,
  defaultFont,
  primaryColor,
  grayColor,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardSubtitle,
};
