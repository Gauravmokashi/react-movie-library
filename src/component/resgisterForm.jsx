import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";

export class ResgisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required(), 
  };

  doSubmit = () => {
    // call the server
    console.log("submit");
  };

  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "name")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default ResgisterForm;
