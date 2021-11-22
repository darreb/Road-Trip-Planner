import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Modal } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { tsPropertySignature } from '@babel/types';
import StopScreen from './stopscreen/StopScreen.js';
import LocationScreen from './locationscreen/LocationScreen.js'

const HomeScreen = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Start your Plan"
        onPress={() => props.navigation.navigate('Location')}
      />
    </View>
    )
}


const Stack = createNativeStackNavigator();

export default function App() {
  const data = [
    {key:Math.random().toString(), stopVal: "Stop 1", dist: 5, iconType: "cutlery"},
    {key:Math.random().toString(), stopVal: "Stop 2", dist: 15, iconType: "bed"},
    {key:Math.random().toString(), stopVal: "Stop 3", dist: 156, iconType: "hourglass-half"}
  ];
  const[realData, setRealData] = useState(data);
  const [addingStop, setAddingStop] = useState(false)

  const [startingLoc, setStartingLoc] = useState('');
  const [endingLoc, setEndingLoc] = useState('');

  //Location Handlers
  const handleStartingLocInput = enteredStartText => {
    setStartingLoc(enteredStartText);
  }
  const handleEndingLocInput = enteredEndText => {
    setEndingLoc(enteredEndText);
  }
  const handleLocNextPress = navigation =>{
    if(startingLoc.length > 0 && endingLoc.length > 0){
      navigation.navigate('Stops');
    }
    else{
      alert("You must enter a from and to destination");
    }
  }

  //Stop Handlers
  const handleDeleteStop = stop =>{
    setRealData(realData.filter((item) => item.key != stop.key))
  }

  const handleAddStop = () =>{
    setAddingStop(true);
  }

  const handleDoneAdding = newStop =>{
    setAddingStop(false);
    setRealData(data => [...data, newStop]);
  }

  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" >
          {props => <HomeScreen {...props}/>}
        </Stack.Screen>
        <Stack.Screen name = "Location">
          {props => <LocationScreen {...props}
                      startingLoc = {startingLoc}
                      endingLoc = {endingLoc} 
                      onStartingInput = {handleStartingLocInput} 
                      onEndingInput = {handleEndingLocInput}
                      onNextPress = {handleLocNextPress}
                    />}
        </Stack.Screen>
        <Stack.Screen name = "Stops"> 
          {props => <StopScreen {...props} 
                      modalVisible = {addingStop}
                      onDoneAdding = {handleDoneAdding}
                      onAdd = {handleAddStop}
                      onDelete = {handleDeleteStop} 
                      data={realData} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
