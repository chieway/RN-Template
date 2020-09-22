import React from 'react';
import {View, Text,Button} from 'react-native';

export default function Detail({navigation}) {
  return (
    <View>
      <Text>Detail</Text>
      <Button title="登录" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
