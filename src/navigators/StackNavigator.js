import React, {useState} from 'react';
import {} from 'react-native';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

import Login from '../pages/Login';

const Stack = createStackNavigator();

function InitScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
    </Stack.Navigator>
  );
}

export default function StackNavigator() {
  const isLogin = useSelector((state) => state.user.isLogin);
  // const [isLogin, setIsLogin] = useState(false);

  return isLogin ? <TabNavigator /> : <InitScreen />;

  // return (
  //   // <Stack.Navigator>
  //   //   {stackList.map((item, index) => (
  //   //     <Stack.Screen
  //   //       name={item.name}
  //   //       component={item.component}
  //   //       key={item.name + index}
  //   //     />
  //   //   ))}
  //   // </Stack.Navigator>
  // );
}
