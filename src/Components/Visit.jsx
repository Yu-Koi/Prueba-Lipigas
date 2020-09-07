import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";

import AvailableHours from '../pages/AvailableHours'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    console.log('Guardando cita');
    props.history.push("/");

  }

  return (
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
           <p>Fecha<span></span></p> 
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
           <p>Hora<span></span></p> 
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
          disableElevation>
          CONFIRMAR
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(Visit)