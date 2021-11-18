import React, {Component, useState} from "react";
import {View, Text, StyleSheet, Picker, TextInput} from 'react-native'
import {ExpandableListView} from 'react-native-expandable-listview';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stops = props => {
    const[val, setVal] = useState('');

    const StopsList = [
        {
            id: 1,
            categoryName: props.title,
            subCategory: [  
                {               
                    customInnerItem: (
                        <View>
                            <Text style={{paddingTop:'10%', fontSize:20, paddingLeft: 10}}>Stop Type: </Text>
                            <View style={{flexDirection: 'column', marginLeft: '50%', width: '50%', marginTop: '-30%'}}>
                                <Picker selectedValue={val} onValueChange={(itemValue) => setVal(itemValue)}>

                                    <Picker.Item label="-Select Stop Type-" value="-Select Stop Type-" />
                                    <Picker.Item label="Restaurant" value="Restaurant" />
                                    <Picker.Item label="Motel/Hotel" value="Motel/Hotel" />
                                    <Picker.Item label="Rest Stop" value="Rest Stop" />

                                </Picker>
                            </View>
                            <View style={{flexDirection: 'column', width: '30%',marginLeft: '70%'}}>
                                <Picker selectedValue={val} onValueChange={(itemValue) => setVal(itemValue)}>

                                    <Picker.Item label="AM" value="AM" />
                                    <Picker.Item label="PM" value="PM" />
                                </Picker>
                            </View>
                        </View>
                        
                      ), 
                    id: 1,
                    name: '',
                },
                {id: 2, name: "here's some more shit"}
            ]
        },
    ];
    return (
        // <ExpandableListView ExpandableListViewStyles={{borderTopWidth:1}, {borderBottomWidth:1}} data={StopsList}/>  
        <View style={styles.listItem}>
            
            <View style={{alignItems:'center', justifyContent:'space-around', flexDirection:'row', width: '100%'}}>
                <View><Text style={styles.stopText}>{props.title}</Text></View>
                <Icon style={{paddingLeft: '45%'}} name={props.iconType} size={20} color="#900"/>
                <Text style={{fontSize:20,paddingLeft:'10%',maxWidth:'90%'}}>{props.distance}</Text>
            </View>
        </View>  
        );

    
}

const styles = StyleSheet.create({
    listItem:{
        backgroundColor: '#FFF',
        padding: 15,
        marginTop: 10,
        marginRight: '2%',
        marginLeft: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
      },
    stopText:{
        fontSize: 20,
        width: '100%',
        marginLeft: 0,
        //maxWidth:'80%'
    },
    
      icon: {
        marginLeft: '45%',
        width: 30,
        height: 30,
        padding: 20,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 10,
      }
});

export default Stops;