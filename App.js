import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './android/app/src/components/login'
import Signup from './android/app/src/components/signup'

const App= function(){
  return(
    <View style={{flex:1,justifyContent:'center'}}>
      {/* <Login/> */}
      <Signup/>
    </View>
  )
}

export default App