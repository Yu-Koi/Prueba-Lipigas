import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  Container,
  Typography,
  Button,
  FormHelperText,
  Grid,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "colum",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    flexGrow: 1,
    
  },
  submit: {
    width: "100%",
    margin: theme.spacing(3, 0, 2),
  },
}));

const Form = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  return (
    <Grid container justify="center"
    >
      <Grid item className={classes.root}>
        {/* <Typography component="h1" variant="h5" >AGENDA TU RECAMBIO</Typography> */}

        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <label>1. Ingresa con tus datos personales</label>

         

          <input
            className="form-control mb-2"
            placeholder="DNI del titular de la cuenta"
            name="rut"
            ref={register({
              required: { value: true, message: "Por favor ingrese el Rut" },
              maxLength: {
                value: 9,
                message: "Rut invalido",
              },
              minLength: {
                value: 8,
                message: "Rut invalido",
              },
            })}
          />

<span>{errors?.rut?.message}</span>

          <FormHelperText id="rut-indication">
            Sin puntos ni guiones
          </FormHelperText>

          <div>
            <FormHelperText id="code">+51</FormHelperText>
            <input
              className="form-control mb-2"
              placeholder="Número de movil"
              name="phone"
              ref={register({
                required: {
                  value: true,
                  message: "Por favor ingrese el número de movil",
                },
                maxLength: {
                  value: 9,
                  message: "Número invlido",
                },
                minLength: {
                  value: 9,
                  message: "Número invalido",
                },
              })}
            />
          </div>

          <span>{errors?.phone?.message}</span>

          <FormHelperText id="phone-indication">999999999</FormHelperText>

          <Button
            className={classes.submit}
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Agendar visita
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Form;
