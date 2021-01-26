import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class SummaryScreen extends React.Component{
constructor(){
  super();
  this.state={
    showStudent:[]
  }
}

componentDidMount = async ()=>{
var today = await this.getTodaysDate
}
  render(){
    return(
    <View>
    <AppHeader/>
    <Text></Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  
});