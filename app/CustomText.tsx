// CustomText.js
import React from 'react';
import { Text, StyleSheet,TextStyle } from 'react-native';


const CustomText = ({ children, style, ...props }:{children:React.ReactNode, style?: TextStyle | TextStyle[]}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default CustomText;
