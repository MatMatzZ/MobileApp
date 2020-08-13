import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Button,TouchableOpacity,TouchableHighlight,Alert} from 'react-native';

export default class PugFile extends Component {
  AlertButton(){
    Alert.alert(
      'Scammer Alert',
      'Tin Lee on the move',
      [
        {text: 'Ask me later'},
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK'}
      ]
    )
  }
  AlertOpacity(){
    Alert.alert(
      'Warning',
      'Hello World'
    )
  }
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.textStyle}>Wag mo kong binabato #HindiMoKoKilalaMagalit #Mabangis #ArfArf</Text>
          <Image style={{height:290, width:290, resizeMode:'cover'}} source={{uri:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232719/Golden-Retriever-On-White-05.jpg"}}/>
          <Button title="Learn More" onPress={this.AlertButton}/>
          <TouchableHighlight onPress={this.AlertOpacity} style={{backgroundColor: '#39d81a', paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5 , marginTop:5, borderRadius:5}}>
            <Text>Learn More</Text>
          </TouchableHighlight>
      </View>
    )
  }
}

const styles = {
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
  textStyle:{
    fontSize: 20,
    fontWeight: '900',
    margin: 5,
    marginBottom:10
  }
}

