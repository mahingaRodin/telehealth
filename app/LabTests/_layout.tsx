import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const labLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="LabHome" options={{
        headerShown:false,
      }}/>
       <Stack.Screen name="setts" options={{
        headerShown:false,
      }}/>
       <Stack.Screen name="labT" options={{
        headerShown:false,
      }}/>
    </Stack>
  )
}

export default labLayout