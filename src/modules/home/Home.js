import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import serviceWrapper from '../../network/Services';
import imgDots from '../../assets/images/insta-dots.png';
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
          id: 0,
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 1,
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 2,
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 3,
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: '',
        },
      ],
    };
  }

  render() {
    let {data} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
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
          <FlatList
            data={data}
            renderItem={(item, index) => (
              <View style={styles.postContainer}>
                {/* <View style={styles.postHeader}>
                  <Image
                    source={item.userImage}
                    style={styles.userAvatar}></Image>
                  <Image
                    source={imgDots}
                    style={{width: 20, height: 20}}></Image>
                </View> */}

                {/* <View style={styles.postImage}></View> */}
                {/* <View style={styles.postFooter}></View> */}
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerTab: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  icon: {
    width: 25,
    height: 25,
  },
  imgText: {
    width: 120,
    height: 40,
  },
  footerTab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 15,
  },
  bodyContainer: {
    flex: 14,
    backgroundColor: 'white',
  },
  postContainer: {
    flex: 1,
    backgroundColor:"red"
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postImage: {
    flex: 15,
    // height:500,
    backgroundColor:"red"
  },
  postFooter:{
    flex:1,
    backgroundColor:"red"
  },
  userAvatar: {
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 25,
  }
});

export default serviceWrapper(Home);
