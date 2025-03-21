import { Stack } from "expo-router"
import React from "react"

const OnBoardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="OnBoarding01" options={{
        headerShown:false,
       animation:"slide_from_right"
      }}/>

      <Stack.Screen name="start" options={{
        headerShown:false,
       animation:"slide_from_right"
      }}/>
      <Stack.Screen name="OnBoarding02" options={{
        headerShown:false,
        animation:"slide_from_right"
        

      }} />
      <Stack.Screen name="OnBoarding03" options={{
        headerShown:false,
        animation:"slide_from_right"        

      }}/>
       <Stack.Screen name="Onboarding04" options={{
        headerShown:false,
        animation:"slide_from_right"        

      }}/>
       <Stack.Screen name="Onboarding05" options={{
        headerShown:false,
        animation:"slide_from_right"        

      }}/>
    </Stack>
  )
}

export default OnBoardingLayout