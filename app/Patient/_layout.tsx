import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PatientLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="PatientHome" options={{
        headerShown:false,
      }}/>
       <Stack.Screen name="Calendar" options={{
        headerShown:false,
      }}/>
       <Stack.Screen name="Details" options={{
        headerShown:false,
      }}/>
         <Stack.Screen name="CancelAppoint" options={{
        headerShown:false,
      }}/>
     
        <Stack.Screen name="BookAppoint" options={{
        headerShown:false,
      }}/>
          <Stack.Screen name="Lab" options={{
        headerShown:false,
      }}/>
         <Stack.Screen name="notifications" options={{
        headerShown:false,
      }}/>
         <Stack.Screen name="BookTest" options={{
        headerShown:false,
      }}/>
        <Stack.Screen name="doc" options={{
        headerShown:false,
      }}/>
        <Stack.Screen name="Profile" options={{
        headerShown:false,
      }}/>
        <Stack.Screen name="Doctors" options={{
        headerShown:false,
      }}/>
           <Stack.Screen name="Settings" options={{
        headerShown:false,
      }}/>
        <Stack.Screen name="DoctorProfile" options={{
        headerShown:false,
      }}/>
      
    </Stack>
  )
}

export default PatientLayout