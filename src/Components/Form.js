import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

class Select extends React.Component {
  render() {
    const { name, values, handleClick } = this.props;
    return <select>{values.map(value => <option> {value} </option>)}</select>;
  }
}

export default class Form extends React.Component {
  constructor() {
    super();
    this.likeBats = ["1", "2", "3", "4", "5"];
    this.isBatOptions = ["Yes", "No", "Maybe"];
    this.state = {
      email: "",
      confirmEmail: "",
      like: "",
      isBat: "",
      submitted: false
    };
  }

  validateInput = () => {
    const { email, confirmEmail, like, isBat, submitted } = this.state;

    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let errors = true;
    let message = "";

    email === confirmEmail
      ? emailValid
        ? like
          ? isBat
            ? (errors = false)
            : (message = "Will you admit it if you were Batman")
          : (message = "Please select how much you like Bats")
        : (message = "Email is not valid")
      : (message = "Emails do not match");

    return errors ? message : errors;
  };

  handleSubmit = () => {
    this.setState({
      submitted: true
    });
  };

  handleEmail = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    let { isBatOptions, likeBats } = this;
    isBatOptions = ["", ...isBatOptions];
    const { email, like, isBat, submitted } = this.state;
    const errors = this.validateInput();

    return (
      <div style={styles}>
        <div>
          {" "}
          Email:{" "}
          <input name="email" disabled={submitted} onInput={this.handleEmail} />
        </div>
        <br />
        <div>
          {" "}
          Confirm Email:{" "}
          <input
            name="confirmEmail"
            disabled={submitted}
            onInput={this.handleEmail}
          />
        </div>
        <br />
        <div>
          {" "}
          From 1-5, how much do you like Bats <br />
          {likeBats.map(value => (
            <div className="radio">
              {" "}
              {value}{" "}
              <input
                type="radio"
                name={"like"}
                value={value}
                onChange={this.handleChange}
                disabled={submitted}
              />
            </div>
          ))}
        </div>

        <br />
        <div>
          {" "}
          Are you Batman?{" "}
          <select
            name="isBat"
            disabled={submitted}
            onChange={this.handleChange}
          >
            {isBatOptions.map(value => (
              <option value={value}> {value} </option>
            ))}
          </select>
        </div>
        <br />

        {errors ? (
          <div className="errors">{errors}</div>
        ) : (
          <div className="complete">Proceed</div>
        )}

        <br />
        <input type="submit" disabled={errors} onClick={this.handleSubmit} />
        <br />

        {submitted ? (
          <div>
            <div className="complete">E-mail: {email}</div>
            <div className="complete">How much you like Bats: {like}</div>
            <div className="complete">Are you Batman: {isBat}</div>
          </div>
        ) : (
          submitted
        )}
      </div>
    );
  }
}

render(<Form />, document.getElementById("root"));
