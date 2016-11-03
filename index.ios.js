/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Modal,
  Button,
  Navigator,
  TouchableHighlight,
} from 'react-native';

export default class LectureApp extends Component {
  constructor(props){
    super(props)
    this.state={
      text:''
    }
  }

  render() {
    let pic ={
      url:'https://robohash.org/mannnyy'
    }
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width:250 , height:250, borderRadius: 200 , backgroundColor: '#712357'}}/>
        <Text style={styles.welcome}>
          Robo Search
        </Text>
        <TextInput
          style={{height: 40, textAlign:'center', color:'white'}}
          placeholder="Enter search text here.."
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableHighlight>
        <Text style={styles.button}>Search</Text></TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'seagreen',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  button: {
      height: 20,
      backgroundColor: '#1D88A0',
      color: 'white',
      padding: 2,

  }
});

AppRegistry.registerComponent('LectureApp', () => LectureApp);
