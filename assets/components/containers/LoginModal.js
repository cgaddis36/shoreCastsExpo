import React, {Component, useState} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useWindowDimensions,
         useNavigationState } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';

function LoginModal({setModalToggle}) {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const [login, setLogin] = useState(true)
  const [secureEntry, setSecureEntry] = useState(true)
  const toggleSecureText  = () => {setSecureEntry(!secureEntry)}
  const [toggleCheck, setToggleCheck] = useState(false)
  const [emailValidation, setEmailValidation] = useState(false)
  const textInputChange = (text) => {
    if(text.trim().length >= 4) {
      setEmailValidation(true)
      setToggleCheck(true)
    } else {
      setToggleCheck(false)
    }
  }



  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>

          <Text style={styles.headerText}>
            Welcome to ShoreCast!
          </Text>

      </View>
      { login ?
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
            onChangeText={(text) => textInputChange(text)}
            style={styles.footerTextInput}/>
          {toggleCheck ?
            <Feather
                      name="check-circle"
                      color="green"
                      size={20}
                  /> : null
              }
          </View>
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
                    color="grey"
                    size={20}
                />
                }
            </TouchableOpacity>
           </View>

        <View style={{marginTop:30}}>
        </View>
          <View style={styles.Button}>
            <Button
              alignSelf='center'
              title="Register"
              color='white'
              onPress={() => setLogin(false)
              }
              />
          </View>
          <View style={styles.Button}>
            <Button
                alignSelf='center'
                title="Hide Modal"
                color='white'
                onPress={() => setModalToggle(false)
                }
                />
          </View>

        </View>
       :










        <View style={styles.footer}>
          <View style={styles.Button}>
            <Button
              alignSelf='center'
              title="Login"
              color='white'
              onPress={() => setLogin(true)
              }
              />
          </View>
          <View style={{marginTop:30}}>
          </View>
          <View style={styles.Button}>
            <Button
                alignSelf='center'
                title="Hide Modal"
                color='white'
                onPress={() => setModalToggle(false)
                }
                />
          </View>
          <Text>
            Registration Page
          </Text>
        </View>
      }
    </View>

  );
}

const styles = StyleSheet.create({
  modalContainer:{
    height: 700,
    flex: 1,
    backgroundColor: "rgb(30, 94, 238)"
  },
  footerText:{
    color: 'rgba(51, 52, 56, 0.64)',
     fontSize: 18
  },
  footerAction: {
       flexDirection: 'row',
       marginTop: 10,
       borderBottomWidth: 1,
       borderBottomColor: '#f2f2f2',
       paddingBottom: 5
   },
   footerActionError: {
       flexDirection: 'row',
       marginTop: 10,
       borderBottomWidth: 1,
       borderBottomColor: '#FF0000',
       paddingBottom: 5
   },
  headerText: {
    color: '#fff',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20
  },
header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
},
footer: {
    flex: 2,
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
footerTextInput:{
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
},
  Button:{
    width: "40%",
    height: 40,
    borderRadius:20,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 50,
  },
});

export default LoginModal;
