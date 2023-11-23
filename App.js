import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Navigator from './Navigator'
import OTP from './OTP'
import Permission from './Permission'
import Generate from './Generate'
import Test from './Test'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <OTP/> */}
      {/* <Navigator/> */}
      {/* <Permission/> */}
      {/* <Generate/> */}
      <Test/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})
