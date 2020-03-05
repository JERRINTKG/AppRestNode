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
import imgDots from '../../assets/images/insta-dots.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id:0,
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: ''
        },
        {
          id:1,
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: ''
        },
        {
          id:2,
          userImage: '',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          postUrl: '',
          likesCount: 65,
          postDescription: ''
        },
        {
          id:3,
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
                      <View style={styles.postHeader}>
                        <Image source={item.userImage} style={styles.userAvatar}></Image>
                        <Image source={imgDots} style={{width:20,height:20}}></Image>
                        
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id.toString()}
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
    height: 500,
    borderTopColor:"red",
    borderWidth:1
  },
  postHeader:{
    flexDirection: 'row',
    borderWidth:1,
    height:60,
    paddingHorizontal:15,
    justifyContent:"space-between",
    alignItems: 'center',

  },
  userAvatar:{
    backgroundColor:"red",
    width:50,
    height:50,
    borderColor:"black",
    borderWidth:2,
    borderRadius:25,
  }
});

export default serviceWrapper(Home);
