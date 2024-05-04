import {Alert, Button, Image, Text, TextInput, View, ToastAndroid} from 'react-native';
import React, { useState } from 'react';

export default function App(){
  const [text, setText] = React.useState('');

  const checkPalindrome = () => {
    const reversedText = text.split('').reverse().join('');
    if (text === reversedText) {
      Alert.alert('Palindrome', 'Teks ini adalah Palindrome.');
      ToastAndroid.show('Teks ini adalah Palindrome!', ToastAndroid.SHORT);
    } else {
      Alert.alert('Not Palindrome', 'Teks ini bukan Palindrome.');
      ToastAndroid.show('Teks ini bukan Palindrome!', ToastAndroid.SHORT);
    }
  }

  const handleTextChange = (text) => {
    setText(text);
    if (text.length > 10) {
      checkPalindrome();
    }
  }
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>LOGIN WOYYY</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Email atau Username"
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button title="Login" onPress={() => Alert.alert('button is click.')}/>
      {/* ToastAndroid.show('button is click.') */}
      <Text>Belum punya akun? Daftar </Text>
      <Image
        source={{
          uri: 'https://jatengprov.go.id/wp-content/uploads/2022/02/IMG-20220228-WA0034-1.jpg',
        }}
        style={{width: 200, height: 200, margin: 15}}
      />
      <Text>Palindrome Validatore</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Masukkan Teks Disini"
        value={text}
        onChangeText={handleTextChange}
      />
      <Button title="Cek Palindrome" onPress={checkPalindrome}/>
    </View>
  );
}