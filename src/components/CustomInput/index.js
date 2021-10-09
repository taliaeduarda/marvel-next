import { useCallback, useState } from "react";
import axios from "axios";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import styles from "./styles";
const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const { setLoaded, setHeroList, labelText, success } = props;
  const [hero, setHero] = useState("");
  const [error, setError] = useState(null);

  const handleClick = useCallback(async () => {
    if (hero) {
      setLoaded(false);

      try {
        const response = await axios.get(`/api/query`, {
          params: {
            query: {
              name: hero,
            },
          },
        });
        const heroes = response?.data?.message?.data?.results;

        if (heroes && heroes.length > 0) {
          setHeroList(heroes);
          setLoaded(true);
        } else {
          setError("not-found");
          setLoaded(true);
        }
      } catch (error) {
        console.log(error);
        setError(error);
        setLoaded(true);
      }
    } else {
      setError("empty");
    }
  }, [hero, setLoaded, setHeroList]);

  const handleInputChange = useCallback(({ target: { value } }) => {
    setHero(value);
  }, []);

  const handleKeyUp = useCallback(
    ({ keyCode }) => {
      if (keyCode === 13) {
        handleClick();
      }
    },
    [handleClick]
  );

  const errorMessage = () => {
    switch (error) {
      case "not-found":
        return "Hero not found, try another one";
      case "empty":
        return "Empty? Are you sure?";
      default:
        return "Oops, something went wrong, try again";
    }
  };

  const classes = useStyles();
  const labelClasses = classNames({
    [" " + classes.labelRootSuccess]: success,
  });

  const inputClasses = classNames({
    [classes.input]: true,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true
  });

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.labelRoot + " " + labelClasses}>
        {labelText}
      </InputLabel>

      <Input
        value={hero}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        classes={{
          input: inputClasses,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
      />
      <div style={{ color: "black" }}>{error && errorMessage()}</div>
    </FormControl>
  );
}
