import {createStackNavigator} from 'react-navigation-stack';
// import 'react-native-gesture-handler'
import {createAppContainer} from '@react-navigation/native';
import Signup from '../src/components/signup'
import Login from '../src/components/login'

const screens={
    Login:{
        screen: Login

    },
    Signup:{
        screen: Signup
    }
   
}
const HomeStack= createStackNavigator(screens)

export default createAppContainer(HomeStack)