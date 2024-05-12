import {Alert, Button, Image, Text, TextInput, View, ToastAndroid, ScrollView, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React, { useState } from 'react';

const data = [
  { id: '1', title: 'Polo Giordano', price: 'Rp 375.000', imageUrl: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/7/30/18777b83-7bb0-46da-8923-e5372a84e5fb.jpg' },
  { id: '2', title: 'Polo Giordano', price: 'Rp 450.000', imageUrl: 'https://media.karousell.com/media/photos/products/2023/12/28/polo_giordano_size_l_1703804470_ea4f925f_progressive.jpg' },
  { id: '3', title: 'Polo Giordano', price: 'Rp 400.000', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScs4MNFTuK5BIRjutdJsEfHWUeAC0FEWXlCE-0-Ye-Bw&s' },
  { id: '4', title: 'Rucas Pants', price: 'Rp 1.300.000', imageUrl: 'https://assets.voila.id/voila/images/product/rucas/2product-RCSGRNDCOMP001-Xms-2024-02-12T1545260700.jpeg' },
  { id: '5', title: 'Rucas Pants', price: 'Rp 1.500.000', imageUrl: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/26/fd844271-3027-4ffd-9e51-822e98286300.jpg' },
  { id: '6', title: 'Rucas Pants', price: 'Rp 1.800.000', imageUrl: 'https://img.lazcdn.com/g/p/a2483082bbbff4ed97c1639584de2173.jpg_720x720q80.jpg' },
  { id: '7', title: 'Hoodie BRTWL', price: 'Rp 250.000', imageUrl: 'https://img.lazcdn.com/g/p/25be639465560314e8c1af50835df53e.jpg_720x720q80.jpg' },
  { id: '8', title: 'Hoodie BRTWL', price: 'Rp 250.000', imageUrl: 'https://static.desty.app/desty-omni/20230531/3eaae9aa00d043fdbe90860d0a56f601.jpg?x-oss-process=image/resize,w_500/format,webp' },
  { id: '9', title: 'Hoodie BRTWL', price: 'Rp 250.000', imageUrl: 'https://id-test-11.slatic.net/p/648cdb93442db0cd2c64743e78b3e78f.jpg' },
  { id: '10', title: 'Rucas Shirt', price: 'Rp 750.000', imageUrl:'https://id-test-11.slatic.net/p/f99590ae406102b36ad0437807d8d2ef.jpg' },
  { id: '11', title: 'Rucas Shirt', price: 'Rp 1.000.000', imageUrl: 'https://img.lazcdn.com/g/ff/kf/S8cd0c6ca73184b32b9f831b808c5a49ad.jpg_720x720q80.jpg' },
  { id: '12', title: 'Rucas Shirt', price: 'Rp 900.000', imageUrl: 'https://media.karousell.com/media/photos/products/2024/4/23/rucas_the_initial_black_t_shir_1713893785_1912f0f9_progressive.jpg' },
  { id: '13', title: 'Nike Air Jordan & Cristian Dior', price: 'Rp 200.000.000', imageUrl: 'https://cdn.antaranews.com/cache/1200x800/2020/08/25/Air-Jordan-X-Dior.jpg' },
  { id: '14', title: 'Nike Air Max 97', price: 'Rp 2.500.000', imageUrl: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/2/4/11f0e2e8-7a8f-4dbc-84c9-d5718527b530.jpg' },
  { id: '15', title: 'Nike Air Jordan 1 Retro High Tie Dye', price: 'Rp 6.000.000', imageUrl: 'https://tinkerlust.s3.ap-southeast-1.amazonaws.com/products/9888120d-8e91-4323-92a9-47c46908f47c/original/1280x1280/13022023224614865_MP-18503-SU-1.jpg' },
];

export default function App(){
  // const [text, setText] = React.useState('');

  // const checkPalindrome = () => {
  //   const reversedText = text.split('').reverse().join('');
  //   if (text === reversedText) {
  //     Alert.alert('Palindrome', 'Teks ini adalah Palindrome.');
  //     ToastAndroid.show('Teks ini adalah Palindrome!', ToastAndroid.SHORT);
  //   } else {
  //     Alert.alert('Not Palindrome', 'Teks ini bukan Palindrome.');
  //     ToastAndroid.show('Teks ini bukan Palindrome!', ToastAndroid.SHORT);
  //   }
  // }

  // const handleTextChange = (text) => {
  //   setText(text);
  //   if (text.length > 100) {
  //     checkPalindrome();
  //   }
  // }
  // return (
  //   <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
  //     <Text>LOGIN WOYYY</Text>
  //     <TextInput
  //       style={{
  //         borderWidth: 1,
  //         borderColor: 'black',
  //         width: 200,
  //         height: 40,
  //         padding: 10,
  //         margin: 10,
  //         borderRadius: 10,
  //       }}
  //       placeholder="Email atau Username"
  //     />
  //     <TextInput
  //       style={{
  //         borderWidth: 1,
  //         borderColor: 'black',
  //         width: 200,
  //         height: 40,
  //         padding: 10,
  //         margin: 10,
  //         borderRadius: 10,
  //       }}
  //       secureTextEntry={true}
  //       placeholder="Password"
  //     />
  //     <Button title="Login" onPress={() => Alert.alert('button is click.')}/>
  //     {/* ToastAndroid.show('button is click.') */}
  //     <Text>Belum punya akun? Daftar </Text>
  //     <Image
  //       source={{
  //         uri: 'https://jatengprov.go.id/wp-content/uploads/2022/02/IMG-20220228-WA0034-1.jpg',
  //       }}
  //       style={{width: 200, height: 200, margin: 15}}
  //     />
  //     <Text>Palindrome Validatore</Text>
  //     <TextInput
  //       style={{
  //         borderWidth: 1,
  //         borderColor: 'black',
  //         width: 200,
  //         height: 40,
  //         padding: 10,
  //         margin: 10,
  //         borderRadius: 10,
  //       }}
  //       placeholder="Masukkan Teks Disini"
  //       value={text}
  //       onChangeText={handleTextChange}
  //     />
  //     <Button title="Cek Palindrome" onPress={checkPalindrome}/>
  //   </View>

  //   const data = [
  //     {id: 1, name: 'Jibril'},
  //     {id: 2, name: 'Mikail'},
  //     {id: 3, name: 'Israfil'},
  //     {id: 4, name: 'Izrail'},
  //     {id: 5, name: 'Munkar'},
  //     {id: 6, name: 'Fauzi'},
  //     {id: 7, name: 'Dhanil'},
  //     {id: 8, name: 'Khoirul'},
  //     {id: 9, name: 'Krisna'},
  //     {id: 10, name: 'Pras'},
  //     {id: 11, name: 'Nakir'},
  //     {id: 12, name: 'Raqib'},
  //     {id: 13, name: 'Atid'},
  //     {id: 14, name: 'Malik'},
  //     {id: 15, name: 'Ridwan'},
  //   ];
  //   const renderItem = ({item}: {item: {id:number; name: string}}) => {
  //     return (
  //     <Text style={{
  //       backgroundColor: 'white',
  //       padding: 10,
  //       fontSize: 20,
  //       borderRadius: 50,
  //       shadowOffset: {width: 0, height: 2},
  //       shadowOpacity: 0.8,
  //       shadowRadius: 10,
  //       elevation: 5,
  //       margin: 5,
  //     }}>
  //       {item.name}
  //     </Text>
  //   );
  // };
  //   return(
  //     <ScrollView>
  //       <FlatList
  //         data={data}
  //         renderItem={renderItem}
  //         keyExtractor={item => item.id.toString()}
  //       />
  //     </ScrollView>

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Text style={styles.largeHeaderText}>Outfit Starboy</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  largeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});