import React from 'react';
import { Text, View } from 'react-native';
import serviceWrapper from '../../network/Services';

class About extends React.Component {
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
        <View style={{flex:1}}>
          <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
          <View style={{ flex:2, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
      </React.Fragment>
    );
  }
}

export default serviceWrapper(About);
