import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData.js';

class CryptoContainer extends Component {

  componentDidMount() {
    this.props.FetchCoinData();
  }

  render() {
    return(
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
