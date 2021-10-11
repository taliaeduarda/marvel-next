import classNames from "classnames";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

export default function CardComic(props) {
  const { className, plain, title, path, extension } = props;
  const classes = useStyles();

  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [className]: className !== undefined,
  });

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgCardFluid,
    classes.imgHover
  );
  return (
    <Card sx={{ minWidth: 255 }} className={cardClasses}>
      <CardActionArea>
        <CardMedia
          height="220"
          component="img"
          image={`${path}/standard_xlarge.${extension}`}
          alt={title}
          className={imageClasses}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.cardTitle}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
