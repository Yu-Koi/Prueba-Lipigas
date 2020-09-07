import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Form from "../Components/Form";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8, 0, 8),
    display: "flex",
    textAlign: "center",
  },

  title: {
    margin: theme.spacing(0, 0, 0),
    display: "flex",
    textAlign: "center",
  },
}));

const AddClient = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item>
        <Typography component="h6" variant="h6">
          AGENDA TU RECAMBIO
        </Typography>

        <Form />
      </Grid>
    </Grid>
  );
};

export default AddClient;
