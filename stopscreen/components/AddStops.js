import React, {useState} from "react";
import {StyleSheet, TextInput, View, Text, Picker, Modal, Button} from 'react-native';

const AddStops = props => {
    let rand_key = Math.random();
    const [stop, setStop] = useState({key:rand_key.toString(),
                                    stopVal:("Stop " + Math.trunc(rand_key*1000)),
                                    dist: 120,
                                    iconType:""});
    let stop_dict = {
        "-Select Stop Type-": "",
        "Restaurant": "cutlery",
        "Motel/Hotel": "bed",
        "Rest Stop" : "hourglass-half"
    }
    const[type, setType] = useState('');
    const[val, setVal] = useState('');
    const[hour,setHour] = useState('')
    const[min,setMin] = useState('')

    const onIconChange = (stopType) =>{
        setType(stopType);
        let newStop = stop
        newStop.iconType = stop_dict[stopType];
        setStop(newStop);
    }
    const onHourChange = (newHour) =>{
        setHour(newHour);
        let miles = stop.dist;
        let newDist = miles%10;
        newDist = newDist + newHour*10;

        let newStop = stop;
        newStop.dist = newDist;
        setStop(newStop);
    }
    const onMinuteChange = (newMin) =>{
        setMin(newMin);
        let miles = stop.dist;
        let newDist = miles - miles%10;
        newDist = newDist + min%10;

        let newStop = stop;
        newStop.dist = newDist;
        setStop(newStop);
    }
    const onDone = () =>{
        rand_key = Math.random();
        
        setStop({key:rand_key.toString(),
            stopVal:("Stop " + Math.trunc(rand_key*1000)),
            dist: 120,
            iconType:""})
    }

    return(
        <Modal visible = {props.visible}>
            <View style={{flexDirection: 'row', marginLeft: '0%', width: '50%', marginTop:'40%'}}>
            <Text style={{fontSize:20, paddingLeft: 10}}>Stop Type: </Text>
            <Picker style={{width:'100%', marginLeft:'30%', marginTop:'-49%'}} selectedValue={type} onValueChange={(itemValue) => onIconChange(itemValue)}>

                <Picker.Item label="-Select Stop Type-" value="-Select Stop Type-" />
                <Picker.Item label="Restaurant" value="Restaurant" />
                <Picker.Item label="Motel/Hotel" value="Motel/Hotel" />
                <Picker.Item label="Rest Stop" value="Rest Stop" />
            </Picker>
            </View>
            <View style={{flexDirection:'row', marginTop:'10%'}}>
                <Text style={{fontSize:20, paddingLeft: 10}}>Arrival Time: </Text>
                <TextInput style={{marginLeft:'20%', marginTop:'-24%'}} placeholder={"12"} fontSize={25} placeholderTextColor={'grey'} onChangeText={onHourChange} />
                <Text style={{marginLeft:'1%', fontSize:20}}>:</Text>
                <TextInput style={{marginLeft:'20%', fontSize:20, marginTop:'-24%'}} placeholder={"00"} fontSize={25} placeholderTextColor={'grey'} marginLeft={5} onChangeText={onMinuteChange} />
                <Picker style={{width:'20%', marginLeft:'5%', marginTop:'-24%'}} selectedValue={val} onValueChange={(itemValue) => setVal(itemValue)}>
                    <Picker.Item label="AM" value="AM" />
                    <Picker.Item label="PM" value="PM" />
                </Picker>
            </View>
            <View>
                <Button title = "Done" 
                    onPress={() => {
                        if(stop.iconType != ""){
                            props.onDoneAdding(stop);
                            onDone();
                        }

                        else{
                            alert("A valid stop is required");
                        }
                        
                    }}/>
            </View>
        </Modal>
                        
    )

};

export default AddStops;