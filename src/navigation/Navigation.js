import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login  from "../modules/login/Login";
import Dashboard  from "../modules/dashboard/Dashboard";
import About  from "../modules/about/About";

const SwitchNavigator = createSwitchNavigator(
  {
    login: Login,
    dashboard: Dashboard,
    about: About
  },
  {
    initialRouteName: 'login',
  }
);

export default createAppContainer(SwitchNavigator);