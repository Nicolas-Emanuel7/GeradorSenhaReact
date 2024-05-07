import React from 'react';
import {View , Text, StyleSheet, Pressable} from 'react-native';

export function PasswordItem({data, removePassword}){
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0e0e0e',
        padding: 16,
        width: '100%',
        marginBottom: 16,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color: '#FFF',
        fontSize: 18
    }
})