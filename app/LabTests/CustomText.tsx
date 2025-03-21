
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = (props) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    
    fontFamily: 'Montserrat', 
  },
});

export default CustomText;
