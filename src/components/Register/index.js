import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const useStyles = makeStyles(styles);

export default function Register({ onValidate }) {
  const classes = useStyles();
  const [values, setValue] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setValue({ ...values, [name]: value });
  }

  function handleValidation() {
    onValidate(values);
  }

  return (
    <div className={classes.register}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form className={classes.form} noValidate onChange={handleChange}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleValidation}
        >
          Register
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
