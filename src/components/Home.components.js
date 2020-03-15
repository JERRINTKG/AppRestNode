import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import imgText from '../assets/images/insta-text.png';
import imgCamera from '../assets/images/insta-camera.png';
import imgSend from '../assets/images/insta-send.png';

import imgDots from '../assets/images/insta-dots.png';

import imgHome from '../assets/images/insta-home.png';
import imgSearch from '../assets/images/insta-search.png';
import imgAdd from '../assets/images/insta-add.png';
import imgLove from '../assets/images/insta-love.png';
import imgProfile from '../assets/images/insta-profile.png';

const HomeHeader = props => {
  return (
    <View style={styles.headerTab}>
      <TouchableOpacity>
        <Image source={imgCamera} style={styles.icon}></Image>
      </TouchableOpacity>
      <Image source={imgText} style={styles.imgText}></Image>
      <TouchableOpacity>
        <Image source={imgSend} style={styles.icon}></Image>
      </TouchableOpacity>
    </View>
  );
};

const HomeFooter = props => {
  // console.log(props.clickHandler);
  
  return (
    <View style={styles.footerTab}>
      <TouchableOpacity onPress={()=>props.clickHandler('home')}>
        <Image source={imgHome} style={styles.icon}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.clickHandler('search')}>
        <Image source={imgSearch} style={styles.icon}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.clickHandler('add')}>
        <Image source={imgAdd} style={styles.icon}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.clickHandler('likes')}>
        <Image source={imgLove} style={styles.icon}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.clickHandler('profile')}>
        <Image source={imgProfile} style={styles.icon}></Image>
      </TouchableOpacity>
    </View>
  );
};

const PostContainer = props => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <TouchableOpacity>
          <Image
            source={{uri: props.item.item.userImage}}
            style={styles.userAvatar}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={imgDots} style={{width: 20, height: 20}}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.postImage}>
        <Image
          source={{uri: props.item.item.postImage}}
          style={{flex: 1}}></Image>
      </View>
      <View style={styles.postFooter}></View>
    </View>
  );
};

const PostList = props => {
  return (
    <View style={styles.bodyContainer}>
      <FlatList
        data={props.post}
        renderItem={(item, index) => <PostContainer item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 14,
    backgroundColor: 'white',
  },
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
  postContainer: {
    height: 500,
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postImage: {
    flex: 8,
  },
  postFooter: {
    flex: 1,
    backgroundColor: 'gray',
  },
  userAvatar: {
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 25,
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
});

export {PostContainer, HomeHeader, HomeFooter, PostList};
