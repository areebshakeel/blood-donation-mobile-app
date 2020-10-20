/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Logo from '../../assets/logo.png';
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
import {AccessToken} from 'react-native-fbsdk'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Login= (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(password);
  console.log(email);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View
        style={{
          borderColor: 'black',
          // borderBottomWidth: 2,
          // borderTopWidth: 2,
          alignItems: 'center',
        }}>
        <View>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View>
          <Text style={{fontSize: 40}}>LOGIN</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={{flex:0.6,justifyContent:'space-evenly'}}>
          <View style={{}}>
            <TextInput placeholder="Username"  
            style={styles.input}
            onChangeText={(value)=>setEmail(value)} />
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.input}
              onChangeText={(value)=>setPassword(value)}
            />
          </View>
        </View>
        <View style={styles.check}>
          <View>
            <CheckBox />
          </View>
          <View style={{marginTop: 6}}>
            <Text>I Agree to the terms and conditions</Text>
          </View>
        </View>
        <View style={{flex:1, justifyContent:'space-evenly'}}>
        <View style={styles.button}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
            <Text style={{textAlign: 'center', color: 'white'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View stye={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}> 
        <View style={styles.facebook}>
          <TouchableOpacity onPress={
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }\>
            <Text style={{textAlign: 'center', color: 'white'}}>LOGIN with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.google}>

        <TouchableOpacity>
            <Text style={{textAlign: 'center', color: 'white'}}>LOGIN with Google</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  facebook:{
    // flex:1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  google:{
    // flex:1,
    padding:15,
    borderRadius: 10,
    backgroundColor: 'green',    
  },
  check: {
    // flex:1,
    flexDirection:'row'
  },
  button: {
    // flex:1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  inputContainer: {
    width: 350,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  input: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 30,
    borderColor:'grey'
  },
  logo: {
    width: 120,
    height: 120,
    borderTopWidth: 10,
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
    backgroundColor: Colors.black,
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

export default Login;
