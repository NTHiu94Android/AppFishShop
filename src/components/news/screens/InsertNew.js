import { Pressable, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useCallback } from 'react'

import * as ImagePicker from 'react-native-image-picker';
import { NewsContext } from '../NewsContext';

const InsertNew = (props) => {
  const { navigation } = props;
  const { onAddNews, onUploadImage } = useContext(NewsContext);

  const [response, setResponse] = useState(null);
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');
  const [image, setimage] = useState('');

  const imageResult = async (response) => {
    setResponse(response);
    response = response.assets[0];
    const formData = new FormData();
    formData.append('image', {
      uri: response.uri,
      type: response.type,
      name: response.fileName,
    });
    console.log("FormData: ", formData);
    const result = await onUploadImage(formData);
    setimage(result.data.path);
    console.log("Fail: " + result.data.path);
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
    <View style={{ padding: 24, flex: 1 }}>
      {/* Header */}
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
        <Pressable onPress={() => { }}>
          <Image
            style={{ width: 18, height: 18 }}
            resizeMode='cover'
            source={require('../../../image/ic_back512black.png')}
          />
        </Pressable>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Create News</Text>
        <Image
          style={{ width: 18, height: 18 }}
          resizeMode='cover'
          source={require('../../../image/ic_option512_2.png')}
        />
      </View> */}

      {/* Insert image */}
      {/* <Image
        style={{ width: 18, height: 18, marginBottom: 4 }}
        resizeMode='cover'
        source={require('../../../image/ic_plus512.png')}
      />
      <Text>Add Photo</Text> */}
      {/* <TouchableOpacity
        style={{ height: 183, width: '100%', borderColor: 'black', borderStyle: 'dashed', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => onButtonPress('capture')}>

        {response?.assets &&
          response?.assets.map(({ uri }) => (
            <View key={uri}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{ height: 100, width: 100, }}
                source={{ uri: uri }}
              />
            </View>
          ))}
      </TouchableOpacity> */}


      {/* Text input */}
      {/* <TextInput
        style={{ width: '100%', borderBottomWidth: 1, borderColor: '#c4c4c4', fontSize: 24 }}
        placeholder='News title'
        value={title}
        onChangeText={settitle} />
      <TextInput
        style={{ width: '100%', borderBottomWidth: 1, borderColor: '#c4c4c4', fontSize: 16 }}
        placeholder='Add news/articles'
        value={content}
        onChangeText={setcontent} /> */}

      {/* Publish */}
      {/* <TouchableOpacity
        onPress={() => onAddNews(title, content, image)}
        style={{ paddingHorizontal: 24, paddingVertical: 13, borderRadius: 6, backgroundColor: '#1877F2', width: 110, }}
      >
        <Text style={{ fontWeight: '600', fontSize: 16, fontWeight: 'bold', color: 'white' }}>Publish</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default InsertNew

const styles = StyleSheet.create({})