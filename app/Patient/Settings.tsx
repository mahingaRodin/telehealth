import { View, Text,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Feather } from '@expo/vector-icons'

const Settings = () => {
  const router = useRouter();
  return (
    <View className='w-[100%] h-[100%]'>
      <View className='flex flex-row justify-start gap-20 px-2 pt-6'>
        

        <TouchableOpacity onPress={()=>router.navigate('/Patient/PatientHome')}>
        <Ionicons name='arrow-back' size={35} color={'green'}>
        </Ionicons>
        </TouchableOpacity>
        <Text className='text-xl top-1' style={{fontFamily:'Montserrat-SemiBold'}}>
          Settings</Text>
         </View>
         
         <View className='flex flex-row justify-center pt-5 pb-5'>
            <Image source={require('../../assets/Diagnoss/userP.png')}></Image>
         </View>
        <View className='bottom-2'>
        <View className='gap-4 px-2'>
          <Text className='text-lg px-5' style={{fontFamily:'Montserrat-SemiBold'}}>Account</Text>
          
          <View className='flex flex-row justify-between px-5'>
          <View className='flex flex-row gap-5'>
            <Feather name='user' size={25} color={'#2FAF64'}></Feather>
            <Text className='text-lg font-light' style={{fontFamily:'Montserrat-Medium'}}>Profile</Text>
          </View>
          
          <Ionicons name='chevron-forward-outline' size={25} color={'#2FAF64'}></Ionicons>
          </View>
          <View className='flex flex-row justify-between px-4'>
          <View className='flex flex-row gap-5'>
            <Ionicons name='lock-closed-outline' size={25} color={'#2FAF64'}></Ionicons>
            <Text className='text-lg font-light' style={{fontFamily:'Montserrat-Medium'}}>Password</Text>
          </View>
          
          <Ionicons name='chevron-forward-outline' size={25} color={'#2FAF64'}></Ionicons>
          </View>
          <View className='flex flex-row justify-between px-5'>
          <View className='flex flex-row gap-5'>
            <Ionicons name='notifications-outline' size={25} color={'#2FAF64'}></Ionicons>
            <Text className='text-lg font-light' style={{fontFamily:'Montserrat-Medium'}}>Profile</Text>
          </View>
          
          <Ionicons name='chevron-forward-outline' size={25} color={'#2FAF64'}></Ionicons>
          </View>
         </View>



         <View className='gap-6 px-2 pt-7'>
          <Text className='text-lg font-bold px-5'>More</Text>
          
          <View className='flex flex-row justify-between px-5'>
          <View className='flex flex-row gap-5'>
            <Ionicons name='star-outline' size={25} color={'#2FAF64'}></Ionicons>
            <Text className='text-lg font-light' style={{fontFamily:'Montserrat-Medium'}}>Ratings & Reviews</Text>
          </View>
          
          <Ionicons name='chevron-forward-outline' size={25} color={'#2FAF64'}></Ionicons>
          </View>
          <View className='flex flex-row justify-between px-4'>
          <View className='flex flex-row gap-5'>
            <Ionicons name='help-circle-outline' size={25} color={'#2FAF64'}></Ionicons>
            <Text className='text-lg font-light' style={{fontFamily:'Montserrat-Medium'}}>Help</Text>
          </View>
          
          <Ionicons name='chevron-forward-outline' size={25} color={'#2FAF64'}></Ionicons>
          </View>
          <View className='flex flex-row justify-between px-5'>
         
          
          
          </View>
         </View>
        </View>

        <View className='flex flex-row justify-center '>
          <TouchableOpacity className='' onPress={()=>router.navigate('/Patient/PatientHome')}>
            <Text className='text-xl font-light' style={{fontFamily:'Montserrat-Medium'}}>Log out</Text>
          </TouchableOpacity>
        </View>
        

    </View>
  )
}

export default Settings