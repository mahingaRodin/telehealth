import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {BlurView} from 'expo-blur'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomText from '../CustomText';
import { TextInput } from 'react-native';
import GradientButton from '../GradientButton';

import { useRouter } from 'expo-router';

const Login = () => {

  const [secureEntry,setSecureEntry]= useState(true);
  const [selectedRole, setSelectedRole] = useState('');
  const [isChecked, setIsChecked] = useState(false)
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
<View>
  <View>
    <Image source={require('../../assets/Diagnoss/sthetho2.png')}
    style={styles.specto}></Image>
    <LinearGradient className='rounded-full w-[100px] h-[100px] shadow-xl'
      colors={['#2FAF64','#2464E8']} style={styles.gradient}>

</LinearGradient>
<View>

<BlurView intensity={100} tint='light'
style={styles.container} className="m-auto">


<View>
  <View className='m-auto pt-5'>
    <CustomText className='text-2xl  text-[#2464E8]'>OTP Verification</CustomText>
    </View>
    <Text className='text-sm  m-auto' style={{
      fontFamily:'Montserrat-Medium'
    }}>We’ve sent an OTP code check your email <Text className='text-[#2464E8]'>(hugues@gmail.com) </Text> and fill it in. </Text>
  
    <View className='flex flex-row justify-evenly'>
    <View style={styles.inputContainer}>
    <TextInput placeholder=''
    maxLength={1} className='w-[70px] h-[50px] text-3xl'/>
    </View>
    <View style={styles.inputContainer}>
    <TextInput maxLength={1} placeholder='' className='w-[70px] h-[50px] text-3xl'/>
    </View>
    <View style={styles.inputContainer}>
    <TextInput maxLength={1} placeholder='' className='w-[70px] h-[50px] text-3xl'/>
    </View>
    <View style={styles.inputContainer}>
    <TextInput maxLength={1} placeholder='' className='w-[70px] h-[50px] text-3xl'/>
    </View>
    
    </View>

    <View className='w-[90%] m-auto pt-9'>
   <GradientButton
onPress={()=>router.navigate('/Authentication/changePassword')}
        text="Verify"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
      />
   </View>
  <View className='m-auto' style={styles.send}>
      <Text style={{
        fontFamily:'Montserrat-Medium'
      }} className='text-xl font-light text-[#989898]'>Didn't receive code? <Link href={'/Authentication'} className='text-blue-700 font-bold'>Resend</Link></Text>
  </View>

  <View className='w-[88%] m-auto pt-9'>
 <TouchableOpacity className='pt-2  h-[55px]' style={styles.button1}>
  
  <CustomText className='text-[#2E63EB] text-center' style={styles.buttonText}>Change Email</CustomText>
  </TouchableOpacity>
 </View>
    
  

 

</View>
</BlurView>

<View>
  
  

  
  </View> 
  
 

 


  

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
    top:-130,
    borderRadius:25,
    overflow:'hidden',
    height:400,
    borderColor:'#2E63EB',
    zIndex:1000,
    backgroundColor:''
  },
  send:{
top:6,

  },
  button: {
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    fontFamily:'Montserrat-Regular'
    
  },
  button1:{
  
    borderRadius: 60,
    overflow: 'hidden',
    width:'100%',
    paddingHorizontal:6,
    borderWidth:1,
    borderColor:'#2E63EB'
    
    
     // Ensure the shadow and border radius are visible
  },
  
  

  logo:{
    width:53,
    height:48,

  },
  border4:{
    borderColor:'#2E63EB',
   top:15,
    borderWidth:1,

  },
  
 
  
 
  
 
  signup:{
    top:45,

  },
  
  
  specto:{

top:110,
left:100
  },
  icon:{
    top:6.5,

  },

  
  inputContainer:{
    borderWidth:1,
    borderColor:'#8F9098',
    borderRadius:10,
    paddingHorizontal:20,
    top:20,
    width:65,
    height:50,
  },
  
  gradient:{
    left:0,
    top:10,

  },
  inputTop:{
bottom:14,

  }
})

export default Login