/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState,useEffect } from 'react';
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
  List,
  ListItem,
  FlatList,
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


import auth from '@react-native-firebase/auth';


import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '534887302385-g8dgpoippt1rqigt20d33vm7c204f2ev.apps.googleusercontent.com',
});



// Phone Signed In
function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}


// OnAuthChange 
function SignIn() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      fname:'',
      lname:'',
      email:'',
      phone:'',
      test:'',
      data:'',
    }
    
  }

  componentDidMount(){
    
    // firestore()
    // .collection('users')
    // .doc('ABC')
    // .update({
    //   age: 31,
    // })
    // .then(() => {
    //   console.log('User updated!');
    // });
  
    this.callfunctiontopopulateFlatList();

    // var newArray = [
    //   {key:0,fname:'akhzar',lname:'nazir',email:'link2akhzar@gmail.com'},
    //   {key:1,fname:'Akbar',lname:'Akhtar',email:'akbar@gmail.com'},
    //   {key:2,fname:'akhzar',lname:'nazir',email:'link2akhzar@gmail.com'},
    //   {key:3,fname:'akhzar',lname:'nazir',email:'link2akhzar@gmail.com'},
    //   {key:4,fname:'Akbar',lname:'Akhtar',email:'akbar@gmail.com'},
    //   {key:5,fname:'akhzar',lname:'nazir',email:'link2akhzar@gmail.com'},
    //   {key:6,fname:'akhzar',lname:'nazir',email:'link2akhzar@gmail.com'},
    //   {key:7,fname:'Akbar',lname:'Akhtar',email:'akbar@gmail.com'},
    //   {key:8,fname:'akhzar',lname:'nazir',email:'link2akhzar@gmail.com'},
    //   {key:9,fname:'akhzar',lname:'nazir',email:'link2akhzar@gmail.com'},
    //   {key:10,fname:'Akbar',lname:'Akhtar',email:'akbar@gmail.com'},
    //   {key:11,fname:'akhzar',lname:'nazir',email:'link2akhzar@gmail.com'}];

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
  











// firestore()
// .collection('users')
// .get()
// .then(querySnapshot => {
//   console.log('Total users: ', querySnapshot.size);

//   querySnapshot.forEach(documentSnapshot => {
//     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//   });
// });


    // Query SnapShot
    // firestore().collection('users').get().then(querySnapShot=>{
    //   console.log("Number of users = ",querySnapShot.size);
    //   querySnapShot.forEach(documentSnapShot=>{
    //     console.log("Data = ",documentSnapShot.data());
    //   });
    // });

    // Document SnapShot

    // firestore().collection('users').doc('ABC').get().then(documentSnapShot=>{
    //   console.log("documentSnapshot is = ",documentSnapShot.data());
    // });


    // firestore().collection('users').where('campus','>=',50).get().then(querySnapshot=>{
    //   console.log("Data have ID Greater than = 50 is = ",querySnapshot.size);
    //   querySnapshot.forEach(record=>{
    //     console.log("record is = ",record.data().id);
    //   });
    // });



    // firestore()
    // .collection('users')
    // .get()
    // .then(querySnapshot => {
    //   console.log('Total users: ', querySnapshot.size);
    //   querySnapshot.forEach(documentSnapshot => {
    //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().name);
    //   });
    // });


  // firestore()
  // .collection('users')
  // // Filter results
  // .orderBy('id', 'asc')
  // .get()
  // .then(querySnapshot => {
  //   console.log(querySnapshot.size)
  //     querySnapshot.forEach(documentSnapshot => {
  //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().id);
  //     });
  // });

  // firestore()
  // .collection('users')
  // .orderBy('id', 'asc')
  // .get()
  // .then(querySnapshot => {
  //   console.log('Total users: ', querySnapshot.size);
  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('User ID: ', documentSnapshot.id);
  //     console.log('User defined ID: ', documentSnapshot.data());

  //   });
    
  // });


  // firestore()
  // .collection('users')
  // .add({
  //   name: 'Ada Lovelace',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });

  
  // firestore()
  // .collection('users')
  // .doc('ABC')
  // .set({
  //   name: 'Ada Lovelace',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });


  // firestore()
  // .collection('users')
  // .doc('ABC')
  // .update({
  //   name: 'Akhzar Nazir',
  // })
  // .then(() => {
  //   console.log('User updated!');
  // });


  // firestore()
  // .collection('users')
  // .doc('ABC')
  // .update({
  //   'info.address.zipcode': 94040,
  // })
  // .then(() => {
  //   console.log('User updated!');
  // });



  // firestore()
  // .doc('users/ABC')
  // .update({
  //   'info.address.location': new firestore.GeoPoint(53.483959, -2.244644),
  // });


  // firestore()
  // .doc('users/ABC')
  // .update({
  //   'info.avatar': firestore.Blob.fromBase64String('data:image/png;base64,iVBOR...'),
  // });



  // firestore()
  // .doc('users/ABC')
  // .update({
  //   createdAt: firestore.FieldValue.serverTimestamp(),
  // });



  // firestore()
  // .doc('users/ABC')
  // .update({
  //   fcmTokens: firestore.FieldValue.arrayUnion('ABCDE123456'),
  // });





  // firestore()
  // .doc('users/ABC')
  // .update({
  //   fcmTokens: firestore.FieldValue.arrayRemove('ABCDE123456'),
  // });



  // firestore()
  // .collection('comsats')
  // .doc('ABC')
  // .delete()
  // .then(() => {
  //   console.log('User deleted!');
  // });



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


    
  

  // firestore()
  // .collection('users')
  // .add({
  //   name: 'Talha',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });

  

  // firestore()
  // .collection('users')
  // .doc('ABC')
  // .set({
  //   name: 'Abcde',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });
  
  




  // firestore()
  // .collection('users')
  // .doc('ABC')
  // .update({
  //   age: 39,
  // })
  // .then(() => {
  //   console.log('User updated!');
  // });




  // firestore()
  // .collection('users')
  // .doc('ABC')
  // .update({
  //   'info.address.zipcode': 940000,
  // })
  // .then(() => {
  //   console.log('User updated!');
  // });



  // firestore()
  // .doc('users/ABC')
  // .update({
  //   'info.address.location': new firestore.GeoPoint(53.483959, -2.244644),
  // });




  // firestore()
  // .doc('users/ABC')
  // .update({
  //   createdAt: firestore.FieldValue.serverTimestamp(),
  // });




  // firestore()
  // .collection('comsats')
  // .doc('XYZ')
  // .update({
  //   age: 56,
  // })
  // .then(() => {
  //   console.log('User updated!');
  // });



  // firestore()
  // .doc('users/A')
  // .update({
  //   createdAt: firestore.FieldValue.serverTimestamp(),
  // });



  
  // auth()
  // .signInAnonymously()
  // .then(() => {
  //   console.log('User signed in anonymously');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/operation-not-allowed') {
  //     console.log('Enable anonymous in your firebase console.');
  //   }
  //   console.error(error);
  // });
    




  // auth()
  // .createUserWithEmailAndPassword('akhzar@gmail.com', 'SuperSecretPassword!')
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });




  }

  onGoogleButtonPress = async() => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  
  onChangeTextFName = (text) =>{
    this.setState({fname:text});
  }

  onChangeTextLName = (text) =>{
    this.setState({lname:text});
  }

  onChangeTextEmail = (text) =>{
    this.setState({email:text});
  }

  // onChangeTextPhone = (text) =>{
  //   this.setState({phone:text});
  // }

  onPressButton = () =>{

  // const register = firebaseObj.database().ref("register");
  
  // register.push({
  //   fname:this.state.fname,
  //   lname:this.state.lname,
  //   email:this.state.email,
  //   phone:this.state.phone,
  // });


  // firestore()
  // .collection('Users')
  // .doc('ABC')
  // .set({
  //   name: 'Ada Lovelace',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });


  var count = ''+this.state.data.length;


  // firestore()
  // .collection('comsatsusers')
  // .add({
  //   fname: this.state.fname,
  //   lname: this.state.lname,
  //   email: this.state.email,
  //   key: count
  // })
  // .then(() => {
  //   console.log('User added!');
  // });


  firestore()
  .collection('comsatsusers')
  .doc(count)
  .set({
    fname: this.state.fname,
    lname: this.state.lname,
    email: this.state.email,
    key: count
  })
  .then(() => {
    console.log('User added!');
  });

  this.callfunctiontopopulateFlatList();

  }

  callfunctiontopopulateFlatList = () =>{
  
  var newArray = [];
  firestore()
  .collection('comsatsusers')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);
    querySnapshot.forEach(documentSnapshot => {
      newArray.push(documentSnapshot.data());
    });
  }).then(testing=>{
    console.log('New Array Push is =', newArray);
    this.setState({data:newArray});
  });


  // this.setState({data:newArray});


  }

  render(){
    return(
      <View>
      
      <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextFName}
        placeholder = "First Name"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />

      <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextLName}
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

      <TouchableOpacity
          style = {{backgroundColor:'green'}}
          onPress = {this.onPressButton}>
        <Text> Submit </Text>
      </TouchableOpacity>


      <Button
      title="Google Sign-In"
      onPress={() => this.onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />

      {/* <SignIn />

      <PhoneSignIn />
 */}


      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <View>
            <Text> {item.fname} </Text>
            <Text> {item.lname} </Text>
            <Text> {item.email} </Text>
          </View>
        )}
      />

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
