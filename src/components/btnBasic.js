import React from "react";

class ButtonBasic extends React.Component {
  // state = {};
  // handleClick = e => {
  //   console.log("click")
  //   this.setState({
  //     [e.target.value]: e.target.value,

  //   },
  //     console.log(this.state)
  //   )
  // };
  render() {
    return (
      <div>
        <button onClick={this.handleClick} type="button" className="btn btn-success" value={this.props.name}>{this.props.name}${this.props.price}</button>
      </div>
    );
  }
}

export default ButtonBasic;
