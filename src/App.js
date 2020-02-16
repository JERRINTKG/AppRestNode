import React from 'react';
import SwitchNavigator from "./navigation/Navigation";
import serviceWrapper from "./network/Services";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
    };
    // console.log(this.props);

  }

  render() {
    return (
      // <SafeAreaView>
        // <Login></Login>
        <SwitchNavigator></SwitchNavigator>
        // <Dashboard></Dashboard>
      // </SafeAreaView>
    );
  }
}


export default serviceWrapper(App);