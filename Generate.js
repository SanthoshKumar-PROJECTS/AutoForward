import { Image, StyleSheet, Text, TouchableOpacity, ToastAndroid, View, clipb } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Clipboard from '@react-native-clipboard/clipboard';

const Generate = () => {
    const textToCopy = '1Qas3m4';
    const handleCopyToClipboard = async () => {
        await Clipboard.setString(textToCopy);
        ToastAndroid.show('Text copied to clipboard', ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./Images/truss.png')} style={{ alignSelf: 'center', marginLeft: 15, width: 40, height: 40 }} />
                <Text style={{ color: 'white', fontSize: 23, alignSelf: 'center', fontWeight: '500', marginLeft: 90 }}>Truss</Text>
                <FontAwesome
                    name='refresh'
                    size={30}
                    color={'silver'}
                    style={{ alignSelf: 'center', marginLeft: 110 }}
                />
            </View>
            <View style={styles.main}>
                <Text style={styles.textH}>Permissions</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textB}>Generate Token</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{textToCopy}</Text>
                <TouchableOpacity onPress={handleCopyToClipboard} style={styles.copyButton}>
                    <Text style={styles.copyButtonText}>Tap to copy the code</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Generate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 60,
        backgroundColor: '#191970',
        flexDirection: 'row'
    },
    main: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'black',
        marginLeft: 50,
        marginRight: 50,
        marginTop: 70,
        marginBottom: 170,
    },
    textH: {
        color: 'black',
        marginLeft: 15,
        marginTop: -25,
        fontSize: 18,
        fontWeight: '500',
    },
    textP: {
        color: 'black',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: -15,
        fontSize: 17
    },
    button: {
        borderWidth: 2.5,
        borderColor: 'black',
        height: 35,
        width: 150,
        alignSelf: 'center',
        marginTop: 70,
    },
    textB: {
        color: 'black',
        fontSize: 17,
        alignSelf: 'center',
        marginTop: 3,
        fontWeight: '500',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 50,
        color: 'black',
        textAlign: 'center'
    },
    copyButton: {
        padding: 10,
        borderRadius: 5,
    },
    copyButtonText: {
        color: 'gray',
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 30,
    },
})