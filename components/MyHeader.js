import React, { Component} from 'react';
import { Header } from 'react-native-elements';
import { View, Text, StyeSheet } from 'react-native';

const MyHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: '#7d21dc', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#e3eb45"
    />
  );
};

export default MyHeader;
