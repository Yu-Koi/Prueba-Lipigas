import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withRouter } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";

import AvailableHours from "../pages/AvailableHours";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(8, 0, 8),
   
  },
  media: {
    height: 140,
  },
  submit: {
    width: "100%",
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#002ab3",
    height: "1.8rem",
    flexGrow: 1,
  },
}));

const Visit = (props) => {
  const classes = useStyles();

  const savingVisit = (e) => {
    console.log("Guardando cita");
    props.history.push("/");
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardActionArea>
            <Typography variant="body2" color="textSecondary" component="p">
              Confirma tu Visita
            </Typography>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Se agendará el siguiente recambio:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               
                  Fecha<span></span>
                
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
               
                  Hora<span></span>
                
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={savingVisit}
              size="large"
              className={classes.submit}
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
            >
              CONFIRMAR
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withRouter(Visit);
