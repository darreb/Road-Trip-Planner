import React, {useState} from "react";
import {StyleSheet, TextInput, View, Text, Picker} from 'react-native';

const AddStops = props => {
    const[val, setVal] = useState('');
    const[hour,setHour] = useState('')
    const[min,setMin] = useState('')

    const handleHour = (enteredHour) => {
        setHour(enteredHour);
    };
    const handleMin = (enteredMin) => {
        setMin(enteredMin);
    };

    return(

        <Modal>
            
            <View style={{flexDirection: 'row', marginLeft: '0%', width: '50%', marginTop:'10%'}}>
            <Text style={{fontSize:20, paddingLeft: 10}}>Stop Type: </Text>
            <Picker style={{width:'100%', marginLeft:'30%', marginTop:'-49%'}}selectedValue={val} onValueChange={(itemValue) => setVal(itemValue)}>

                <Picker.Item label="-Select Stop Type-" value="-Select Stop Type-" />
                <Picker.Item label="Restaurant" value="Restaurant" />
                <Picker.Item label="Motel/Hotel" value="Motel/Hotel" />
                <Picker.Item label="Rest Stop" value="Rest Stop" />

                </Picker>
            </View>
            <View style={{flexDirection:'row', marginTop:'10%'}}>
                <Text style={{fontSize:20, paddingLeft: 10}}>Arrival Time: </Text>
                <TextInput style={{marginLeft:'20%', marginTop:'-24%'}} placeholder={"00"} fontSize={25} placeholderTextColor={'grey'} onChangeText={handleHour} />
                <Text style={{marginLeft:'1%', fontSize:20}}>:</Text>
                <TextInput style={{marginLeft:'20%', fontSize:20, marginTop:'-24%'}} placeholder={"00"} fontSize={25} placeholderTextColor={'grey'} marginLeft={5} onChangeText={handleMin} />
                <Picker style={{width:'20%', marginLeft:'5%', marginTop:'-24%'}} selectedValue={val} onValueChange={(itemValue) => setVal(itemValue)}>

                    <Picker.Item label="AM" value="AM" />
                    <Picker.Item label="PM" value="PM" />
                </Picker>
            </View>
        </Modal>
                        
    )

};

export default AddStops;