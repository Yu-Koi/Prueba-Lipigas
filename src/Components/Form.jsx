import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import {
  Button,
  FormHelperText,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

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
    backgroundColor: "#000080",
    height: "1.8rem",
    flexGrow: 1,
  },
  input: {
    // flexGrow: 1,
    width: "100%",
    height: "1.8rem",
    borderColor: "#000000",
    margin: theme.spacing(0, 0, 0),
  },
  inputContent: {
    margin: theme.spacing(3, 0, 0),
  },
  phone: {
    // flexGrow: 1,
    // margin: theme.spacing(0, 0, 0),
    display: "flex",
    justifyContent: "space-between",
  },
  warning: {
    color: "#000080",
  },
  backButon: {
    marginRight: theme.spacing(2),
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();

    props.history.push("/agenda");
  };

  return (
    <Grid container justify="center">
      <Grid item className={classes.root}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <label>1. Ingresa con tus datos personales</label>

          <div className={classes.inputContent}>
            <input
              className={classes.input}
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
          </div>

          <span className={classes.warning}>{errors?.rut?.message}</span>

          <FormHelperText id="rut-indication">
            Sin puntos ni guiones
          </FormHelperText>

          <div className={classes.inputContent}>
            <div className={classes.phone}>
              <FormHelperText className={classes.label} id="code">
                +51
              </FormHelperText>
              <input
                className={classes.input}
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
          </div>

          <span className={classes.warning}>{errors?.phone?.message}</span>

          <FormHelperText id="phone-indication">999999999</FormHelperText>

          <Button
            className={classes.submit}
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Agendar visita
            <KeyboardArrowRight className={classes.backButon} />
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default withRouter(Form);
