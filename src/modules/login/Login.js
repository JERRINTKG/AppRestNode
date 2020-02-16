import React, {Component} from 'react';
import {  View,Image,StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native';
import gembul from '../../assets/images/gembul.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logIn() {
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
          }}>
          <Image
            resizeMode="cover"
            style={[
              {
                width: '100%',
                height: '100%',
                overflow: 'visible',
              },
            ]}
            source={gembul}
          />
        </View>
        <TextInput
          placeholder="Username"
          style={[styles.textInput, {marginTop: 40}]}
        />
        <TextInput
          placeholder="Password"
          style={[styles.textInput, {marginVertical: 20}]}
        />

        <TouchableOpacity
          onPress={() => {
            this.logIn();
          }}
          style={[styles.button]}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            height: 40,
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text style={{color: '#BDC3C6', fontSize: 15}}>Need Help?</Text>
        </TouchableOpacity>
        <Text style={{alignSelf: 'center', color: '#A6A8A9', fontSize: 15}}>
          Don’t have an account yet ?
        </Text>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            height: 34,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#0D92CA', fontSize: 15}}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 18,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  textInput: {
    height: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ECF0F3',
    paddingHorizontal: 19,
  },
  button: {
    height: 60,
    borderRadius: 3,
    backgroundColor: '#11B8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
