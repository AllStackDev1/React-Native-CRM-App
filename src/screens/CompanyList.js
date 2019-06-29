/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class CompanyList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Companies',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name={'business'}
        size={45}
        style={{ color: tintColor }}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Companies</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 10,
    backgroundColor: '#e5e5e5'
  },
});
