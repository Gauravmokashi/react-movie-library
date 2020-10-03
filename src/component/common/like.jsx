import React, { Component } from "react";

export class Like extends Component {
  render() {

    let heartClass = this.props.liked=== true ? "fa fa-heart" : "fa fa-heart-o"
      return <i onClick={this.props.onClick} className={heartClass} aria-hidden="true"></i>;
  }
}

export default Like;
