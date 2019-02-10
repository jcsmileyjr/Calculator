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
            <CalcKeys  style={styles.calcKey} displayKey="1" />
            <CalcKeys  style={styles.calcKey} displayKey="2" />
            <CalcKeys  style={styles.calcKey} displayKey="3" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys  style={styles.calcKey} displayKey="4" />
            <CalcKeys  style={styles.calcKey} displayKey="5" />
            <CalcKeys  style={styles.calcKey} displayKey="6" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys  style={styles.calcKey} displayKey="7" />
            <CalcKeys  style={styles.calcKey} displayKey="8" />
            <CalcKeys  style={styles.calcKey} displayKey="9" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys  style={styles.calcKey} displayKey="0" />
            <CalcKeys  style={styles.calcKey} displayKey="Clear" />
            <CalcKeys  style={styles.calcKey} displayKey="Go" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys  style={styles.operatorCalcKey} displayKey="+" />
            <CalcKeys  style={styles.operatorCalcKey} displayKey="-" />
            <CalcKeys  style={styles.operatorCalcKey} displayKey="*" />
            <CalcKeys  style={styles.operatorCalcKey} displayKey="/" />
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
    flex:.25,
  },
    
  operatorCalcKey:{
    backgroundColor:"grey",
    flex:.2,
  }
});
