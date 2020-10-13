/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Logo from './android/app/src/assets/logo.png';
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

const App: () => React$Node = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(password);
  console.log(email);
 
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <View>
        <Image style={{height: 180, width: 150}} source={Logo} />
      </View>

      <View>
        <Text
          style={{fontSize: 30, textShadowColor: 'red', textShadowRadius: 5}}>
          SIGN IN
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 350,
          padding: 8,
          // borderColor: 'black',
          // borderTopWidth: 2,
          // borderBottomWidth: 2,
          // borderLeftWidth: 2,
          // borderRightWidth: 2,
        }}>
        <View>
          <TextInput
            style={{borderBottomWidth: 1, borderColor: 'grey'}}
            placeholder="User Name"
            autoCompleteType='email'
            onChangeText={(value)=>setEmail(value)}

          />
        </View>
        <View>
          <TextInput
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
            style={{borderBottomWidth: 1, borderColor: 'grey'}}
            placeholder="Password"
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            
            marginTop:30
          }}>
          <View>
            <CheckBox></CheckBox>
          </View>
          <View>
            <Text>I agree to the terms and services</Text>
          </View>
          <View style={{marginTop:50}}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>
        </View>
        </View>
        

        <View>
          <Text style={{marginTop:20}}>Forgot Password?</Text>
        </View>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    alignItems: "center",
    backgroundColor: "red",
    borderRadius:10,
    padding: 10
  },
  facebook:{
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius:10,

  },
  inputs: {
    borderColor: 'black',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: '34',
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
