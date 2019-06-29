/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../redux/actions'

const theme = getTheme();
const background = require('../images/background.jpg');

const PeopleItem = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.selectPerson(props.people)}
    >
      <View style={[theme.cardStyle, styles.card]}>
        <Image
          source={background}
          style={[theme.cardImageStyle, styles.image]}
        />
        <Icon 
          name={'user'}
          size={100}
          style={styles.icon}
        />
        <Text style={[theme.cardTitleStyle, styles.title]}>
          {props.people.first_name} {props.people.last_name}
        </Text>
        <Text style={[theme.cardActionStyle, styles.action]}>
          {props.people.company}
        </Text>
      </View>     
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: 100,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255, 0)'
  },
});

export default connect(null, actions)(PeopleItem); 