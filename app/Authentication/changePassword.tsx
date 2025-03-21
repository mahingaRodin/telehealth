import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {BlurView} from 'expo-blur'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import CheckBox from 'expo-checkbox';
import { TextInput } from 'react-native';
import GradientButton from '../GradientButton';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import CustomText from '../CustomText';
import Popup from './PwdPopup';
const Login = () => {
  const [popVisible, setPopVisible] = useState(false);
  const openPop = () => {
    setPopVisible(true);
  };

  const closePop = () => {
    setPopVisible(false);
  };

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
         <View className='flex-row justify-between'>
  <Image source={require('../../assets/Diagnoss/sthetho2.png')}></Image>
    <LinearGradient className='rounded-full w-[100px] h-[100px] shadow-xl top-14'
      colors={['#2FAF64','#2464E8']}>

</LinearGradient>
  </View>
         

  <View>
    
    
<View>

<BlurView intensity={100} tint='light'
style={styles.container} className="m-auto">


<View>
  
<View style={styles.introContainer}>
        <Text style={styles.introText}>Join Our The New Era Of Health Care 
        With Diagnoos</Text>
        
         </View>

   
    
  
   <View className='gap-2'>
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
  <CustomText style={{paddingLeft:20,
    fontFamily:'Montserrat-SemiBold',
    
    paddingTop:8
  }}> Confirm Password</CustomText>
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
    </View>

   <View className='w-[90%] m-auto pt-14'>
   <GradientButton
    onPress={openPop}
        text="Change Password"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      
      <Popup visible={popVisible} onClose={closePop} />
   </View>
   <View className='flex-row justify-start pl-3 pt-3 gap-2'>
   <CheckBox
      value={isChecked}
      onValueChange={(newValue) => setIsChecked(newValue)}
      style={styles.checkbox}
    />
    <CustomText style={styles.label}>Remember me</CustomText>
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
    top:-140,
    borderRadius:25,
    overflow:'hidden',
    height:400,
    borderColor:'#2E63EB',
    zIndex:1000,
    backgroundColor:''
  },
  button: {
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    fontFamily:'Montserrat-Medium'
    
  },
  up:{
    bottom:40,

  },
  introContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  introText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2464E8',
    fontFamily:'Montserrat-SemiBold',
  },
  check:{
top:80,
  },
  
 
  logo:{
    width:53,
    height:48,

  },
 
  checkbox: {
    width:16,
    height:16,

  },
  label:{
bottom:1.3,
fontFamily:'Montserrat-Medium',
  },
  
  
  signup:{
    top:60,

  },
 
  
  specto:{

top:102,
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
    left:300,
    top:-43,

  },
  inputTop:{
bottom:14,

  }
})

export default Login