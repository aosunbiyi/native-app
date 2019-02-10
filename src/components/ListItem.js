import React, { Component } from 'react';
import {View,Text, StyleSheet, TouchableOpacity, Image}  from 'react-native';

const  ListItem  = (props)=> (
    <TouchableOpacity  onPress={props.onItemPressed}>
     <View  style={stlyes.listItem}  >
       <Image resizeMode="contain" source={props.placeImage} style={stlyes.placeImage}/>
         <Text>{props.placeName}</Text>
     </View>
    </TouchableOpacity>
  
    );


const stlyes= StyleSheet.create({
    listItem:{
        width: "100%",
        padding: 10,
        backgroundColor: "#888686",
        marginBottom:2,        
        flexDirection: "row",
        alignItems: "center"
    }
    ,
    placeImage:{
        marginRight: 8,
        width: 50,
        height: 40

    }
});

export default ListItem
