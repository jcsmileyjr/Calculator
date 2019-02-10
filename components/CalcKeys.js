import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CalcKeys extends Component{
  render(){
    return(
        <View>
            <Text style={[styles.calcKey]}>1</Text>
            <Text style={[styles.calcKey]}>2</Text>
            <Text style={[styles.calcKey]}>3</Text>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
  calcKey:{
    color:"goldenrod",
    textAlign:"center",
    fontSize:36,      
    backgroundColor:"grey",
    flex:.25
  }  
    
});