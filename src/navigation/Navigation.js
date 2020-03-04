import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login  from "../modules/login/Login";
import Home  from "../modules/home/Home";
import About  from "../modules/about/About";

const SwitchNavigator = createSwitchNavigator(
  {
    login: Login,
    home: Home,
    about: About
  },
  {
    initialRouteName: 'home',
  }
);

export default createAppContainer(SwitchNavigator);