import React from 'react';
import {Modal,View, Image,Text,Button, StyleSheet}  from 'react-native';


const PlaceDetail = props =>{
    let modelContent = null;
    if(props.selectedPlace){
        modalContent= (
               <View style={styles.renderContainer}>
                <Image source={props.selectedPlace.image} resizeMode="contain"/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
               </View>
        );
    }

    return (
        <Modal visible={props.selectedPlace !== null} onRequestClose={()=>  props.onModalClosed()} animationType="slide">
            <View style={styles.modalContainer}>
                 {this.modalContent}
                <View>
                    <Button title="Delete" onPress={()=>props.onItemDeleted()}/>
                    <Button title="Close" onPress={()=>{
                        props.onModalClosed()}}/>
                </View>
            </View>
        </Modal>
    );

} ;

const styles= StyleSheet.create({
    modalContainer:{
        margin:22
    },
    renderContainer:{ 
    },
    placeImage:{
        width:"40%",
        height: 50
    },
    placeName:{
        fontWeight:"bold",
        textAlign: "center",
        fontSize:28
    }
});



export default PlaceDetail;