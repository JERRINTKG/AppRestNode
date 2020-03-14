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
import { PostContainer } from "../../components/Home.components";
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
          postImage: 'https://images3.alphacoders.com/595/595064.jpg',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          userImage: '',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 1,
          postImage: 'https://images3.alphacoders.com/823/82317.jpg',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          userImage: '',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 2,
          postImage: 'https://images3.alphacoders.com/102/102727.jpg',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          userImage: '',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 3,
          postImage: 'https://images3.alphacoders.com/853/85305.jpg',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          userImage: '',
          likesCount: 65,
          postDescription: '',
        },
        {
        id: 4,
        postImage: 'https://images3.alphacoders.com/595/595064.jpg',
        userName: 'jerrintkg',
        userLocation: 'Trivandrum',
        userImage: '',
        likesCount: 65,
        postDescription: '',
      },
      {
        id: 5,
        postImage: 'https://images5.alphacoders.com/485/485812.jpg',
        userName: 'jerrintkg',
        userLocation: 'Trivandrum',
        userImage: '',
        likesCount: 65,
        postDescription: '',
      },
      {
        id: 6,
        postImage: 'https://images3.alphacoders.com/102/102727.jpg',
        userName: 'jerrintkg',
        userLocation: 'Trivandrum',
        userImage: '',
        likesCount: 65,
        postDescription: '',
      },
      {
        id: 7,
        postImage: 'https://images5.alphacoders.com/485/485812.jpg',
        userName: 'jerrintkg',
        userLocation: 'Trivandrum',
        userImage: '',
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
                <PostContainer item={item} />

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
    // backgroundColor:"red"
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingTop:5,
    paddingBottom:5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userImage: {
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
