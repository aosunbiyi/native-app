import React, { Component } from 'react'
import {View,Text, StyleSheet, FlatList}  from 'react-native'
import ListItem  from './ListItem'


const  PlaceList =  props => {


      return <FlatList style={styles.listContainer} 
      data={props.places}
      renderItem={(info)=>(
        <ListItem 
         placeName={info.item.name} 
         placeImage={info.item.image}
         onItemPressed={ ()=> props.onItemSelected(info.item.key) }/>
      )}
      />

};

const styles= StyleSheet.create({
    listContainer:{
        width:"100%",
        marginBottom: 5,
        padding:10,
        backgroundColor: "#eee"        
    }
});

export default PlaceList
