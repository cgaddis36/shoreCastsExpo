import React, {Component, useState} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useWindowDimensions,
         useNavigationState } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import CreateUser from '../../helpers/apiCalls/CreateUser.js'
import LoginUser from '../../helpers/apiCalls/LoginUser.js'

function LoginModal({setModalToggle}) {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const [login, setLogin] = useState(true)
  const [secureEntry, setSecureEntry] = useState(true)
  const [secureConfirmEntry, setSecureConfirmEntry] = useState(true)
  const toggleSecureConfirmText  = () => {setSecureConfirmEntry(!secureConfirmEntry)}
  const toggleSecureText  = () => {setSecureEntry(!secureEntry)}
  const [toggleCheck, setToggleCheck] = useState(false)
  const [passwordValidation, setPasswordValidation] = useState(false)
  const [passwordConfirmValidation, setPasswordConfirmValidation] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [emailValidation, setEmailValidation] = useState(false)

  const passwordConfirmInputChange = (text) => {
    if(text.trim() == password) {
      setPasswordConfirmValidation(true)
      setPasswordConfirm(text)
    } else {
      setPasswordConfirmValidation(false)
    }
  }
  const loginHandle = () => {
    LoginUser({email, password, route, navigation})
    setModalToggle(false)
  }

  const signupHandle = () => {
    CreateUser({email, password, route, navigation})
    setModalToggle(false)
  }

  const emailInputChange = (text) => {
    if(text.includes("@") && text.includes(".")) {
      setEmailValidation(true)
      setToggleCheck(true)
      setEmail(text)
    } else {
      setToggleCheck(false)
      setEmailValidation(false)
    }
  }

  const passwordInputChange = (text) => {
    if(text.trim().length >= 8) {
      setPasswordValidation(true)
      setPassword(text)
    } else {
      setPasswordValidation(false)
    }
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../../images/default.png')}
            style={styles.logo}
            />
        </View>
          <Text style={styles.headerText}>
            Welcome to ShoreCast!
          </Text>
          { login ?
          <Text style={styles.headerSubtext}>
            Enter your login credentials below to get started.    Click Sign Up below if this is your first time here!
          </Text> :
          <Text style={styles.headerSubtext}>
            Enter your email & password below to get started. Click Login below if you've been here before!
          </Text>
        }
      </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Email
          </Text>
          <View style={styles.footerAction}>
            <FontAwesome
                    name="user-o"
                    color={'#fff'}
                    size={20}
                />
            <TextInput
              placeholder="Your Email"
            autoCapitalize="none"
            placeholderTextColor="#666666"
            onChangeText={(text) => emailInputChange(text)}
            style={styles.footerTextInput}/>
          {toggleCheck ?
            <Feather
                      name="check-circle"
                      color="green"
                      size={20}
                  /> : null
              }
          </View>
          { emailValidation ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>JohnFishman@example.com</Text>
            </Animatable.View>
            }
          <Text style={[styles.footerText, {marginTop: 35}]}>
            Password
          </Text>
          <View style={styles.footerAction}>
            <Feather
                     name="lock"
                     color={"#fff"}
                     size={20}
                 />
             <TextInput
               placeholder="Password"
             autoCapitalize="none"
             secureTextEntry={secureEntry}
             style={styles.footerTextInput}
             placeholderTextColor="#666666"
             onChangeText={(text) => passwordInputChange(text)}
             />


             <TouchableOpacity
                onPress={toggleSecureText}
            >
                {secureEntry ?
                <Feather
                    name="eye-off"
                    color="grey"
                    size={20}
                />
                :
                <Feather
                    name="eye"
                    color="green"
                    size={20}
                />
                }
            </TouchableOpacity>

           </View>
           { passwordValidation ? null :
             <Animatable.View animation="fadeInLeft" duration={500}>
               <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
             </Animatable.View>
             }
             { login ? null :

               <View>
                 <Text style={[styles.footerText, {marginTop: "10%"}]}>
                   Password Confirmation
                 </Text>
                 <View style={styles.footerAction}>
                   <Feather
                            name="lock"
                            color={"#fff"}
                            size={20}
                        />

                        <TextInput
                          placeholder="Confirm Password"
                        autoCapitalize="none"
                        secureTextEntry={secureConfirmEntry}
                        style={styles.footerTextInput}
                        placeholderTextColor="#666666"
                        onChangeText={(text) => passwordConfirmInputChange(text)}
                        />
                       <TouchableOpacity
                          onPress={toggleSecureConfirmText}
                      >
                      {secureConfirmEntry ?
                      <Feather
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      :
                      <Feather
                          name="eye"
                          color="green"
                          size={20}
                      />
                      }
                    </TouchableOpacity>
                 </View>
                 { passwordConfirmValidation ? null :
                   <Animatable.View animation="fadeInLeft" duration={500}>
                     <Text style={styles.errorMsg}>Password Confirmation must match Password above.</Text>
                   </Animatable.View>
                   }
               </View>
             }
        <View style={{marginTop:"10%"}}>
        </View>
        <View style={styles.loginButtonContainer}>
          <View style={styles.Button}>
            {login ?
              <Button
                alignSelf='center'
                title="Login"
                color='white'
                onPress={() => loginHandle()
                }
                /> :
              <Button
                alignSelf='center'
                title="Sign Up"
                color='white'
                onPress={() =>
                  signupHandle()
                }
                />
              }
          </View>
            <View style={styles.Button}>
              {login ?
                <Button
                  alignSelf='center'
                  title="Sign Up"
                  color='white'
                  onPress={() => setLogin(false)
                  }
                  /> :
              <Button
                alignSelf='center'
                title="Login"
                color='white'
                onPress={() => setLogin(true)
                }
                />
            }
            </View>
            <View style={styles.Button}>
              <Button
                  alignSelf='center'
                  title="Cancel"
                  color='white'
                  onPress={() => setModalToggle(false)
                  }
                  />
            </View>
          </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer:{
    height: "100%",
    flex: 1,
    backgroundColor: "rgb(30, 94, 238)"
  },
  footerText:{
    color: 'rgba(51, 52, 56, 0.64)',
     fontSize: 18
  },
  footerAction: {
       flexDirection: 'row',
       marginTop: "2.5%",
       borderBottomWidth: 1,
       borderBottomColor: '#f2f2f2',
       paddingBottom: "1.25%"
   },
   footerActionError: {
       flexDirection: 'row',
       marginTop: "2.5%",
       borderBottomWidth: 1,
       borderBottomColor: '#FF0000',
       paddingBottom: "1.25%"
   },
  headerText: {
    color: '#fff',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: "1.25%"
  },
  headerSubtext: {
    color: '#fff',
    alignItems: 'center',
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
  },
header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: "5%",
    paddingBottom: "10%"
},
logo:{
  height:"100%",
  width: "80%",
},
logoContainer:{
  justifyContent: 'center',
  marginTop: "40%",
  paddingLeft: "15%",

},
footer: {
    flex: 2,
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: "5%",
    paddingVertical: "8%"
},
footerTextInput:{
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: "2.5%",
    color: 'black',
},
errorMsg: {
       color: 'rgba(51, 52, 56, 0.64)',
       fontSize: 14,
   },
  Button:{
    width: "40%",
    height: "15%",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: "5%",
  },
  loginButtonContainer:{
    alignItems: 'center'
  }
});

export default LoginModal;
