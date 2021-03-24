/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import * as firebaseObj from 'firebase';
import {firebaseConfig} from './config';

if (!firebaseObj.apps.length){
	firebaseObj.initializeApp(firebaseConfig);
}

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      fname:'',
      lname:'',
      email:'',
      phone:'',
    }

  }
  componentDidMount(){
    // Read Data
  const myusers = firebaseObj.database().ref("users");
  myusers.on("value",datasnap=>{ 
	
    console.log(datasnap.val());
  
  });

  // Write Data

  var newItem = {
    id:12,
    deptname:'CS1',
    stdname:'Ali1',
  }

//   firebaseObj.database().ref('cities').once('value').then(function(snapshot) {
//   snapshot.forEach(function(barberSnapshot) {
//     barberSnapshot.child('queue').ref.push(newItem);
//   });
// });

const dept = firebaseObj.database().ref("cities");
  dept.push({
    id:12,
    deptname:'CS1',
    stdname:'Ali1',
  });


  const classes = firebaseObj.database().ref("class");
  classes.set({
    classid:145,
    class:'BSCS',
  });

  }
  
  onChangeTextFirstName = (text) =>{
    this.setState({fname:text});
  }

  onChangeTextLastName = (text) =>{
    this.setState({lname:text});
  }

  onChangeTextEmail = (text) =>{
    // Alert.alert(text);
    this.setState({email:text});
  }

  onChangeTextPhone = (text) =>{
    this.setState({phone:text});
  }

  onPressButton = (text) =>{

  const dept = firebaseObj.database().ref("register");
  
  dept.push({
    fname:this.state.fname,
    lname:this.state.lname,
    email:this.state.email,
    phone:this.state.phone,
  });

  }

  render(){
    return(
      <View>
        <Text> In The name of Allah </Text>

      <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextFirstName}
        placeholder = "First Name"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />

      <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextLastName}
        placeholder = "Last Name"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />
      
      <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextEmail}
        placeholder = "Email"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />

      <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextPhone}
        placeholder = "Phone"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />

      <TouchableOpacity
          style = {{backgroundColor:'green'}}
          onPress = {this.onPressButton}>
        <Text> Submit </Text>
      </TouchableOpacity>

      </View>
    );
  };
}

const styles = StyleSheet.create({
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
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
