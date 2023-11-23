import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment-timezone';

const messages = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hey! How are you?',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-11-06T10:30:00Z',
  },
  {
    id: '2',
    name: 'Jane Smith',
    message: 'Hey Erin, thanks for shopping at Whitewater Clothes! We have tons of exclusive upcoming deals for our text subscribers. Stay tuned. Reply STOP to unsubscribe.',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-11-05T15:45:00Z',
  },
  {
    id: '3',
    name: 'Steve Smith',
    message: 'Hey Tim, we’re looking forward to seeing you today at 3PM at LJ Hair Salon. Call (123) 456-7891 with any questions. ',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-11-04T12:05:00Z',
  },
  {
    id: '4',
    name: 'John Cena',
    message: 'Don’t forget! Our webinar is today at 3 PM EST. See you soon!',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-02-14T14:30:00Z',
  },
  {
    id: '5',
    name: 'Daniel',
    message: 'Hey! How are you?,Are we still meeting tomorrow or what,tell me when will we meet?',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-05-01T01:40:00Z',
  },
  {
    id: '6',
    name: 'The Rock',
    message: 'Hi Kim, we have scheduled a DEMO of our new product on Oct 8 at 10 AM. Please reply with YES or NO to confirm.',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-06-01T02:15:00Z',
  },
  {
    id: '7',
    name: 'William',
    message: 'Hey Jen, thanks for contacting Shine Windows. To complete your booking please click the link and choose an available time: (link). Questions? Give us a call at (775) 213-9087.Hope you like using our product so far! Just wanted to see how things are going. Do you have any questions or concerns I can help with?',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-07-07T00:00:00Z',
  },
  {
    id: '8',
    name: 'Peter',
    message: 'Hey! How are you?,Are we still meeting tomorrow or what,tell me when will we meet?',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-10-05T13:25:00Z',
  },
  {
    id: '9',
    name: 'Jimmy',
    message: 'Thanks for your recent purchase :) We’d love to hear your feedback. What’s one thing we could do to make your experience even better?',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-01-24T12:55:00Z',
  },
  {
    id: '10',
    name: 'Warner',
    message: 'Hi Dan, it looks like you had an issue with your order. Sorry about that. We’re working on it right now and will be in touch with updates within 24 hours.',
    profileImage: require('./Images/user.png'),
    timestamp: '2023-09-01T01:30:00Z',
  },
  // Add more message objects as needed
];

const MessageInbox = () => {

  const navigation = useNavigation();

  const handleMessagePress = (item) => {
    navigation.navigate('FullMessage', { user: item });
  };

  const renderMessageItem = ({ item }) => {

    const messageDate = moment(item.timestamp).tz('Asia/Kolkata');
    const currentDate = moment().tz('Asia/Kolkata');

    let displayTime;
    if (messageDate.isSame(currentDate, 'day')) {
      displayTime = messageDate.format('hh:mm A');
    } else if (messageDate.isSame(currentDate.clone().subtract(1, 'day'), 'day')) {
      displayTime = 'Yesterday';
    } else {
      displayTime = messageDate.format('DD/MM/YYYY');
    }

    return(
    <TouchableOpacity onPress={() => handleMessagePress(item)}>
      <View style={styles.item}>
        <Image source={item.profileImage} style={styles.profileImage} />
        <View style={styles.messageContent}>
          <Text style={styles.messageName}>{item.name}</Text>
          <View style={styles.messageDetails}>
          <Text style={styles.messageText}numberOfLines={1}>{item.message}</Text>
          </View>
          <Text style={styles.timestampText}>{displayTime}</Text>
        </View>
      </View>
      <View style={{borderBottomWidth:0.5,borderBottomColor:'gray',}}/>
    </TouchableOpacity>
  )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('./Images/truss.png')} style={{alignSelf:'center',marginLeft:15,width:40,height:40}} />
        <Text style={{color:'white',fontSize:23,alignSelf:'center',fontWeight:'500',marginLeft:90}}>Truss</Text>
        <FontAwesome
        name='refresh'
        size={30}
        color={'silver'}
        style={{alignSelf:'center',marginLeft:110}}
        />
      </View>
      <View style={styles.main}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
      />
      </View>
    </View>
  )
}

export default MessageInbox;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  header:{
    height:60,
    backgroundColor:'#191970',
    flexDirection:'row'
  },
  main:{
    flex:1,
    backgroundColor:'#dcdcdc'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  messageContent: {
    marginLeft: 0.1,
  },
  messageName: {
    fontWeight: '400',
    color: 'black',
    fontSize:18
  },
  messageText: {
    color: 'gray',
    maxWidth: 200,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 16,
    opacity:1
  },
  timestampText: {
    color: 'gray',
   marginLeft:210,
   marginTop:-18
  },
  messageDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:5
  },
})
