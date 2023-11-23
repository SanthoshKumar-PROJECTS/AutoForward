import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Replace this logic with your authentication method.
    // Check email and password, and perform login actions.
    // Replace this logic with your authentication logic (e.g., API call to verify credentials).
    if (email === 'Tsd' && password === 'Tsd') {
      setLoggedIn(true);
      navigation.navigate('MessageInbox');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <View style={{flex:1,backgroundColor:'#2c3e50'}}>
      <Image source={require('./Images/truss.png')} style={styles.tickIcon} />
      <View style={{height:400,backgroundColor:'white',marginTop:185,borderTopLeftRadius:10,borderTopRightRadius:10}}>
        <View style={{height:230,backgroundColor:'white',marginTop:-115,margin:20,borderRadius:15,elevation:10}}>
        <TextInput
          style={styles.input}
          label="Email"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          value={email}
        />
        <View style={styles.eye}>
          <TextInput
            style={styles.input}
            label="Password"
            placeholderTextColor={'gray'}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
          />
          {password.length > 0 && (
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color={'black'}
                style={{ top:42.5,left:-33}}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.bottomText}>
        Don't have an account?  <Text style={styles.signUpText}>Sign Up</Text>
      </Text>

      {loggedIn && <Text style={styles.successText}>Login Successful!</Text>}
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: 'transparent',
    borderBottomWidth: 1, // You can remove this line if you want to completely remove the bottom line
    borderColor: 'gray',
    marginBottom: 2,
    color: 'gray',
    margin:15,
  },
  eye: {
    flexDirection: 'row'
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 15,
    margin:15,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomText: {
    color: 'black',
    alignSelf:'center'
  },
  signUpText: {
    color: '#3498db',
  },
  successText: {
    marginTop: 10,
    color: 'green',
    fontSize: 18,
    textAlign:'center'
  },
  tickIcon: {
    width: 100,
    height: 100,
    alignSelf:'center',
    marginTop:20
  },
})
