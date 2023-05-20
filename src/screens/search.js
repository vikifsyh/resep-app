import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const search = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar translucent backgroundColor="#fff" barStyle={'dark-content'} />
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 50,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{marginTop: 10}}>
          <Icon name="arrow-left" size={30} color="#252525" />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              borderRadius: 10,
              backgroundColor: '#e5e5e5',
              paddingHorizontal: 10,
              marginHorizontal: 10,
            }}
            placeholder="Cari Resep"
            placeholderTextColor="grey"
          />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 20,
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
          Terbaru
        </Text>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
          <Text style={{color: '#0000ff'}}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default search;
