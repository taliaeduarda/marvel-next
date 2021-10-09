import { successColor, defaultFont } from "../../utils/global-definitions";

const customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important",
    },
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important",
    },
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor,
    },
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
  },
  formControl: {
    margin: "20px 0 0 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057",
    },
  },
  input: {
    color: "#495057",
    width: "250px",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1",
    },
    "&::placeholder": {
      color: "#AAAAAA",
    },
  },
};

export default customInputStyle;
