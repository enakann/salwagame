import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    // console.log(this.imageRef.current);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight)
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans: spans });
  };

  render() {
    //   const {image} = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={this.props.alt} src={this.props.image} />
      </div>
    );
  }
}
