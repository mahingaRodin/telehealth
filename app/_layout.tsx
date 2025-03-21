import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import CustomText from './CustomText'; // Import CustomText component

const loadFonts = async () => {
  await Font.loadAsync({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
  });
};

export const unstable_settings = {
  initialRouteName: 'index',  
};

function RootLayoutNav() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true)).catch(error => {
      console.error('Error loading fonts:', error);
      setFontsLoaded(true); // Prevents app from getting stuck in loading state
    });
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="OnBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="Authentication" options={{ headerShown: false }} />
        <Stack.Screen name="LabTests" options={{ headerShown: false }} />
        <Stack.Screen name="Patient" options={{ headerShown: false }} />
        <Stack.Screen name="Doctor" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});

export default RootLayoutNav;
