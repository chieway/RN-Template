import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CHANGE_LOGIN_STATE} from '../../constants/user';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.user.isLogin);
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleLogin = () => {
    const {username, password} = state;
    if (username === 'Admin' && password === 'Admin') {
      dispatch({
        type: CHANGE_LOGIN_STATE,
        isLogin: true,
      });
      // navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>JueJin</Text>
        <Text style={styles.subTitle}>一个开发者社区</Text>
      </View>

      <View style={styles.loginForm}>
        <View style={styles.loginItem}>
          <Text style={styles.label}>用户名：</Text>
          <TextInput
            style={styles.loginInput}
            value={state.username}
            clearButtonMode="always"
            onChangeText={(e) => setState({...state, username: e})}
          />
        </View>
        <View style={styles.loginItem}>
          <Text style={styles.label}>密码：</Text>
          <TextInput
            style={styles.loginInput}
            value={state.password}
            clearButtonMode="always"
            onChangeText={(e) => setState({...state, password: e})}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  head: {
    width: '100%',
    marginBottom: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4285f7',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    color: '#4285f7',
  },
  loginForm: {},
  loginItem: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginVertical: 10,
  },
  loginInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  loginBtn: {
    backgroundColor: '#4285f7',
    height: 60,
    margin: 20,
    borderRadius: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 60,
  },
});
