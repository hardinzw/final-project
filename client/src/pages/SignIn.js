import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import API from "../utils/API";
import "./Sign.css";
import { useHistory } from "react-router-dom";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.signIn({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if (res.data.pass === 200){
            this.setState({
              email: "",
              password: ""
            });
          }
          else if (res.data.pass === 401){
            alert("User not Found");
            this.setState({
              email: "",
              password: ""
            });
          }
          else if (res.data.pass === 400){
            alert("Incorrect Password")
            this.setState({
              password: ""
            });
          }
        })
        }
  };

  render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <form className="form" noValidate>
          <TextField
            value={this.state.email}
            onChange={this.handleInputChange}
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
            value={this.state.password}
            onChange={this.handleInputChange}
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={this.handleFormSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}
};

export default SignIn;