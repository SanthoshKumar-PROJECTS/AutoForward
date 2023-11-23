import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const OTP = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const inputRefs = otp.map(() => useRef(null));
  const navigation = useNavigation();

  const handleOTPChange = (text, index) => {
    if (isNaN(text)) return;

    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[index] = text;
      return newOTP;
    });

    if (text && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleVerify = () => {
    const enteredOTP = otp.join('');

    if (enteredOTP.length === 6) {
      // Simulate successful OTP verification
      // In a real application, you would send the OTP to your server
      // for validation and handle the response accordingly.
      navigation.navigate('Success');
    } else {
      alert('Please enter a valid OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the 6-digit OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            ref={inputRefs[index]}
            value={value}
            onChangeText={(text) => handleOTPChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <Button
        icon={'login'}
        mode="contained"
        style={styles.verifyButton}
        onPress={handleVerify}
        theme={{ colors: { primary: 'blue' }}}>
        Authenticate
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-50
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color:'black'
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInput: {
    width: 45,
    height: 45,
    fontSize: 18,
    color:'green',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 8,
    marginHorizontal: 2,
  },
  verifyButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default OTP;
