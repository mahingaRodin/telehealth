import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { Image,ImageBackground } from 'react-native'
import { BlurView } from 'expo-blur'
import GradientText from '../GreadientText'

const Onboarding = () => {
  return (
    <View>
        <ImageBackground source={require('../../assets/Diagnoss/specto.png')} style={styles.image}  className=''>
        
        <View>
          
      <BlurView intensity={120} tint='light' style={styles.container}>
        <View className='absolute inset-0 flex justify-center items-center z-10'>
          
        </View>
        
        <View className='relative mx-auto my-9 text-center z-20'>
          <Image className='text-center mx-auto' source={require('../../assets/Diagnoss/logo.png')}/>
          <GradientText
      text='Diagnoss'
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]} // Positions to match percentages in gradient
        style={styles.text}
     className='flex-row m-auto bottom-20' /> 
      </View>
      </BlurView>
    </View>
      </ImageBackground>
      </View>
  )
}
const styles=StyleSheet.create({
    image:{
      width:320,
      height:750,
      
      position:'relative',
      
      
   },
   text: {
    fontSize: 48,
    fontFamily:'Montserrat-Regular',
    
  },
   container:{
    borderWidth:1,
    width:330,
    top:130,
    borderRadius:25,
    overflow:'hidden',
    height:480,
    borderColor:'#2E63EB',
    zIndex:1000,
    backgroundColor:''
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

export default Onboarding