import { useCallback, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import getHeros from "../../pages/api/hero";
import getComics from "../../pages/api/comics";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import { FiSearch } from 'react-icons/fi'

import styles from "./styles";
const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const { setLoaded, setList, labelText, id } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleClick = useCallback(async () => {
    if (value) {
      setLoaded(false);
     
      try {
        let response;
        if (id === 1) {
          const title = value;
          response = await getComics({ title });
        } else {
          const hero = value;
          response = await getHeros({ hero });
        }
        const data = response;

        if (data && data.length > 0) {
          setList(data);
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
  }, [value, setLoaded, setList]);

  const handleInputChange = useCallback(({ target: { value } }) => {
    setValue(value);
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
        return "value not found, try another one";
      case "empty":
        return "Empty? Are you sure?";
      default:
        return "Oops, something went wrong, try again";
    }
  };

  const classes = useStyles();
  const labelClasses = classNames(
    classes.labelRoot,
  );

  const inputClasses = classNames({
    [classes.input]: true,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underline]: true,
  });

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.labelRoot + " " + labelClasses}>
        <FiSearch />
        {labelText}
      </InputLabel>

      <Input
        value={value}
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

CustomInput.propTypes = {
  labelText: PropTypes.node,
  setLoaded: PropTypes.func,
  setList: PropTypes.func,
};
