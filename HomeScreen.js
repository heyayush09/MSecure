import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import extractUrls from "./urlUtils";

const HomeScreen = ({ navigation }) => {
    const [inputText, setInputText] = useState('');
  
    const handleCheck = () => {
      const urls = extractUrls(inputText);
  
      // Navigate to OutputScreen and pass the URLs as params
      navigation.navigate('Output', { urls });
    };

  return (
    <View style={styles.container}>
      <Image source={require('./MSecure_logo_Full.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Paste Message or Links"
        placeholderTextColor="#aaa"
        multiline
        textAlignVertical="top"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />

      <Button
        title="Check"
        onPress={handleCheck}
        color="#4CAF50" // Green color
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a2a2a', // Dark blue-black theme
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    logo: {
      width: 200,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 200,
      backgroundColor: '#333',
      color: '#fff',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
    },
    debugArea: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#444',
      borderRadius: 5,
    },
    debugText: {
      color: '#fff',
    },
  });
  

export default HomeScreen;
