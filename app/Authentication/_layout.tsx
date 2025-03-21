
import React from 'react'

import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{
        headerShown:false,
      }}/>
      <Stack.Screen name="Signin" options={{
        headerShown:false,
      }}/>
      <Stack.Screen name="RecoverPassword" options={{
        headerShown:false,
      }}/>
      <Stack.Screen name="VerifyOTP" options={{
        headerShown:false,
      }}/>
            <Stack.Screen name="changePassword" options={{
        headerShown:false,
      }}/>
          
      </Stack>
   
  )
}

export default _layout
