import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Doc from '../Patient/doc'
import GradientButton from '../GradientButton'
import Colors from '@/constants/Colors'
import { BlurView } from 'expo-blur'

const component = () => {
  return (
    <View>
      <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Insert The Report For Completed Lab</Text>
                    <BlurView intensity={120} tint='light' style={styles.container}>
                    <View className='px-3'>
                    <View className='gap-2'>
                    <View className='gap-1'>
                      <View className='flex-row gap-2'>
                      <View className=''>
                      <Text style={{fontFamily:'Montserrat-SemiBold'}}>Email</Text>
                    <View style={styles.inputContainer1} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='First name' className='w-[100px]'
    style={{fontFamily:'Montserrat-Medium'}}/>

  </View>
                      </View>
                      <View className=''>
                      <Text style={{fontFamily:'Montserrat-SemiBold'}}>Email</Text>
                    <View style={styles.inputContainer1} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Last name' className='w-[100px]'
    style={{fontFamily:'Montserrat-Medium'}}/>

  </View>
                      </View>
                      </View>
                      
                       
                    </View>
                    <View className='gap-1'>
                        <Text style={{fontFamily:'Montserrat-SemiBold'}}>Test Name</Text>
                    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter your Email' className='w-[200px]'
    style={{fontFamily:'Montserrat-Medium'}}/>

  </View>
                    </View>
                    <View className='gap-1'>
                        <Text style={{fontFamily:'Montserrat-SemiBold'}}>Description</Text>
                    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter your Email' className='w-[200px]' style={{fontFamily:'Montserrat-Medium'}}/>

  </View>
                    </View>
                    <View className='gap-1'>
                      
                    </View>
                    
                    </View>
                    <View className='pt-5'>
                    <Doc/>
                    </View>
                
                   
                    <View className='w-[70%]  m-auto pt-3 pb-3'>

<GradientButton
        text="Submit"
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
                   
                    
                </View>
    </View>
  )
}
const styles= StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily:'Montserrat-Regular',
        color: Colors.colors.blue,
        margin: 'auto',
    },
    icon:{
        top:6.5,
    
      },
    inputContainer:{
        borderWidth:1,
        borderColor:'#8F9098',
        borderRadius:100,
        paddingHorizontal:20,
        
        width:300,
        height:45,
      },
      inputContainer1:{
        borderWidth:1,
        borderColor:'#8F9098',
        borderRadius:100,
        paddingHorizontal:10,
        
        width:150,
        height:45,
      },
      button: {
        borderRadius: 60,
      },
      buttonText: {
        fontSize: 20,
        fontFamily:'Montserrat-Regular'
        
      },
      container:{
        borderWidth:1,
        width:350,
      
        borderRadius:25,
        overflow:'hidden',
        height:400,
        borderColor:'#2E63EB',
        zIndex:1000,
        backgroundColor:''
      },
    closeText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default component