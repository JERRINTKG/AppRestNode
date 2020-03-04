import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import serviceWrapper from '../../network/Services';
import imgText from '../../assets/images/insta-text.png';
import imgCamera from '../../assets/images/insta-camera.png';
import imgSend from '../../assets/images/insta-send.png';

import imgHome from '../../assets/images/insta-home.png';
import imgSearch from '../../assets/images/insta-search.png';
import imgAdd from '../../assets/images/insta-add.png';
import imgLove from '../../assets/images/insta-love.png';
import imgProfile from '../../assets/images/insta-profile.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: ''
        },
        {
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: ''
        },
        {
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: ''
        },
        {
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: ''
        }
      ]
    };
  }

  render() {
    let {data} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.headerTab}>
            <TouchableOpacity>
              <Image source={imgCamera} style={styles.icon}></Image>
            </TouchableOpacity>
            <Image source={imgText} style={styles.imgText}></Image>
            <TouchableOpacity>
              <Image source={imgSend} style={styles.icon}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>
              <ScrollView>
                <FlatList
                  data={data}
                  renderItem={(item, index) => (
                    <View style={styles.postContainer}>
                      <Text>{item.userImage}</Text>
                    </View>
                  )}
                  keyExtractor={item => item.userName}
                />
              </ScrollView>
          </View>
          <View style={styles.footerTab}>
            <TouchableOpacity>
              <Image source={imgHome} style={styles.icon}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={imgSearch} style={styles.icon}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={imgAdd} style={styles.icon}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={imgLove} style={styles.icon}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={imgProfile} style={styles.icon}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTab: {
    backgroundColor: 'white',
    height: 55,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
  },
  imgText: {
    width: 120,
    height: 40,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  footerTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 15,
  },
  postContainer: {
    backgroundColor: 'red',
    height: 500,
    marginTop:10
  },
});

export default serviceWrapper(Home);
