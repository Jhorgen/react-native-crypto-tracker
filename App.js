import React, { Component } from 'react';
import { Header } from './src/components';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store';



const tester = () => {
console.log('test');
}


export default class App extends Component {
  render() {
  return (
    <Provider store={Store}>
    <View style={styles.container}>
      <Header />
    </View>
    </Provider>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50
  },
});
