import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import Modal from 'react-native-modal';

const home = () => {
  const [kategori, setKategori] = useState([
    {
      nama: 'Semua',
    },
    {
      nama: 'Sarapan',
    },
    {
      nama: 'Makan Siang',
    },
    {
      nama: 'Makan Malam',
    },
    {
      nama: 'Minuman',
    },
    {
      nama: 'Dessert',
    },
  ]);
  const [nama, setNama] = useState([
    {
      makanan: 'Ayam Bakar',
      image: require('../assets/ayam.jpg'),
      route: 'detailAyam',
    },
    {
      makanan: 'Lumpia',
      image: require('../assets/lumpia.jpg'),
    },
    {
      makanan: 'Rendang',
      image: require('../assets/rendang.jpg'),
    },
    {
      makanan: 'Nasi Uduk',
      image: require('../assets/uduk.jpg'),
    },
    {
      makanan: 'Pempek Palembang',
      image: require('../assets/pempek.jpg'),
    },
    {
      makanan: 'Opor Ayam',
      image: require('../assets/opor.jpg'),
    },
    {
      makanan: 'Soto Ayam',
      image: require('../assets/soto.jpg'),
    },
    {
      makanan: 'Sate Kambing',
      image: require('../assets/sate.jpg'),
    },
  ]);

  const [kategoriSeleksi, setKategoriSeleksi] = useState({
    nama: 'Semua',
  });
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar translucent backgroundColor="#fff" barStyle={'dark-content'} />
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: -10,
          marginTop: 60,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fb6107'}}>
          Hello User,
        </Text>
        <View
          style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
          <Image
            source={require('../assets/user.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <Text style={{color: '#000', fontSize: 16}}>
          Apa yang ingin kamu masak hari ini?
        </Text>
      </View>
      <TextInput
        style={{
          borderRadius: 10,
          backgroundColor: '#e5e5e5',
          marginHorizontal: 20,
          marginVertical: 20,
          paddingHorizontal: 10,
        }}
        placeholder="Cari Resep"
        placeholderTextColor="grey"
      />
      <View>
        <FlatList
          data={kategori}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginRight: 5,
                backgroundColor:
                  kategoriSeleksi.nama == item.nama ? '#fb6107' : '#fff',
                elevation: 3,
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: kategoriSeleksi.nama == item.nama ? '#fff' : '#252525',
                }}>
                {item.nama}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatGrid
          itemDimension={130}
          data={nama}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
              <TouchableOpacity
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  elevation: 3,
                }}>
                <ImageBackground
                  source={item.image}
                  style={{flex: 1, width: 170, height: 170}}
                  imageStyle={{borderRadius: 10}}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    }}></View>
                  <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                        paddingBottom: 10,
                      }}>
                      {item.makanan}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default home;
