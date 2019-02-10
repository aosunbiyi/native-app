import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceList from './src/components/PlaceList';
import PlaceImage from './src/assets/places.jpg'

export default class App extends React.Component {

  state ={
    placeName:'',
    places:[]
  }

  placeNameChangeHandler= val=>{
     this.setState({
       placeName: val
     });
  }

  hanldleOnPress = ()=>{
   
    if(this.state.placeName.trim() ===""){
      return;
    }

    this.setState(prevState=>{
      return{
        places: prevState.places.concat(
          {key:Math.random(),
            name:prevState.placeName,
            image:PlaceImage
          })
      }
    });
  }

  placeDeletedHandler = key =>{
     this.setState(prevState =>{
       return {
         places: prevState.places.filter(place=>{
           return  key !== place.key ;
         })
       }
     });
  }

  render() {

   
    return (
      <View style={styles.container}>

      <View style={styles.form_control}>
      <TextInput  
       value={this.state.placeName} 
       placeholder="Enter the user name"
       style={styles.placeInput}
       onChangeText={this.placeNameChangeHandler}/>
       <Button title="Add Item" onPress={this.hanldleOnPress}  style={styles.placeButton}/>
      </View>

      <View  style={styles.listContainer}>
          <PlaceList places={this.state.places}  onItemDeleted={this.placeDeletedHandler}/>
      </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:30,
  },

  form_control:{
      //flex: 1,
      width:"90%",
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center'
  },

  placeInput:{
    width:"70%"
  },

  placeButton:{
    width:"30%"
  },

  listContainer:{
    width:"100%",
    padding: 10
  }
});
