import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import StopsPageHeader from './components/StopsPageHeader';
import Stops from './components/Stops'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AddStops from './components/AddStops'
const StopScreen = screenProps => {

  const LeftSwipeActions = () => {
    return (
      <View
        style={{
           flex: 1, backgroundColor: 'orange', justifyContent: 'center', 
           padding: 15,
           marginTop: 10,
           marginRight: '2%',
           marginLeft: 5,
           borderRadius: 10,
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'space-between',
           marginBottom: 20,
          }}
      >
        <Text
          style={{
            color: '#40394a',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginTop: -5,
            alignItems:'center'
          }}
        >
          Edit
        </Text>
      </View>
    );
  };
  const rightSwipeActions = () => {
    return (
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: 15,
          marginTop: 10,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
          width: '100%'
        }}
      >
        <Text
          style={{
            color: '#1b1a17',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginLeft: '83%',
            marginTop: -5,
          }}
        >
          Delete
        </Text>
      </View>
    );
  };
  const ListItem = props => (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={function swipeFromRightOpen (){
        //alert('Swipe from right');
        Alert.alert(
          'Delete Stop?',
          'Are you sure you would like to delete this stop?',
          [
            //{text:"Yes", onPress: () => console.log("deleting ", props.item)},
            {text:"Yes", onPress: () => {screenProps.onDelete(props.item)}},
            //data.filter((item) => item.key != keyExtractor.item.key)
            {text:"Cancel", onPress: () => console.log("alright, canceled"), style:'cancel'},
          ],
          {
            cancelable: true
          }
        );
      }}
      onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <View>
        <TouchableOpacity><Stops key={props.item.key} title={props.item.stopVal} distance={props.item.dist} iconType={props.item.iconType}></Stops></TouchableOpacity>
      </View>
    </Swipeable>

  );

  const swipeFromLeftOpen = () => {
    alert('You are in editing mode');
  };
  return (
    <View style={styles.container}>
        <StopsPageHeader title={"Stops"} 
        swipeFromLeftOpen={swipeFromLeftOpen} 
        onAdd={screenProps.onAdd}></StopsPageHeader>
        <View style={styles.stopsContainer}>
          <FlatList renderItem={itemData => <ListItem {...itemData}/>} data={screenProps.data}/>
        </View>
        <AddStops 
          onDoneAdding = {screenProps.onDoneAdding}
          visible = {screenProps.modalVisible}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  stopsContainer : {
    flexDirection: 'column',
    //paddingLeft: 5,
    //paddingRight: 5,
    width: '100%',
  },
  listItem: {
    height: 80,
    marginLeft: -100,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default StopScreen;