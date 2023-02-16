import { StyleSheet, Text, TextInput, View, Pressable, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useCallback } from 'react'
import * as ImagePicker from 'react-native-image-picker';
import { NewsContext } from '../NewsContext';
const ProfileUpdate = (props) => {
  const { navigation } = props;
  const [response, setResponse] = useState(null);

  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setimage] = useState('');

  const { onUpdateProfile, onUploadImage } = useContext(NewsContext);


  const imageResult = async (response) => {
    setResponse(response);
    response = response.assets[0];
    const formData = new FormData();
    formData.append('image', {
      uri: response.uri,
      type: response.type,
      name: response.fileName,
    });
    console.log(formData);
    const result = await onUploadImage(formData);
    setimage(result.data.path);

    console.log("Image link result: " + result.data.path);
  };

  const onButtonPress = useCallback((type) => {
    const options = {
      saveToPhoto: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    }
    if (type === 'capture') {
      ImagePicker.launchCamera(options, imageResult);
    } else {
      ImagePicker.launchImageLibrary(options, imageResult);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 24, flex: 1 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          <Pressable onPress={() => { }}>
            <Image
              style={{ width: 18, height: 18 }}
              resizeMode='cover'
              source={require('../../../image/ic_back512black.png')}
            />
          </Pressable>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Fill your profile</Text>
          <Image
            style={{ width: 18, height: 18 }}
            resizeMode='cover'
            source={require('../../../image/ic_option512_2.png')}
          />
        </View>

        {/* Main */}
        <View>
          <View style={{ alignItems: 'center' }}>
            <Pressable
              style={{ position: 'relative', width: 140, height: 140, borderRadius: 70, borderWidth: 1, borderStyle: 'dotted' }}
              onPress={() => { onButtonPress('capture') }}>
              {response?.assets &&
                response?.assets.map(({ uri }) => (
                  <View key={uri}>
                    <Image
                      resizeMode="cover"
                      resizeMethod="scale"
                      style={{ height: 140, width: 140, borderRadius: 70 }}
                      source={{ uri: uri }}
                    />
                  </View>
                ))}
              <Image
                style={styles.imgProfileCamera}
                resizeMode='cover'
                source={require('../../../image/ic_camera512.png')}
              />
            </Pressable>

            <View>
              <Text style={styles.username}>Username*</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={[styles.inputUsername, { paddingRight: 30}]}
                  value={username}
                  onChangeText={setUsername}
                  placeholder='Enter your username'></TextInput>
              </View>
            </View>

            <View>
              <Text style={[styles.username, styles.password]}>Address*</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={[styles.inputUsername, { paddingRight: 30 }]}
                  value={address}
                  onChangeText={setAddress}
                  placeholder='Enter your address'></TextInput>
              </View>
            </View>

            <View>
              <Text style={[styles.username, styles.password]}>Email*</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={[styles.inputUsername, { paddingRight: 30}]}
                  value={email}
                  onChangeText={setEmail}
                  placeholder='Enter your email'></TextInput>
              </View>
            </View>

            <View>
              <Text style={[styles.username, styles.password]}>Phone number*</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={[styles.inputUsername, { paddingRight: 30}]}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder='Enter your phone'></TextInput>
              </View>
            </View>

            {/* Publish */}
            <View style={{flexDirection: 'row', height: 50, marginTop: 50}}>
              <TouchableOpacity
                onPress={() => [onUpdateProfile(username, address, phone, image), navigation.navigate('ProfileUpdate')]}
                style={{flex: 1, paddingHorizontal: 24, paddingVertical: 13, borderRadius: 6, backgroundColor: '#1877F2', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: '600', fontSize: 16, fontWeight: 'bold', color: 'white' }}>Update</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default ProfileUpdate

const styles = StyleSheet.create({
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
    color: '#4E4B66'
  },
  password: {
    marginTop: 16,
  },
  imgProfileCamera: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 17,
  },
  imgProfile: {
    flex: 1,
    width: 140,
    height: 140,
  }
})