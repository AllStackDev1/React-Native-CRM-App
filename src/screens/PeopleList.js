/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';


class PeopleList extends Component {
  static navigationOptions = {
    tabBarLabel: 'People',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name={'user'}
        size={50}
        style={{ color: tintColor }}
      />
    )
  }

  renderInitialView(){
    if(this.props.detailView){
      return <PeopleDetail />;
    }else{
      return (
        <FlatList
          data={this.props.people}
          renderItem={({item}) => 
            <PeopleItem people={item} />
          }
          keyExtractor={(item, index) => `${index}`}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:  353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 10,
  }
});

const mapStateToProps = state => {
  return { people, detailView } = state;
}

export default connect(mapStateToProps)(PeopleList); 