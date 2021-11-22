import React, { useState } from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const StopsPageHeader = props => {

    return ( 
        <View style = {styles.header}>
            <Button title="Edit" color="darkorange" onPress={props.swipeFromLeftOpen}/>
            <Text style={styles.title}> Set Your Stops</Text>
            <TouchableOpacity>
                <Icon.Button 
                    name="plus" 
                    size={25} 
                    color="darkorange" 
                    backgroundColor='gray' 
                    onPress={() => {props.onAdd()}}>
                </Icon.Button>
            </ TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        width:'100%',
        paddingTop: 40,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'gray',

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
        
    },

    button: {
        color: 'orange'

    }
    

});

export default StopsPageHeader;