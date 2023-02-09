import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid #252525",
    borderRadius: 16,
  },
  messageText: {
    color: "#252525",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount() called.");
  }
  componentDiUpdate() {
    console.log("componentDidUpdate() called.");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() called.");
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
