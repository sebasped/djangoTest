import React, {Component} from "react";
import {Image, PageHeader, Panel, Grid,Row, Col, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import $ from 'jquery';
import cookie from 'react-cookies';

//import "./Login.css";
import {authenticate} from '../../services/Auth';
import history from '../../history';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message : "",
    };
  }


  async handleSubmit(event) {
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
    var response = await authenticate(username, password);
    if (response.authenticated){
        cookie.save("token", response.token);
        history.push("/main/home");
    } else{
      this.setState({
        message: "Usuario o clave incorrecto",
      });
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="username" bsSize="large">
            {this.state.message}
            <ControlLabel>Usuario</ControlLabel>
            <FormControl 
              placeholder="Ingrese usuario..."
              ref="username"
              autoFocus
              type="text"
              id = "username"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Clave</ControlLabel>
            <FormControl
              ref = "password"
              type="password"
              id = "password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

