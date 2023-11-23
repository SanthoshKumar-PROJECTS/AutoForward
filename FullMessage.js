import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment-timezone';

const FullMessage = ({ route }) => {

    const { user } = route.params;
    const messageDate = moment(user.timestamp).tz('Asia/Kolkata');
    const displayDateTime = messageDate.format('MMMM DD, YYYY - hh:mm A');

    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>{displayDateTime}</Text>
            <View style={styles.content}>
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{user.message}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#dcdcdc'
    },
    content: {
        flex: 1,
        padding: 20,
        alignSelf: 'flex-start'
    },
    messageContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        elevation:1
    },
    messageText: {
        fontSize: 14,
        color: 'black',
    },
    dateText: {
        fontSize: 13,
        color: 'gray',
        marginTop:10,
       alignItems:'center'
    },
})

export default FullMessage;

// import React from 'react';
// import { View, Text } from 'react-native';
// import moment from 'moment-timezone';

// const FullMessage = ({ route }) => {
//     const { message } = route.params;

//     const messageDate = moment(message.timestamp).tz('Asia/Kolkata');
//     const displayDateTime = messageDate.format('MMMM DD, YYYY - hh:mm A');

//     return (
//         <View style={styles.container}>
//             <Text style={styles.userName}>{message.name}</Text>
//             <Text style={styles.dateText}>{displayDateTime}</Text>
//             <Text style={styles.messageText}>{message.message}</Text>
//         </View>
//     );
// };

// const styles = {
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     userName: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     dateText: {
//         fontSize: 16,
//         color: 'gray',
//         marginBottom: 10,
//     },
//     messageText: {
//         fontSize: 18,
//         textAlign: 'center',
//     },
// };

// export default FullMessage;