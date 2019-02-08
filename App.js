import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text>Calculator</Text>
        </View>
        <View>
            <Text>1 + 1</Text>
        </View>
        <View>
            <Text>1-3</Text>
        </View>
        <View>
            <Text>4-6</Text>
        </View>
        <View>
            <Text>7-9</Text>
        </View>
        <View>
            <Text>0-Go</Text>
        </View>
        <View>
            <Text>+ - /</Text>
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
    justifyContent:"space-around",
  },
});
