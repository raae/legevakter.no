import React from "react";

class NoSSR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBrowserLoaded: false
    };
  }

  componentDidMount() {
    this.setState({
      isBrowserLoaded: true
    });
  }

  render() {
    const { children } = this.props;
    const { isBrowserLoaded } = this.state;
    return isBrowserLoaded ? <div>{children}</div> : null;
  }
}

export default NoSSR;
