/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Linking  } from "react-native";
import { connect } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import { getTheme } from 'react-native-material-kit';
import * as actions from '../redux/actions';

const theme = getTheme();

class PeopleDetail extends Component {
  handleClick = link => {
    Linking.canOpenURL(link).then(supported => {
      if(supported){
        Linking.openURL(link);
      }else{
        console.log('I Don\'t know how to open URI: ' + link);
      }
    })
  }
  
  background = require('../images/background.jpg');
  callImage = require('../images/call.png');
  emailImage = require('../images/email.png');
  smsImage = require('../images/sms.png');
  
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[theme.cardStyle, styles.card]}>
          <Image 
            source={this.background}
            style={[theme.cardImageStyle, styles.image]}
          />
          <EvilIcons 
            name={'user'}
            size={100}
            style={styles.icon}
          />
          <SimpleIcons 
            name={'close'}
            size={30}
            style={styles.closeIcon}
            onPress={() => this.props.deselectPerson()}
          />
          <Text style={[theme.cardTitleStyle, styles.title1]}>
            {this.props.personSelected.first_name} {this.props.personSelected.last_name}
          </Text>
          <Text style={[theme.cardTitleStyle, styles.title2]}>
            form {this.props.personSelected.company}
          </Text>
          <View style={styles.textArea}>
            <MaterialIcons 
              name={'phone'}
              size={40}
              style={styles.textIcon}
            />
            <Text style={theme.cardContentStyle}>
              {this.props.personSelected.phone}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcons 
              name={'email'}
              size={40}
              style={styles.textIcon}
            />
            <Text style={theme.cardContentStyle}>
              {this.props.personSelected.email}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcons 
              name={'assignment'}
              size={40}
              style={styles.textIcon}
            />
            <Text style={theme.cardContentStyle}>
              {this.props.personSelected.project}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcons 
              name={'mode-edit'}
              size={40}
              style={styles.textIcon}
            />
            <Text style={theme.cardContentStyle}>
              {this.props.personSelected.notes}
            </Text>
          </View>
          <View style={styles.actionArea}>
            <TouchableOpacity
              onPress={() => { this.handleClick(`tel:${this.props.personSelected.phone}`)}} 
            >
              <Image source={this.callImage} style={styles.actionImage}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this.handleClick(`sms:${this.props.personSelected.phone}`)}} 
            >
              <Image source={this.smsImage} style={styles.actionImage}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this.handleClick(`mailto:${this.props.personSelected.email}`)}} 
            >
              <Image source={this.emailImage} style={styles.actionImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.actionArea}>
            <Text>Call</Text>
            <Text>SMS</Text>
            <Text>Email</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
  title1: {
    top: 10,
    left: 80,
    fontSize: 24,

  },
  title2: {
    top: 35,
    left: 82,
    fontSize: 18,
  },
  image: {
    flex: 0,
    height: 100,
    width: 333,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    left: 285,
    color: 'rgba(233,166,154,0.8)',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  textArea: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
    width: 260,
  },
  textIcon: {
    color: '#26a69a',
  },
  actionArea: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionImage: {
    width: 50,
    height: 50,
  }
});

const mapStateToProps = state => {
  return { personSelected } = state;
}

export default connect(mapStateToProps, actions)(PeopleDetail); 