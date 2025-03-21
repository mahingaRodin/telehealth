import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import GradientText from '../GreadientText'
import CustomText from '../CustomText'
const OnBoarding02 = () => {
  return (
    <SafeAreaView>
      {/* <View className='relative'>
      <LinearGradient className='rounded-full w-[100px] h-[100px] shadow-xl'
      colors={['#2FAF64','#2464E8']} style={styles.gradient}>

</LinearGradient>
      </View> */}
    <BlurView  intensity={50} tint='light' style={styles.container} className='w-[320px] h-[500px] bg-slate-50 fixed'>
    <View className='relative m-auto my-9 text-center z-20'>
      <Image className='text-center mx-auto' source={require('../../assets/Diagnoss/logo.png')}/>
      <GradientText
       className='flex-row m-auto bottom-20'
      text='Diagnoss'
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]} // Positions to match percentages in gradient
        style={{fontFamily:'Montserrat-Regular'}}/>
    </View>
  </BlurView>
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
//  gradient:{
//  position:'absolute',
//  top:350,
//  right:0,
 

// },
text: {
  fontSize: 48,
  fontFamily:'Montserrat-Regular',
  
},
// gradient: {
//   flex: 1,
// },
 container:{
  borderWidth:1,
  width:330,
  borderRadius:25,
  overflow:'hidden',
  height:480,
  borderColor:'#2E63EB',
  zIndex:1000,
  bottom:28
  
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
    top:50,
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

export default OnBoarding02