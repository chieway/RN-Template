import React from 'react';
import {View,Text, Button,StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {CHANGE_LOGIN_STATE} from '../../constants/user';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch({
      type: CHANGE_LOGIN_STATE,
      isLogin: false,
    });
  };

  return (
    <View style={Styles.container}>
      <Text>Home</Text>
      <Button title="to detail" onPress={() => navigation.navigate('Detail')} />
      <Button title="登出" onPress={logOut} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
