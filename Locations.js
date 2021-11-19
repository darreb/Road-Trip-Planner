import React, { useState } from "react"
import {View, TextInput, Text, Button, StyleSheet} from 'react-native'


const Locations = props => {
    const[startingLoc, setStartingLoc] = useState('');
    const[endingLoc, setEndingLoc] = useState('');

    const handleStartingLoc = (startingLocInput) =>{
        setStartingLoc(startingLocInput);
    };

    const handleEndingLoc = (endingLocInput) =>{
        setEndingLoc(endingLocInput);
    };
    return(
        <View style={{flexDirection:'column'}}>
            <View>
            <TextInput style={styles.LocationA} placeholder={"Starting Location"} onChangeText={handleStartingLoc}>
                </TextInput>
            </View>
            <View>
                <TextInput style={styles.LocationB} placeholder={"Ending Location"} onChangeText={handleEndingLoc, handleEndingLoc}>
                </TextInput>
            </View>
            <Button title={"Next"} onPress={handleStartingLoc}/>
        </View>
    );
};

const styles = StyleSheet.create({
    LocationA: {
        backgroundColor: '#FFF',
        padding: 7,
        marginTop: '65%',
        marginRight: '2%',
        marginLeft: 5,
        borderRadius: 5,
        fontSize: 20,
    },
    LocationB: {
        backgroundColor: '#FFF',
        padding: 7,
        marginTop: 10,
        marginRight: '2%',
        marginLeft: 5,
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 10
    }
});

export default Locations;
