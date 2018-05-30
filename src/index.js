import React from "react";
import { render } from "react-dom";
import bootstrap from "react-bootstrap";
import Form from "./Components/Form";
import Header from "./Components/Header";

const styles = {
  fontFamily: "roboto",
  textAlign: "center"
};

class Select extends React.Component {
  render() {
    const { name, values, handleClick } = this.props;
    return <select>{values.map(value => <option> {value} </option>)}</select>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Header />
        <h2 style={{ margin: "60px" }}> How do we know you are not Batman</h2>
        <div className="container">
          <div className="row" style={{ padding: '21px 32%'}}>
            <Form />
          </div>
        </div>

      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
