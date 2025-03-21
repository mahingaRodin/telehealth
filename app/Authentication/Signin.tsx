import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {BlurView} from 'expo-blur'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import CheckBox from 'expo-checkbox';
import { TextInput } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import GradientButton from '../GradientButton';
import CustomText from '../CustomText';
const Login = () => {

  const [secureEntry,setSecureEntry]= useState(true);
  const [selectedRole, setSelectedRole] = useState('');
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter();
  return (
<ScrollView style={styles.fit}>

<View>

<View className='flex flex-row justify-between px-2  py-4'>
        

        <TouchableOpacity onPress={()=>router.navigate('/Authentication/Login')}>
        <Ionicons name='arrow-back' size={35} color={'green'}>
        </Ionicons>
        </TouchableOpacity>


    
        <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7'></Image>
         </View>

         <View style={styles.introContainer}>
        <Text style={styles.introText}>We Are Happy That You {'\n'}
        Came Back </Text>
        <Image source={require('../../assets/Diagnoss/location.png')}></Image>
         </View>
         </View>

        
  <View className='flex-row justify-between'>
  <Image source={require('../../assets/Diagnoss/sthetho2.png')}></Image>
    <LinearGradient className='rounded-full w-[100px] h-[100px] shadow-xl top-14'
      colors={['#2FAF64','#2464E8']}>

</LinearGradient>
  </View>
   <BlurView intensity={100} tint='light'
style={styles.container} className="m-auto">

<View>
  
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


   
  <CustomText style={{paddingLeft:20,
  fontFamily:'Montserrat-SemiBold',
    
    paddingTop:8
  }}>Phone number</CustomText>
    <View style={styles.inputTop}>
    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'call-sharp'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter valid Phone No.' className='w-[200px]' style={{
      fontFamily:'Montserrat-Medium'
    }}/>

  </View>
    </View>
    
    <CustomText style={{paddingLeft:20,
    fontFamily:'Montserrat-SemiBold',
    
    paddingTop:8
  }}>Password</CustomText>
    <View style={styles.inputTop}>
    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
    <Ionicons
      name={secureEntry ? 'eye' : 'eye-off'}
      size={22}
      color={'#8F9098'}
      style={styles.icon}
    />
  </TouchableOpacity>
    <TextInput placeholder='Enter Password'
    secureTextEntry={secureEntry} className='w-[200px]'
    style={{
      fontFamily:'Montserrat-Medium'
    }}/>

  </View>
    </View>
    
   
    <View className='flex flex-row gap-2 pl-8 top-7'>
    <CheckBox
      value={isChecked}
      onValueChange={(newValue) => setIsChecked(newValue)}
      style={styles.checkbox}
    />
    <CustomText style={styles.label}>Remember me</CustomText>
  </View>
  </View>
  
</BlurView>
<View className=''>
<View className='w-[80%] m-auto bottom-28'>
<GradientButton
        text="Sign In"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        onPress={()=>router.navigate('/Authentication/RecoverPassword')}
        style={styles.button}
        textStyle={styles.buttonText}
      />
  

  
  </View>
</View>



 <View className='flex-col gap-7'>
 <View style={styles.signin}>
    <View className='flex-row gap-3 px-14'>
    <CustomText style={{fontFamily:'Montserrat-Medium',
        
        fontSize:17,
       
      }}>Don't have an account</CustomText>
    <TouchableOpacity onPress={()=>router.navigate('/Authentication/Login')} style={styles.touch}>
      <CustomText style={{fontFamily:'Montserrat-Medium',
        color:'#1f45a5',
        fontSize:17,
        bottom:10
      }}>Register</CustomText>
      </TouchableOpacity>
    </View>
    
    <CustomText style={{
      margin:'auto',
      fontSize:17,
      fontFamily:'Montserrat-Medium'
    }}>Or</CustomText>
   

  </View>
  <View className=''>
  <TouchableOpacity className='p-3 rounded-lg w-[350px] h-[45px] flex flex-row justify-evenly' style={[styles.border4,styles.signin]}>
      <Image source={require('../../assets/Diagnoss/Google.png')}></Image>
<CustomText style={{
  color:'#2E63EB'
}}>Continue with Google</CustomText>
</TouchableOpacity>
  </View>
 </View>
  

 

 


  

  

        
  
      
      
   
   
  
  

</ScrollView>

    
   
  )
}
const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    width:330,
    top:-140,
    borderRadius:25,
    overflow:'hidden',
    height:280,
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
  introContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 4,
    display: 'flex',
    flexDirection: 'row',
  },
  introText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#2464E8',
    fontFamily:'Montserrat-SemiBold',
  },
  fit:{
width:'100%',
height:'100%',

  },
  up:{
    bottom:120,

  },
  border4:{
    borderColor:'#2E63EB',
   
    borderWidth:1,

  },
  touch:{
top:10,
  },
  logo:{
    width:50,
    height:40,

  },
 
  checkbox: {
    width:16,
    height:16,

  },
  label:{
bottom:4,
fontFamily:'Montserrat-Medium',
fontSize:16
  },
  
  coco: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signup:{
  // bottom:127,

  },
  signin:{
    bottom:82,
    margin:'auto',

  },
  
  specto:{

top:102,
  },
  icon:{
    top:6.5,

  },
  picker: {
    width: 200,
    display:'flex',
    bottom:5,
    right:14,
    justifyContent:'space-between',
    flexDirection:'row',
    
    
    
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
    left:300,
    top:-43,

  },
  inputTop:{
bottom:14,

  }
})

export default Login