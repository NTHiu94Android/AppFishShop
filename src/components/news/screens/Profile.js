import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { NewsContext } from '../NewsContext';

const Profile1 = (props) => {
  const { navigation } = props;

  const { imgProfile, name, phone } = useContext(NewsContext);
  console.log("Profile image: ", imgProfile);

  const settings = () => {
    navigation.navigate('ProfileUpdate');
  }
  return (
    <View style={styles.container}>
      
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.numberItemProfile}>Profile</Text>
        <TouchableOpacity style={styles.imgSettings} onPress={settings}>
          <Image
            style={styles.imgSettings}
            source={require('../../../image/ic_settings.png')}
            resizeMode='cover'
          />
        </TouchableOpacity>
      </View> */}

      {/* Profile */}
      {/* <View style={styles.profile}>
        <Image
          style={styles.imgProfile}
          source={{
            uri: imgProfile + "",
          }}
          resizeMode='cover'
        />
        <View style={styles.boxItemProfile}>
          <View style={styles.itemProfile}>
            <Text style={styles.numberItemProfile}>2156</Text>
            <Text style={styles.textItemProfile}>Followers</Text>
          </View>
          <View style={styles.itemProfile}>
            <Text style={styles.numberItemProfile}>567</Text>
            <Text style={styles.textItemProfile}>Following</Text>
          </View>
          <View style={styles.itemProfile}>
            <Text style={styles.numberItemProfile}>23</Text>
            <Text style={styles.textItemProfile}>News</Text>
          </View>
        </View>

      </View> */}

      {/* <Text style={[styles.numberItemProfile, { marginTop: 16 }]}>{name + ""}</Text>
      <Text style={styles.textItemProfile}>{phone + ""}</Text> */}

      {/* Button */}
      {/* <View style={styles.viewButton}>
        <TouchableOpacity
          style={[styles.button, { marginRight: 16 }]} onPress={settings}>
          <Text style={styles.textButton}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} onPress={() => { }}>
          <Text style={styles.textButton}>Website</Text>
        </TouchableOpacity>
      </View> */}

      {/* FlatLish */}


    </View>
  )
}

export default Profile1

const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontWeight: '900',
    fontSize: 14,
  },
  button: {
    flex: 1,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16
  },
  textItemProfile: {
    color: '#4E4B66',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
  },
  numberItemProfile: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    fontWeight: 'bold',
    lineHeight: 24,
  },
  itemProfile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxItemProfile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgProfile: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 50,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgSettings: {
    width: 19,
    height: 22,
    right: 0,
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 13,
    position: 'relative',
  },
  container: {
    flex: 1,
    padding: 24
  }
})