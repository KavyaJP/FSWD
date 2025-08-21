import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        Name: <input type="text" name="name" id="name" />
      </>
    );
  }
}

export default LoginPage;
