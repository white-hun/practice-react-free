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
    console.log(`${this.props.id}componentDidMount() called.`);
  }
  componentDiUpdate() {
    console.log(`${this.props.id}componentDidUpdate() called.`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id}componentWillUnmount() called.`);
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
