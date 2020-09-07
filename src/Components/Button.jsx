import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    width: "100%",
    margin: theme.spacing(3, 0, 2),
  },
}));

const ButtonSumit = () => {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.submit}
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
      >    
      </Button>
    </>
  );
};

export default ButtonSumit;
