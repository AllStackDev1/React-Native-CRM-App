/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {StyleSheet, Text, View, ActivityIndicator } from "react-native";

const Loader = ({ size }) =>{
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={size || "small"} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
