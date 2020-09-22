import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CHANGE_LOGIN_STATE} from '../../constants/user';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.user.isLogin);

  const handleLogin = () => {
    dispatch({
      type: CHANGE_LOGIN_STATE,
      isLogin: true,
    });
    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <Text>Login</Text>
      <Button title="登录" onPress={handleLogin} />
    </SafeAreaView>
  );
}
