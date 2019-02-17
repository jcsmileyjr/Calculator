import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class CalcKeys extends Component{
  render(){
    return(
        <View style={styles.calcKey}>
            <Button style = {styles.textDisplay} 
            title = {this.props.displayKey} 
            onPress = {()=>{this.props.onClick()}}></Button>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
  calcKey:{   
    backgroundColor:"grey",
    flex:.25
  },
    
  textDisplay:{
    color:"goldenrod",
    textAlign:"center",
    fontSize:36,         
  }
    
});