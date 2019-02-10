import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalcKeys from "./components/CalcKeys.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View >
            <Text style={styles.title}>Calculator</Text>
        </View>
        <View style={styles.display}>
            <Text style={styles.title}>1 + 1</Text>
        </View>
        <View style={styles.calcKeyRow}>
            <Text style={[styles.title, styles.calcKey]}>1</Text>
            <Text style={[styles.title, styles.calcKey]}>2</Text>
            <Text style={[styles.title, styles.calcKey]}>3</Text>
        </View>
        <View style={styles.calcKeyRow}>
            <Text style={[styles.title, styles.calcKey]}>4</Text>
            <Text style={[styles.title, styles.calcKey]}>5</Text>
            <Text style={[styles.title, styles.calcKey]}>6</Text>
        </View>
        <View style={styles.calcKeyRow}>
            <Text style={[styles.title, styles.calcKey]}>7</Text>
            <Text style={[styles.title, styles.calcKey]}>8</Text>
            <Text style={[styles.title, styles.calcKey]}>9</Text>
        </View>
        <View style={styles.calcKeyRow}>
            <Text style={[styles.title, styles.calcKey]}>0</Text>
            <Text style={[styles.title, styles.calcKey]}>Clear</Text>
            <Text style={[styles.title, styles.calcKey]}>Go</Text>
        </View>
        <View style={styles.calcKeyRow}>
            <Text style={[styles.title, styles.operatorCalcKey]}>+</Text>
            <Text style={[styles.title, styles.operatorCalcKey]}>-</Text>
            <Text style={[styles.title, styles.operatorCalcKey]}>*</Text>
            <Text style={[styles.title, styles.operatorCalcKey]}>/</Text>
        </View>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent:"space-around",
  },
    
  display:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:"white",
    width:"70%",
    height:"10%",
    //textAlign:"center",
  },
    
  title: {    
    color:"goldenrod",
    textAlign:"center",
    fontSize:36,
  },
    
  calcKeyRow:{
    //backgroundColor:"grey",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%",
  },
    
  calcKey:{
    backgroundColor:"grey",
    flex:.25
  },
    
  operatorCalcKey:{
    backgroundColor:"grey",
    flex:.2
  }
});
