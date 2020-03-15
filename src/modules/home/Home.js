import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import serviceWrapper from '../../network/Services';
import { PostList, HomeHeader, HomeFooter } from "../../components/Home.components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen : 'home',
      data: [
        {
          id: 0,
          postImage: 'https://images3.alphacoders.com/595/595064.jpg',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          userImage: 'https://i.pinimg.com/236x/27/7f/a9/277fa94041e1879a81aa7a08cea6897e--cr-ronaldo-cristiano-ronaldo.jpg',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 1,
          postImage: 'https://images3.alphacoders.com/823/82317.jpg',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          userImage: 'https://www.gstatic.com/tv/thumb/persons/983712/983712_v9_ba.jpg',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 2,
          postImage: 'https://images3.alphacoders.com/102/102727.jpg',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          userImage: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Andr%C3%A9s_Iniesta.jpg',
          likesCount: 65,
          postDescription: '',
        },
        {
          id: 3,
          postImage: 'https://images3.alphacoders.com/853/85305.jpg',
          userName: 'jerrintkg',
          userLocation: 'Trivandrum',
          userImage: 'https://specials-images.forbesimg.com/imageserve/1016874750/416x416.jpg',
          likesCount: 65,
          postDescription: '',
        },
        {
        id: 4,
        postImage: 'https://images3.alphacoders.com/595/595064.jpg',
        userName: 'jerrintkg',
        userLocation: 'Trivandrum',
        userImage: 'https://pbs.twimg.com/profile_images/1219751895654453248/NcSME1lI_400x400.jpg',
        likesCount: 65,
        postDescription: '',
      },
      {
        id: 5,
        postImage: 'https://images5.alphacoders.com/485/485812.jpg',
        userName: 'jerrintkg',
        userLocation: 'Trivandrum',
        userImage: 'https://www.fcbarcelonanoticias.com/uploads/s1/11/93/77/4/neymar-setien-barcelona.jpeg',
        likesCount: 65,
        postDescription: '',
      },
      {
        id: 6,
        postImage: 'https://images3.alphacoders.com/102/102727.jpg',
        userName: 'jerrintkg',
        userLocation: 'Trivandrum',
        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg/260px-Rohit_Sharma_November_2016_%28cropped%29.jpg',
        likesCount: 65,
        postDescription: '',
      },
      {
        id: 7,
        postImage: 'https://images5.alphacoders.com/485/485812.jpg',
        userName: 'jerrintkg',
        userLocation: 'Trivandrum',
        userImage: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg',
        likesCount: 65,
        postDescription: '',
      },
      ],
    };
  }

  viewRender = (screen)=>{
    switch(screen){
      case "home": return <PostList post={this.state.data} />;
      case "search": return <Text style={{flex:14}}>Search</Text>;
      case "add": return <Text style={{flex:14}}>Add</Text>;
      case "likes": return <Text style={{flex:14}}>Likes</Text>;
      case "profile": return <Text style={{flex:14}}>Profile</Text>;
    }
  }

  viewChage(data){
    this.setState({screen:data});
  }

  render() {
    let {data,screen} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <HomeHeader />
        {/* <PostList post={data} /> */}
        {this.viewRender(screen)}
        <HomeFooter clickHandler={(data)=>{this.viewChage(data)}}/>
      </SafeAreaView>
    );
  }
}


export default serviceWrapper(Home);
