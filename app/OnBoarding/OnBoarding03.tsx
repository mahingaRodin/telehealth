import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import GradientButton from '../GradientButton'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../CustomText'
const OnBoarding03 = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
<View className='pb-20'>
  <Text className='text-[#8F9098]'
  style={{
    fontFamily:'Montserrat-SemiBold'
  }}>Welcome To Diagnoos</Text>
</View>


      <View style={styles.border3} className='w-[337px] h-[440px]'>
  
  <Image source={require('../../assets/Diagnoss/phone.png')} style={styles.phone}></Image>
 
  <View className='m-auto pt-9' style={styles.padding}>
 <Text className='text-2xl text-center mb-2' style={{
  fontFamily:'Montserrat-Regular'
 }} >Online appointments</Text>
 <Text className='text-center text-sm font-light break-words text-[#8F9098]'  style={{
    fontFamily:'Montserrat-Medium'
  }}>
 Prioritize Your Health Today With Diagnoos. Make An Appointment With World Class Doctors
 </Text>
 
 
 <View className='flex-col gap-3 pt-3'>
  
 <GradientButton
        text="SignUp"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        
        style={styles.button}
        textStyle={styles.buttonText}
      />
 
 <View className='px-2'>
 <TouchableOpacity className='pt-2  h-[55px]' style={styles.button1}>
  
  <CustomText className='text-[#2E63EB] text-center' style={styles.buttonText}>Login</CustomText>
  </TouchableOpacity>
 </View>

 
 </View>
 
 </View>
 
 
   
 </View>
    </SafeAreaView>


  )
}
const styles=StyleSheet.create({
  image:{
    width:320,
    height:750,
    bottom:-13,
    position:'relative',
    
    
 },
 button: {
  borderRadius: 60,
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
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
   
   
  },

buttonText: {
  fontSize: 20,
  fontFamily:'Montserrat-Regular'
  
},
  border:{
    borderColor:'#2E63EB',
    borderRadius:15,
    borderWidth:1,
    top:130,

  },
  padding:{
    top:73,

  },
  border2:{
    borderColor:'#2E63EB',
    borderRadius:15,
    borderWidth:1,
    top:20,
  },
  phone:{
    position:'absolute',
    right:'15%',
    top:'-25%',

  },
  kit:{
    position:'absolute',
    right:'10%',
    top:'-30%',


  },
  users:{
    position:'absolute',
    right:'10%',
    top:'-20%',


  },
  border3:{
    borderColor:'#2E63EB',
    borderRadius:15,
    borderWidth:1,
    
    
  },
  top:{
    bottom:75,
    

  },
  top1:{
    left:180,
    bottom:94,
  },
  border4:{
    borderColor:'#2E63EB',
   borderRadius:60,
   paddingHorizontal:8,
   paddingVertical:21,
    borderWidth:1,

  },
  
  blurView: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // Box shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    // Elevation for Android
    elevation: 10,
  },
  background:{
    
    

  }

})

export default OnBoarding03