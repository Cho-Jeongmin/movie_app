import React from "react";
import { useLocation } from "react-router-dom";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (loacation.state) {
      return (
        <div>
          <h2>{location.state.title}</h2>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
