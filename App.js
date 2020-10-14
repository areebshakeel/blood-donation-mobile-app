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
    <View style={styles.container}>
      <View
        style={{borderColor: 'black', borderBottomWidth: 2, borderTopWidth: 2, alignItems:'center'}}>
        <View>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View>
          <Text style={{fontSize:40  }}>SIGN IN</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <TextInput placeholder="Username" style={styles.input} />
        </View>
        <View>
          <TextInput secureTextEntry={true} placeholder="Password" style={styles.input} />
        </View>
        <View>
          <View>
            <CheckBox />
          </View>
          <View>
            <Text>I Agree to the terms and conditions</Text>
          </View>
        </View>
        <View style={styles.button}><TouchableOpacity><Text style={{textAlign:'center',color:'white'}}>LOGIN</Text></TouchableOpacity></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  button:{
    padding:20,
    borderRadius:10,
    backgroundColor:'red'
  },
  inputContainer:{
    width:350,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    flex:1,
    justifyContent:'space-evenly'
  },
  input: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 4,
  },
  logo: {
    width: 150,
    height: 150,
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
