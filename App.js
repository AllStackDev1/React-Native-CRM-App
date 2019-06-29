/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './src/redux/store'
import firebase from 'firebase';
import firebaseConfig from './firebase.config'

import Login from './src/screens/Login'
import Navigation from './src/screens/Navigation';
import Loader from './src/components/Loader';

export default class App extends Component {
  
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true });
      }else{
        this.setState({ loggedIn: false });
      }
    })
  }

  renderInitialView(){
    switch (this.state.loggedIn) {
      case true:
        return <Navigation />;
      case false:
        return <Login />;
      default:
        return <Loader size="large"/>;
    }
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <>
        {this.renderInitialView()}
        </>
      </Provider>
    );
  }
}
