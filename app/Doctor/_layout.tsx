import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const doctLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="DoctorHome" options={{
        headerShown:false,
      }}/>
        <Stack.Screen name="Appoints" options={{
        headerShown:false,
      }}/>
          <Stack.Screen name="Lab" options={{
        headerShown:false,
      }}/>
        <Stack.Screen name="notify" options={{
        headerShown:false,
      }}/>
         <Stack.Screen name="settings" options={{
        headerShown:false,
      }}/>
       <Stack.Screen name="profile" options={{
        headerShown:false,
      }}/>
       <Stack.Screen name="Doctors" options={{
        headerShown:false,
      }}/>
    </Stack>
    
  )
}

export default doctLayout