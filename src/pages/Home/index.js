import React from 'react';
import {View, Text,Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="to detail" onPress={() => navigation.navigate('Detail')} />
    </SafeAreaView>
  );
}
