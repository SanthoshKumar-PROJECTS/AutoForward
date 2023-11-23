import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageInbox from './MessageInbox';
import FullMessage from './FullMessage';
import OTP from './OTP';
import Success from './Success';
import Signup from './Signup';
import Login from './Login';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
       <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Success" component={Success} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MessageInbox" component={MessageInbox} options={{ headerShown: false }} />
        <Stack.Screen name="FullMessage" component={FullMessage} options={({ route }) => ({
          title: route.params.user ? route.params.user.name : '', headerTitleStyle: { fontSize: 20, color: 'black' },
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;