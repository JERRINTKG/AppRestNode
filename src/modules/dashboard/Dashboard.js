import React from 'react';
import { Text, View } from 'react-native';
import serviceWrapper from '../../network/Services';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //   getData = () => {
  //     this.props
  //       .get('https://app-rest-node.herokuapp.com/api/user/all')
  //       .then(response => {
  //         // console.log(response);
  //         this.setState({ data: response.data });
  //       });
  //   };

  render() {
    // let dataForm = this.state.data.map((m, i) => <Text key={i}>{m.email}</Text>);
    return (
      <React.Fragment>
        <View>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
          <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
        </View>
      </React.Fragment>
    );
  }
}

export default serviceWrapper(Dashboard);
