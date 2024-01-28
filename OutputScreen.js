import React from 'react';
import { View, Text } from 'react-native';

const OutputScreen = ({ route }) => {
  const { urls } = route.params;

  return (
    <View>
      <Text>List of URLs:</Text>
      {urls.map((url, index) => (
        <Text key={index}>{url}</Text>
      ))}
    </View>
  );
};

export default OutputScreen;
