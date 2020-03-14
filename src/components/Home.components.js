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

import imgDots from '../assets/images/insta-dots.png';

const PostContainer = (props) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={props.userImage} style={styles.userAvatar}></Image>
        <Image source={imgDots} style={{width: 20, height: 20}}></Image>
      </View>

      <View style={styles.postImage}>
          <Image source={{uri:props.item.item.postImage}} style={{flex:1}}></Image>
          {/* <Image source={{uri:"https://images3.alphacoders.com/102/102727.jpg"}} style={{flex:1}}></Image> */}
      </View>
      <View style={styles.postFooter}></View>
    </View>
  );
};


const styles = StyleSheet.create({
    postContainer: {
      height:500
    },
    postHeader: {
      flex: 1,
      flexDirection: 'row',
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingTop:10,
      paddingBottom:10,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    postImage: {
      flex: 8,
    //   height:500,
    //   backgroundColor:"red"
    },
    postFooter:{
      flex:1,
      backgroundColor:"gray"
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

export {PostContainer};
