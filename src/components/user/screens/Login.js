import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Pressable, ToastAndroid, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { UserContext } from '../../user/UserContext';

const Login = (props) => {
  const { navigation } = props;
  const { loginUser } = useContext(UserContext);
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin');
  const image = { uri: 'https://haycafe.vn/wp-content/uploads/2022/03/Anh-ca-Betta-song-doi-1.jpg' };

  const register = () => {
    navigation.navigate('Register');
  }
  const btnLogin = () => {
    loginUser(email, password);
  };
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.container}>

        {/* Text header */}
        {/* <Text style={styles.hello}>Hello</Text>
        <Text style={styles.again}>Again</Text>
        <Text style={styles.welcome}>Wellcome back you've been missed</Text> */}
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
          <Image
            source={require('../../../image/logoGP1.png')}
            style={{ width: 100, height: 100}}
            resizeMode='cover'
          />
        </View>

        {/* Login - Signup */}
        <View>
          <Text style={styles.username}>Email*</Text>
          <TextInput
            style={styles.inputUsername}
            value={email}
            onChangeText={setEmail}
            placeholder='Enter your email'></TextInput>
        </View>
        <View>
          <Text style={[styles.username, styles.password]}>Password*</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[styles.inputUsername, { paddingRight: 30, position: 'relative' }]}
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
              placeholder='Enter your password'></TextInput>
            <Image
              source={require('../../../image/ic_view512.png')}
              style={{ width: 22, height: 22, position: 'absolute', right: 0, marginRight: 14 }}
              resizeMode='cover'
            />
          </View>
        </View>

        {/* Check Remember
        <View style={styles.viewRemember}>
          <View style={styles.viewCheckBox}>
            <BouncyCheckbox onPress={() => { }} />
            <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: 'Poppins' }}>Remember</Text>
          </View>
          <Text style={{ color: '#5890FF', fontSize: 14, fontWeight: '400', fontFamily: 'Poppins' }}>Forgot the password ?</Text>
        </View> */}

        {/* Login button*/}
        <View style={styles.buttonLogin}>
          <TouchableOpacity
            style={styles.wrapperCustom}
            onPress={() => btnLogin()}>
            <Text style={styles.textPressable}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Other Login */}
        {/* <Text style={styles.continue}>or continue with</Text>
        <View style={styles.otherLogin}>
          <View style={styles.facebook}>
            <Image
              style={styles.tinyLogo}
              resizeMode='cover'
              source={{
                uri: 'https://toppng.com/uploads/preview/facebook-icon-social-media-icon-png-and-vector-facebook-icon-11562876940l4hbwapl7m.png',
              }}
            />
            <Text style={styles.textOtherLogin}>Facebook</Text>
          </View>
          <View style={[styles.facebook, styles.google]}>
            <Image
              style={styles.tinyLogo}
              resizeMode='cover'
              source={{
                uri: 'https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png',
              }}
            />
            <Text style={styles.textOtherLogin}>Google</Text>
          </View>
        </View> */}

        {/* Text footer */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
          <Text style={{ color: 'white', marginTop: 150 }}>Dont have an account ?</Text>
          <Pressable
            onPress={register}>
            <Text style={{ color: 'yellow', marginLeft: 8, marginTop: 150 }}>Sign Up</Text>
          </Pressable>

        </View>



      </View>
    </ImageBackground>

  )
}

export default Login

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: 'center',
  },
  viewRemember: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 9.5,
    justifyContent: 'space-between',
  },
  viewCheckBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tinyLogo: {
    width: 24,
    height: 24,
    marginRight: 17,
  },
  signUp: {
    marginTop: 16,
    textAlign: 'center',
  },
  otherLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  facebook: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: 174,
    height: 48,
    backgroundColor: '#EEF1F4',
    borderRadius: 6,
  },
  google: {
    marginLeft: 31,
  },
  textOtherLogin: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#667080',
  },
  continue: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#4e4b66',
    marginTop: 16,
  },
  buttonLogin: {
    marginTop: 30,
  },
  wrapperCustom: {
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 24,
    width: '100%',
    backgroundColor: 'rgb(44,44,44)'
  },
  textPressable: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputUsername: {
    marginTop: 4,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#4e4b66',
    borderWidth: 1,
    borderRadius: 6
  },
  username: {
    marginTop: 18,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: 'white'
  },
  password: {
    marginTop: 16,
  },
  welcome: {
    color: '#4E4B66',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 4,
    lineHeight: 30,
    width: 220,
  },
  again: {
    color: '#1877F2',
    fontSize: 48,
    fontWeight: '700',
  },
  hello: {
    color: '#050505',
    fontSize: 48,
    fontWeight: '700',
  },
  container: {
    padding: 24,
    flex: 1,
  }
})