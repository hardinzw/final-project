import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import "./Sign.css";
import API from "../utils/API";


class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    redirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.email + this.state.password);
    if (this.state.email && this.state.password && this.state.firstName && this.state.lastName) {
      API.signUp({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
      .then(res => {
        console.log(res)
        if (res.data.pass === 200){
          this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            redirect: true
          });
        }
        else if (res.data.pass === 401){
          alert("User Already Exists");
          this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
          });
        }
        else if (res.data.pass === 400){
          console.log(res);
          alert(res.data.error)
          this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
          });
        }
      })
        .catch(err => console.log(err));
      }
    else {
      alert("Please entire all fields");
    }
  };

  render() {
   
    const {redirect} = this.state;
    if(redirect){
      return <Redirect to="/REPLACEME!!!"/>
    }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <form className="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={this.state.firstName}
                onChange={this.handleInputChange}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={this.state.lastName}
                onChange={this.handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={this.state.email}
                onChange={this.handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={this.state.password}
                onChange={this.handleInputChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={this.handleFormSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
};

export default SignUp;
