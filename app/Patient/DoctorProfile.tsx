import { View, Text,ScrollView,Image,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import Colors from '@/constants/Colors'
import GradientButton from '../GradientButton'
const DoctorProfile = () => {
    const router = useRouter()

  return (
    <ScrollView showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      <View className='flex flex-row justify-between px-2  py-4'>
        

        <TouchableOpacity onPress={()=>router.navigate('/Patient/PatientHome')}>
        <Ionicons name='arrow-back' size={35} color={'green'}>
        </Ionicons>
        </TouchableOpacity>


    
        <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7'></Image>
         </View>

         <View className='bottom-3'>
         <Text className='text-2xl text-blue-500 m-auto' style={{fontFamily:'Montserrat-SemiBold'}}>Profile</Text>
         </View>
         <View style={{width:339,height:180,borderWidth:1,margin:'auto',borderRadius:10,borderColor:'#2E63EB',backgroundColor:'white',elevation:2}}>
            <View className=' flex flex-row justify-between px-2 pt-5'>
<Image source={require('../../assets/Diagnoss/doc10.png')} style={{
    width:141,height:140
}}></Image>
<View style={{width:170,height:120,borderWidth:1,borderColor:'#C5C6CC', borderRadius:10}}>
    <View className='flex flex-col m-auto'>
    <Text className='text-lg ' style={{fontFamily:'Montserrat-SemiBold'}}>Dr Agnes</Text>
    <Text className='text-[#C5C6CC]' style={{fontFamily:'Montserrat-Medium'}}>Dermatologist</Text>
    <Text className='text-[#C5C6CC]' style={{fontFamily:'Montserrat-Medium'}}>Phone Number</Text>
    <Text className='text-[#2FAF64]' style={{fontFamily:'Montserrat-Medium'}}>Department</Text>
    <Text className='text-[#C5C6CC]' style={{fontFamily:'Montserrat-Medium'}}>Qualification</Text>
    </View>
   

</View>
            </View>
         </View>
         <View style={{width:'100%'}} className='flex-col gap-2 pt-3 pl-3'>
            <Text className='text-lg text-blue-500' style={{fontFamily:'Montserrat-SemiBold'}}>
                Profile:
            </Text>
            <Text className='' style={{fontFamily:'Montserrat-Medium'}}>
            Dr. John Doe is a compassionate and experienced physician 
            specializing in internal medicine, dedicated to providing 
            comprehensive care to his patients.
            </Text>
         </View>
         <View className='w-[90%]  m-auto pt-3 pb-3'>

<GradientButton

        text="Schedule an appointment"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
        
      />


  
  </View>

         <View className='flex-row justify-center pt-4'>
            <View className='flex flex-row gap-1'>
                <Ionicons name='star' size={30} color={'#2FAF64'}></Ionicons>
                <Ionicons name='star' size={30} color={'#2FAF64'}></Ionicons>
                <Ionicons name='star' size={30} color={'#2FAF64'}></Ionicons>
                <Ionicons name='star-outline' size={30} color={'#C5C6CC'}></Ionicons>
                <Ionicons name='star-outline' size={30} color={'#C5C6CC'}></Ionicons>
            </View>

         </View>

         <View className='pt-5'>
         <View className='pl-2'>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5, fontFamily:'Montserrat-Medium'}}
                placeholder='Enter Feedback' className=' p-3'
                ></TextInput>
              </View>
            </View>
         </View>
         <View className='pt-3 pl-2'>
         <TouchableOpacity className='w-[120px] h-[40px]' style={{borderRadius:30, borderWidth:1, borderColor:'blue'}}>
            <Text className='text-xl m-auto text-blue-500' style={{fontFamily:'Montserrat-Medium'}}>Send</Text>
        </TouchableOpacity>
         </View>
         <View className='flex-row justify-center pt-3 pb-2'>
            <Text className='text-blue-500 text-xl' style={{fontFamily:'Montserrat-SemiBold'}}>Reviews</Text>
            </View>
        <View className='gap-1 pl-2'>
      
        
            <View className='flex-row justify-between pr-2'>
                <View className='flex-row gap-3'>
                <Image source={require('../../assets/Diagnoss/rate.png')}>
             </Image>
             <Text className='text-md' style={{fontFamily:'Montserrat-Medium'}}>Jabari Banks</Text>
                </View>
                <View>
                    <Text className='text-[#8F9098]' style={{fontFamily:'Montserrat-Medium'}}>
                        5 days ago
                    </Text>
                    </View>
               
            </View>
            <View className='flex flex-row gap-1'>
                <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
                <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
                <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
                <Ionicons name='star-outline' size={20} color={'#C5C6CC'}></Ionicons>
                <Ionicons name='star-outline' size={20} color={'#C5C6CC'}></Ionicons>
            </View>
            <Text style={{fontFamily:'Montserrat-Medium'}}>
            I loved how caring she is! It’s really amazing✌️
            </Text>
        </View>
        <View className='px-2'>
        <View style={{
            borderBottomWidth:1,
            borderBlockColor: '#C5C6CC',
            width:'95%',
        }} className='pt-3'></View>
        </View>
        <View className='gap-1 pl-2 pt-2'>
      
        
      <View className='flex-row justify-between pr-2'>
          <View className='flex-row gap-3'>
          <Image source={require('../../assets/Diagnoss/rate.png')}>
       </Image>
       <Text className='text-md' style={{fontFamily:'Montserrat-Medium'}}>Jabari Banks</Text>
          </View>
          <View>
              <Text className='text-[#8F9098]' style={{fontFamily:'Montserrat-Medium'}}>
                  5 days ago
              </Text>
              </View>
         
      </View>
      <View className='flex flex-row gap-1'>
          <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
          <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
          <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
          <Ionicons name='star-outline' size={20} color={'#C5C6CC'}></Ionicons>
          <Ionicons name='star-outline' size={20} color={'#C5C6CC'}></Ionicons>
      </View>
      <Text style={{fontFamily:'Montserrat-Medium'}}>
      I loved how caring she is! It’s really amazing✌️
      </Text>
  </View>
  <View className='px-2'>
  <View style={{
      borderBottomWidth:1,
      borderBlockColor: '#C5C6CC',
      width:'95%',
  }} className='pt-3'></View>
  </View>
  <View className='gap-1 pl-2 pt-2'>
      
        
      <View className='flex-row justify-between pr-2'>
          <View className='flex-row gap-3'>
          <Image source={require('../../assets/Diagnoss/rate.png')}>
       </Image>
       <Text className='text-md' style={{fontFamily:'Montserrat-Medium'}}>Jabari Banks</Text>
          </View>
          <View>
              <Text className='text-[#8F9098]' style={{fontFamily:'Montserrat-Medium'}}>
                  5 days ago
              </Text>
              </View>
         
      </View>
      <View className='flex flex-row gap-1'>
          <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
          <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
          <Ionicons name='star' size={20} color={'#2FAF64'}></Ionicons>
          <Ionicons name='star-outline' size={20} color={'#C5C6CC'}></Ionicons>
          <Ionicons name='star-outline' size={20} color={'#C5C6CC'}></Ionicons>
      </View>
      <Text style={{fontFamily:'Montserrat-Medium'}}>
      I loved how caring she is! It’s really amazing✌️
      </Text>
  </View>
  <View className='px-2'>
  <View style={{
      borderBottomWidth:1,
      borderBlockColor: '#C5C6CC',
      width:'95%',
  }} className='pt-3'></View>
  </View>
  <TouchableOpacity className='flex-row justify-center pt-4 pb-4'>
    <Text className='text-blue-500  text-lg' style={{fontFamily:'Montserrat-Medium'}}>
        Load more...
    </Text>
  </TouchableOpacity>
         </ScrollView>
  )
}
const styles = StyleSheet.create({
    input1:{
        width:'97%',
        borderRadius:10,
        height:60,
        borderWidth:1,
        borderColor:'#C5C6CC',
              },
              button: {
                borderRadius: 60,
              },
              buttonText: {
                fontSize: 20,
                fontFamily:'Montserrat-Regular'
                
              },
})

export default DoctorProfile