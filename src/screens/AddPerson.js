/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';


export default class AddPerson extends Component {
  static navigationOptions = {
    tabBarLabel: 'Add Person',
    tabBarIcon: ({ tintColor }) => (
        <Icon 
        name={'plus'}
        size={70}
        style={[{ color: tintColor },  styles.icon]}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Person</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor: '#e5e5e5'
  },
  welcom: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },
  icon: {
    paddingBottom: 2,
  },
});
