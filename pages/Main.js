import React, { useState, useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Button,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import SmsAndroid from 'react-native-get-sms-android'
import BackgroundTimer from 'react-native-background-timer'
// import {from, to, auth} from '../config'
let hasPermission = false
let latestSMS = ""
let myTimer
const requestSMSPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      {
        title: "I need this!",
        message:
          "Get text.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Success", "You can go ahead now.")
      hasPermission = true
    } else {
      console.log("Denied.");
    }
  } catch (err) {
    console.warn(err);
  }
};

const sendEmail = (message, alert) => {
  console.log(message)
  if (!hasPermission) {
      Alert.alert("No permission.")
      return
  } 
  fetch("https://api.sendgrid.com/v3/mail/send", {
  body: "{\"personalizations\": [{\"to\": [{\"email\": \""+to+"\"}]}],\
  \"from\": {\"email\": \""+from+"\"},\"subject\": \"Sending with SendGrid is Fun\"\
  ,\"content\": [{\"type\": \"text/plain\", \"value\": \"" + message + "\"}]}",
  headers: {
    Authorization: "Bearer "+ auth,
    "Content-Type": "application/json"
  },
  method: "POST"
  }).then(res => console.log(res))
  if (alert) Alert.alert("Cool", "Your latest text has been sent out: "+message)
}

const pollNewSMS = () => {
  if (hasPermission) {
    Alert.alert("Polling started.")
    BackgroundTimer.runBackgroundTimer(() => {
      getSMS(false)
       ToastAndroid.show("Polling", ToastAndroid.SHORT)
     }, 10000)
    // myTimer = setInterval(()=>{
    //   getSMS(false)
    //   ToastAndroid.show("Polling", ToastAndroid.SHORT)
    // }, 30000)
  } else {
    Alert.alert("Please request permission first.")
  }
}
const endPoll = () => {
  //clearInterval(myTimer)
  BackgroundTimer.stopBackgroundTimer()
  Alert.alert("Polling Ended")
}
const getSMS = (alert) => {
  console.log(latestSMS)
  const filter = {maxCount: 3}
  try {
    SmsAndroid.list(
      JSON.stringify(filter), ()=>{},
      (count, smsList) => {
        console.log(smsList)
        if (count == 0) {
          if(alert) Alert.alert("Zero Text")
          return
        }
        const arr = JSON.parse(smsList)
        console.log(arr[0])
        if (arr[0].body !== latestSMS) {
          latestSMS = arr[0].body
          sendEmail(arr[0].body, false)
        }
        if (alert) {Alert.alert("From: "+arr[0].address, arr[0].body)}
      }
    )
  } catch (e) {
    Alert.alert("Sorry, please request permission first.")
  }
  
}


const Main = ({navigation}) => {
    useEffect(() => {
        if (hasPermission){
    
        
        SmsAndroid.list(
            "{}", ()=>{},
            (count, smsList) => {
              if (count == 0) return;
              latestSMS = JSON.parse(smsList)[0].body
          })
        }
      })
    return (
    <View style={styles.outer}> 
    <View style={styles.container}>
     
      <Text style={styles.text}>SMS2Email</Text>
      <Button style={styles.btn} title="Request Permission" onPress={requestSMSPermission} />
     
      <Button style={styles.btn} title="Get Latest SMS" onPress={()=>getSMS(true)}/>
      <Button style={styles.btn} title="Send Email" onPress={() => sendEmail(latestSMS, true)}/>
      <View style={styles.row}>
      <Button style={styles.btn} title="Start Polling" onPress={pollNewSMS}/>
      <Button style={styles.btn} title="End Polling" onPress={endPoll}/></View>
    </View></View>)
}


const styles = StyleSheet.create({
    outer:{ 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      flex: 0.5,
      justifyContent: "space-between",
      alignItems: "center",
    },
    row: {
      width: 300,
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    text: {
      fontSize: 30,
      
    },
    btn: {
      marginVertical: 10,
      height:20,
      padding: 30
    },
    buttonContainer: {
      flexDirection: "column",
      justifyContent: "space-around"
    }
  })

export default Main