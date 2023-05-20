import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const akun = () => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <StatusBar translucent backgroundColor="#fff" barStyle={'dark-content'} />
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 30,
          // flexDirection: 'row',
        }}>
        <TouchableOpacity style={{marginTop: 10}}>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/user.png')}
          style={{
            width: 60,
            height: 60,
            marginHorizontal: 10,
            marginVertical: 20,
          }}
        />
        <View style={{marginHorizontal: 10, marginVertical: 30}}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>
            User
          </Text>
          <Text style={{color: '#000', fontSize: 16}}>@username1234</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#000',
          marginHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
        }}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#000'}}>
          Edit Profil
        </Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#eaeaea',
          marginVertical: 20,
          height: 600,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcons name="hourglass-empty" size={50} color="#fb6107" />
        <Text style={{color: '#212121', fontSize: 20}}>
          Belum ada aktivitas memasak
        </Text>
      </View>
    </View>
  );
};

export default akun;
