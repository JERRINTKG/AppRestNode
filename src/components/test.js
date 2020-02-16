import React from 'react';
import { Text, Button } from 'react-native';
import serviceWrapper from '../network/Services';

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    this.props
      .get('https://app-rest-node.herokuapp.com/api/user/all')
      .then(response => {
        // console.log(response);
        this.setState({ data: response.data });
      });
  };

  render() {
    let dataForm = this.state.data.map((m, i) => <Text key={i}>{m.email}</Text>);
    return (
      <React.Fragment>
        <Button title="Press me" onPress={this.getData} />
        {dataForm}
      </React.Fragment>
    );
  }
}

export default serviceWrapper(TestClass);
