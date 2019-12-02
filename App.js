import React, { Component } from 'react';
import { Header } from './src/components';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store.js';
import CryptoContainer from './src/components/CryptoContainer.js';

const tester = () => {
console.log('test');
}

export default class App extends Component {
  render() {
  return (
    <Provider store={Store}>
    <View>
      <Header />
      <CryptoContainer />
    </View>
    </Provider>
  );
 }
}
