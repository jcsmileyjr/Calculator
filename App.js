import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalcKeys from "./components/CalcKeys.js";
import OperatorKeys from "./components/OperatorKeys.js";

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
            <CalcKeys displayKey="1" />
            <CalcKeys displayKey="2" />
            <CalcKeys displayKey="3" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="4" />
            <CalcKeys displayKey="5" />
            <CalcKeys displayKey="6" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="7" />
            <CalcKeys displayKey="8" />
            <CalcKeys displayKey="9" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="0" />
            <CalcKeys displayKey="Clear" />
            <CalcKeys displayKey="Go" />
        </View>
        <View style={styles.calcKeyRow}>
            <OperatorKeys displayKey="+" />
            <OperatorKeys displayKey="-" />
            <OperatorKeys displayKey="*" />
            <OperatorKeys displayKey="/" />
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
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%",
  },
    
  calcKey:{
    backgroundColor:"grey",
    flex:.3,
  },
    
  operatorCalcKey:{
    backgroundColor:"grey",
    flex:.2,
  }
});
