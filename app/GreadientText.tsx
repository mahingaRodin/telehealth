

import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient} from 'expo-linear-gradient';

interface GradientTextProps {
  text: string;
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  style?: TextStyle;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  locations = [],
  style,
}) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.text, style, { backgroundColor: 'transparent' }]}>
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        locations={locations}
        style={styles.gradient}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  gradient: {
    flex: 1,
  },
});

export default GradientText;
