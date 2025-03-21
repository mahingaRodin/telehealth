import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
// import { BlurView } from "@react-native-community/blur";
import { LinearGradient } from 'expo-linear-gradient';
import {BlurView} from 'expo-blur'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomText from '../CustomText';
import { TextInput } from 'react-native';

import { useRouter } from 'expo-router';
import GradientButton from '../GradientButton';
import { ScrollView } from 'react-native';

const Login = () => {

  
  const router = useRouter();
  return (



    <ScrollView>
      <View>


<View className='flex flex-row justify-between px-2  py-4'>
        

        <TouchableOpacity onPress={()=>router.navigate('/Authentication/Signin')}>
        <Ionicons name='arrow-back' size={35} color={'green'}>
        </Ionicons>
        </TouchableOpacity>


    
        <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7'></Image>
         </View>
 


  
</View>
<View>
  <View>
    <Image source={require('../../assets/Diagnoss/sthetho2.png')}
    style={styles.specto}></Image>
    <LinearGradient className='rounded-full w-[100px] h-[100px] shadow-xl'
      colors={['#2FAF64','#2464E8']} style={styles.gradient}>

</LinearGradient>
<View>

<BlurView 
intensity={100} tint='light'

style={styles.container} className="m-auto">


<View>
  <View className='m-auto pt-5'>
    <Text className='text-xl  text-[#2464E8]'style={{
      fontFamily:'Montserrat-SemiBold',
    }}>Recover Password</Text>
    <Text className='text-sm font-light' style={{
      fontFamily:'Montserrat-Medium'
    }}>Enter Email To Get Code</Text>
  </View>
  
  
  <CustomText style={{paddingLeft:20,
    fontFamily:'Montserrat-SemiBold',
    
      paddingTop:5
    }}>Email</CustomText>
    <View style={styles.inputTop}>
    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter your Email' className='w-[200px]'
    style={{
      fontFamily:'Montserrat-Medium'
    }}/>

  </View>
    </View>

   <View className='w-[80%] m-auto pt-9'>
   <GradientButton
onPress={()=>router.navigate('/Authentication/VerifyOTP')}
        text="Sign In"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
      />
   </View>
  

 

</View>
</BlurView>

<View>
  
  

  
  </View> 
  
 

 


  

  </View>

        
  
      
      
   
   
  </View>
  </View> 

    </ScrollView>


    
   
  )
}
const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    width:355,
    bottom:160,
    borderRadius:25,
    overflow:'hidden',
    height:300,
    borderColor:'#2E63EB',
    zIndex:1000,
    backgroundColor:''
  },
  button: {
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    fontFamily:'Montserrat-Regular'
    
  },
  

  logo:{
    width:53,
    height:48,

  },
 
  
 
  
 
  signup:{
    top:70,

  },
  
  
  specto:{

top:92,
left:100
  },
  icon:{
    top:6.5,

  },

  
  inputContainer:{
    borderWidth:1,
    borderColor:'#8F9098',
    borderRadius:100,
    paddingHorizontal:20,
    top:20,
    width:300,
    height:45,
  },
  
  gradient:{
    left:0,
    top:-30,

  },
  inputTop:{
bottom:14,

  }
})

export default Login