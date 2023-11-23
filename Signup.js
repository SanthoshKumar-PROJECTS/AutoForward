import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Signup = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    // Replace this logic with your authentication method.
    // Check email and password, and perform login actions.
    // Replace this logic with your authentication logic (e.g., API call to verify credentials).
    if (username && phoneNumber && email && password) {
      // Implement your signup logic here, e.g., API call to create a new user.
      setIsFormValid(true);
      navigation.navigate('OTP');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <View style={{flex:1,backgroundColor:'darkblue'}}>
      <Image source={require('./Images/truss.png')} style={styles.tickIcon} />
      <View style={{height:400,backgroundColor:'white',marginTop:185,borderTopLeftRadius:10,borderTopRightRadius:10}}>
        <View style={{height:375,backgroundColor:'white',marginTop:-187.5,margin:20,borderRadius:15,elevation:10}}>
        <TextInput
          style={styles.input}
          label="Username"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        
        <TextInput
          style={styles.input}
          label="Phone Number"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="numeric"
          value={phoneNumber}
        />

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
                style={{ top:42.5, left: -35 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.bottomText}>
        Already have an account?  <Text style={styles.signUpText}>Login</Text>
      </Text>

      {isFormValid && <Text style={styles.successText}>Signup Successful!</Text>}
      </View>
    </View>
  )
}

export default Signup;

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
    backgroundColor: '#000080',
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
    color: '#007bff',
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