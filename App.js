import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Button,TouchableOpacity,TouchableHighlight,Alert,ScrollView,ListView} from 'react-native';
import PropExample from './src/PugFile'
import PugFile from './src/PugFile';
const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
export default class App extends Component {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
    };
  }
  componentDidMount(){
    this.fetchUsers()
  }

  fetchUsers(){
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
    .then((response)=> response.json())
    .then((response)=>{this.setState({dataSource:this.state.dataSource.cloneWithRows(response)})})
  }

  render(){
    return(
      // <View style={{flex:1, flexDirection: 'row'}}>
      //   <View style={{flex:0.3,backgroundColor:'powderblue'}}/>
      //   <View style={{flex:0.2,backgroundColor:'skyblue'}}/>
      //   <View style={{flex:0.5,backgroundColor:'steelblue'}}/>
      // </View>
      // <ScrollView>
      //   <Text style={{fontSize:100}}>
      //   "The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog,The quick brown fox jumps over the lazy dog
      //   "
      //   </Text>
      // </ScrollView>
      <ListView 
      dataSource={this.state.dataSource}
      style = {{marginTop: 24}}
      renderRow={(rowData) => <Text>{rowData.title}</Text>}
      />
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

