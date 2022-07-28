import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({ onPress, text, type, bgColor, fontColor}) => {
    return (
        <Pressable onPress={onPress} 
                   style={[styles.container, 
                           styles[`container_${type}`],
                           bgColor ? {backgroundColor: bgColor}: {}]}>
            <Text style={[styles.text, 
                          styles[`text_${type}`],
                          fontColor? {color: fontColor}:{}]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 50,

        padding: 15,
        marginVertical: 5,
        alignItems: 'center',

        borderRadius: 10
    },

    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },

    container_SECONDARY:{},

    text:{
        fontWeight: 'bold',
        color: 'white'
    },

    text_SECONDARY:{
        color: 'grey'
    }

})

export default CustomButton;