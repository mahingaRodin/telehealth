// GradientButton.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientButtonProps {
  text: string;
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  onPress?: () => void;
  textStyle?: TextStyle;
  style?: ViewStyle;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  locations = [],
  onPress,
  textStyle,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        locations={locations}
        style={[styles.gradient, style]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    
    overflow: 'hidden',
    width:'100%',
    paddingHorizontal:8,
    
    
     // Ensure the shadow and border radius are visible
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
   
   
  },
  text: {
    color: '#fff',
    fontFamily:'Montserrat-SemiBold',
    fontSize: 18,
    
  },
});

export default GradientButton;
