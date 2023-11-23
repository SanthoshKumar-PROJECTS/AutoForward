import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Permission = () => {
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
                <Text style={styles.textP}>A paragraph of text with an unassigned link</Text>
                <Text style={styles.textP}>A second row of text with a web link</Text>
                <Text style={styles.textP}>An icon inline with text</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textB}>Access Permissions</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Permission;

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
        fontWeight:'500',
    },
    textP: {
        color: 'black',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: -15,
        fontSize: 17
    },
    button:{
        borderWidth:2.5,
        borderColor: 'black',
        height:35,
        marginLeft:50,
        marginRight:20,
        marginTop:240,
    },
    textB:{
        color:'black',
        fontSize:17,
        alignSelf:'center',
        marginTop:3
    }
})