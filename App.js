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

// import * as firebaseObj from 'firebase';
// import {firebaseConfig} from './config';

// if (!firebaseObj.apps.length){
// 	firebaseObj.initializeApp(firebaseConfig);
// }







import firestore from '@react-native-firebase/firestore';





class App extends Component{
  constructor(props){
    super(props);

    this.state={
      fname:'',
      lname:'',
      email:'',
      phone:'',
      test:'',
    }

  }

  componentDidMount(){
  
// const users = firestore()
//   .collection('users')
//   .get();
// const user = firestore()
//   .collection('users')
//   .doc('ABC')
//   .get();
  
// const usersCollection = firestore().collection('users');

// const userDocument = firestore()
//   .collection('users')
//   .doc('ABC');

//   // console.log(user);
  











  firestore()
  .collection('abcdef')
  .doc('XYZ')
  .get()
  .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);
    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
    }
  });










  // firestore().collection("users").doc("qFNerrY0KbfH6bOPOAxW").get().onSnapshot(doc => {
  //   console.log("I am not testing");
  //   console.log(doc.data());
  // });
  

    // Read Data
  // const myusers = firebaseObj.database().ref("rasail");
  // myusers.on("value",datasnap=>{ 
    
  //   console.log('Zad e Rah Data is =');
  //   // console.log(datasnap.val());
  //   console.log('New Data is =');
  //   var arr = datasnap.val();
  //   console.log(arr.data[0]);

  //   this.setState({
  //     test:datasnap.val(),
  //   });
  
  // });

  // Write Data

  // ctrl + /

// const dept = firebaseObj.database().ref("cities");
//   dept.push(
//     {
//       "literature" : {
//         "category" : "books",
//         "data" : [{
//             "author":"Khursheed"
//         },
//         {
//             "author":"Khursheed"
//         }
//         ]
//       }
//     }
//   );

  
  
  
  
  // const classes = firebaseObj.database().ref("classes");
  // classes.set({
  //   id:12,
  //   classname:'CS1',
  //   class:'Ali1',
  // });


  }
  
  onChangeTextFirstName = (text) =>{
    this.setState({fname:text});
  }

  onChangeTextLastName = (text) =>{
    this.setState({lname:text});
  }

  onChangeTextEmail = (text) =>{
    this.setState({email:text});
  }

  onChangeTextPhone = (text) =>{
    this.setState({phone:text});
  }

  onPressButton = (text) =>{

  const register = firebaseObj.database().ref("register");
  
  register.push({
    fname:this.state.fname,
    lname:this.state.lname,
    email:this.state.email,
    phone:this.state.phone,
  });

  }

  render(){
    return(
      <View>
      
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
