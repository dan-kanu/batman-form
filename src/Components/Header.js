import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
const style={
  height:'40vh',
  background:'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://uploads.codesandbox.io/uploads/user/ed7bffd9-8980-4ab4-9989-a43e9643c574/PaKU-broken_knight-wallpaper-1920x1080.jpg)',
  backgroundSize:'cover',
  backgroundPosition:'center'

}

export default class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron" style={style}>
        <h1 style={{color:'#fff'}}>True Batman Test</h1>
      </div>
    );
  }
}
