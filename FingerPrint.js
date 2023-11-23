import React, { useEffect, useState } from 'react';
import TouchID from 'react-native-touch-id'
import { View, Text, TouchableOpacity, useColorScheme, SafeAreaView, StatusBar, BackHandler } from 'react-native';
import { Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkmode = useColorScheme() === 'dark';

  const [isAuth,setIsAuth] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkmode ? Colors.darker : Colors.lighter,
  };

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  useEffect(()=>{
    handleBiometric();
  });

  const handleBiometric = () => {
    TouchID.isSupported(optionalConfigObject).then(biometryType=>{
      if (biometryType === 'FaceID') {
        console.log('FaceID is supported.');
    } else {
        console.log('TouchID is supported.');
        if(isAuth){
          return null;
        }
        TouchID.authenticate('',optionalConfigObject)
        .then(success => {
          console.log('Success',success);
          setIsAuth(success);
        })
        .catch(err => {
          BackHandler.exitApp();
        });
    }
    });
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkmode ? 'light-content' : 'dark-content'}/>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
