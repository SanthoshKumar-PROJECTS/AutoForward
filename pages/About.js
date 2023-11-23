import React, { useState, useCallback, useEffect } from 'react';

import {StyleSheet, View, Text} from 'react-native'
export default function About() {
    return (
        <View style={styles.outer}><Text>Developed and maintained by GithubID: InfTkm. {'\n'}Leave comments in GitHub issues.</Text></View>
    )
}


const styles = StyleSheet.create({
    outer:{ 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },

})