import { StyleSheet, Text, View, TextInput, Image, Pressable, ToastAndroid, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { UserContext } from '../../user/UserContext';

const Register = (props) => {
  const { navigation } = props;
  const { registerUser } = useContext(UserContext);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // const checkEmail = patternEmail.test(email);
    // if (!checkEmail) {
    //   ToastAndroid.show('Email khong dung dinh dang', ToastAndroid.SHORT);
    //   return;
    // }

    const success = await registerUser(email, password, fullname);
    if (success) {
      navigation.navigate('Login');
    }
    // if (success) {
    //   navigation.navigate('Login');
    //   ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
    // } else {
    //   ToastAndroid.show('Đăng ký không thành công', ToastAndroid.SHORT);
    // }
  }

  const gotoLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* Text header */}
        {/* <Text style={styles.hello}>Hello!</Text>
      <Text style={styles.welcome}>Signup to get Started</Text> */}
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
          <Image
            source={require('../../../image/logoGP2.jpg')}
            style={{ width: 100, height: 100 }}
            resizeMode='cover'
          />
        </View>

        {/* Login - Signup */}
        <View>
          <Text style={styles.username}>Fullname*</Text>
          <TextInput
            style={styles.inputUsername} placeholder="Do Ba Trung"
            value={fullname}
            onChangeText={setFullname}></TextInput>
        </View>
        <View>
          <Text style={[styles.username, styles.password]}>Email*</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[styles.inputUsername, { paddingRight: 30 }]}
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.username, styles.password]}>Password*</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[styles.inputUsername, { paddingRight: 30, position: 'relative' }]}
              placeholder="Your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}></TextInput>
            <Image
              source={require('../../../image/ic_view512.png')}
              style={{ width: 22, height: 22, position: 'absolute', right: 0, marginRight: 14 }}
              resizeMode='cover'
            />
          </View>
        </View>

        {/* Check Remember */}
        {/* <View style={styles.viewRemember}>
        <View style={styles.viewCheckBox}>
          <BouncyCheckbox onPress={() => { }} />
          <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: 'Poppins' }}>Remember</Text>
        </View>
        <Text style={{ color: '#5890FF', fontSize: 14, fontWeight: '400', fontFamily: 'Poppins' }}>Forgot the password ?</Text>
      </View> */}

        {/* Register button*/}
        <View style={styles.buttonLogin}>
          <Pressable style={styles.wrapperCustom} onPress={handleRegister}>
            <Text style={styles.textPressable}>Signup</Text>
          </Pressable>
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
          <Text>Already have an account</Text>
          <Pressable
            onPress={gotoLogin}>
            <Text style={{ color: 'black', marginLeft: 8, fontWeight: '800' }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
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
    width: 25,
    height: 25,
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
    marginTop: 17,
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
    marginTop: 48,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#4E4B66'
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
  hello: {
    color: '#1877F2',
    fontSize: 48,
    fontWeight: '700',
  },
  container: {
    backgroundColor: 'white',
    padding: 24,
    flex: 1,
  }
})