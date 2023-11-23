import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Test = () => {

const HandleOnPress = () => {

const API_KEY = "N6VK0ZT-G2HM5H3-KPRNEQ3-3N13JMV";

fetch("https://app.ayrshare.com/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        post: "Today is a great day!", // required
        platforms: ["facebook"], // required
        mediaUrls: ["https://img.freepik.com/free-photo/newborn-baby-enveloped-blue-scarf-sleeps-white-pillow_8353-848.jpg?size=626&ext=jpg&ga=GA1.1.710775697.1700468846&semt=sph"] //optional
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch(console.error);
    } 

  return (
    <View style={{flex:1}}>
      <Text>Test</Text>
      <TouchableOpacity onPress={HandleOnPress}>
        <Text>Click to Share</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Test;

const styles = StyleSheet.create({})