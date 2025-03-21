import { View, Text,TouchableOpacity,Image,StyleSheet,TextInput,ImageBackground,ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import CheckBox from 'expo-checkbox';
import CustomText from '../CustomText'
import Colors from '@/constants/Colors'
const CancelAppoint = () => {
    const router = useRouter()
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [text, setText] = useState('');

  const handleCheckboxChange = (index) => {
    setSelectedCheckbox(index);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      <View className='flex flex-row justify-between px-2  py-4'>
        

        <TouchableOpacity onPress={()=>router.navigate('/Patient/Details')}>
        <Ionicons name='arrow-back' size={35} color={'green'}>
        </Ionicons>
        </TouchableOpacity>
    
        <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7'></Image>
         </View>

         <View className=''>
         <Text className='text-xl text-blue-500  m-auto' style={{fontFamily:'Montserrat-SemiBold'}}>Cancel Appointment</Text>
         </View>

         <View className='flex flex-col gap-2 px-2 pt-3'>
            <View>
                <Text className='text-lg text-green-500 ' style={{fontFamily:'Montserrat-Medium'}}>
                Please Tells us the reason for cancelling this appointment? 
                </Text>
            </View>
          <View className='pt-2 gap-1'>
          {['I won\'t be available', 'I won\'t be available', 'Unexpected work', 'Other'].map((label, index) => (
        <View key={index} className="flex flex-row gap-3">
          <CheckBox
            value={selectedCheckbox === index}
            onValueChange={() => handleCheckboxChange(index)}
            style={styles.checkbox}
          />
          <Text style={[styles.text, selectedCheckbox === index && styles.checkedText]}>
            {label}
          </Text>
        </View>
      ))}
  </View>
  
         </View>


         <View className='flex flex-col gap-2 px-3 pt-3'>
            <Text className='text-md 
            font-light' style={{fontFamily:'Montserrat-Medium'}}>
            Please tell us much about your reason here
            </Text>

            <TextInput
        style={styles.textInput}
        multiline={true}
        numberOfLines={5}
        value={text}
        onChangeText={(newText) => setText(newText)}
        placeholder="Enter your reason here..."
      />


         </View>
         <View className='m-auto pt-5'>
<TouchableOpacity className='w-[250px] h-[50px]' style={{borderRadius:30, borderWidth:1, borderColor:'blue'}} onPress={()=>router.navigate('/Patient/PatientHome')}>
            <Text className='text-xl m-auto text-blue-500 ' style={{fontFamily:'Montserrat-Medium'}}>Cancel Appointment</Text>
        </TouchableOpacity>
</View>



<View className="flex flex-row gap-3 pt-6 px-3">
          <Image source={require('../../assets/Diagnoss/icon1.png')} />
          <Text style={{fontFamily:'Montserrat-Medium'}}>
            Schedule New Appointment
          </Text>
        </View>

        <View className='flex flex-row justify-between px-4 pt-3'>
    <CustomText className='text-lg'>
        Our Doctors
    </CustomText>
    <TouchableOpacity className='' onPress={()=>router.navigate('/Patient/Doctors')}>
        <CustomText className='text-lg' style={{color:Colors.colors.blue}}>
        View All
    </CustomText>
    </TouchableOpacity>
    
</View>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View className='flex flex-row gap-4 px-4 pt-3'>
<ImageBackground source={require('../../assets/Diagnoss/expert.png')} style={styles.expert} className='z-50'>
<View className='flex flex-row justify-between px-2 pt-1'>
    <Image source={require('../../assets/Diagnoss/logo.png')} className='w-8 h-7'></Image>
    <Image source={require('../../assets/Diagnoss/profile.png')}></Image>
</View>

<View className='gap-3 justify-center items-center'>
    <CustomText className='text-white text-2xl'>Opened</CustomText>
    <View className='flex flex-row'>
        <Ionicons name='timer' size={30} color={'white'}></Ionicons>
        <CustomText className='text-white text-lg' style={{fontFamily:'Montserrat-Medium'}}>Opened</CustomText>
    </View>
</View>
<View>
    <CustomText className='text-white pl-1' style={{fontFamily:'Montserrat-Medium'}}>"Experience compassionate,
         expert care with Dr. Adam Smith. 
         Your health and well-being are our t
         op priorities."
    </CustomText>
</View>

</ImageBackground>
<ImageBackground source={require('../../assets/Diagnoss/expert.png')} style={styles.expert} className='z-50'>
<View className='flex flex-row justify-between px-2 pt-1'>
    <Image source={require('../../assets/Diagnoss/logo.png')} className='w-8 h-7'></Image>
    <Image source={require('../../assets/Diagnoss/profile.png')}></Image>
</View>

<View className='gap-3 justify-center items-center'>
    <CustomText className='text-white text-2xl'>Opened</CustomText>
    <View className='flex flex-row'>
        <Ionicons name='timer' size={30} color={'white'}></Ionicons>
        <CustomText className='text-white text-lg' style={{fontFamily:'Montserrat-Medium'}}>Opened</CustomText>
    </View>
</View>
<View>
    <CustomText className='text-white pl-1' style={{fontFamily:'Montserrat-Medium'}}>"Experience compassionate,
         expert care with Dr. Adam Smith. 
         Your health and well-being are our t
         op priorities."
    </CustomText>
</View>

</ImageBackground>
<ImageBackground source={require('../../assets/Diagnoss/expert.png')} style={styles.expert} className='z-50'>
<View className='flex flex-row justify-between px-2 pt-1'>
    <Image source={require('../../assets/Diagnoss/logo.png')} className='w-8 h-7'></Image>
    <Image source={require('../../assets/Diagnoss/profile.png')}></Image>
</View>

<View className='gap-3 justify-center items-center'>
    <CustomText className='text-white text-2xl'>Opened</CustomText>
    <View className='flex flex-row'>
        <Ionicons name='timer' size={30} color={'white'}></Ionicons>
        <CustomText className='text-white text-lg' style={{fontFamily:'Montserrat-Medium'}}>Opened</CustomText>
    </View>
</View>
<View>
    <CustomText className='text-white pl-1' style={{fontFamily:'Montserrat-Medium'}}>"Experience compassionate,
         expert care with Dr. Adam Smith. 
         Your health and well-being are our t
         op priorities."
    </CustomText>
</View>

</ImageBackground>
</View>
</ScrollView>
</ScrollView>
    
  )
}

const styles =StyleSheet.create({
    checkbox: {
        width:20,
        height:20,
        borderRadius:50,
        top:4
    
      },
      checkedCheckbox: {
        backgroundColor: 'green',
      },
      text: {
        fontSize: 20,
        fontFamily:'Montserrat-Regular'
        // other text styles
      },
      checkedText: {
        color: 'blue',
      },
      textInput: {
        height: 100,
        width:335,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:20,
        padding: 10,
        fontFamily:'Montserrat-Medium',
        textAlignVertical: 'top', // Ensures the text starts from the top in multiline input
      },
      expert:{
        width:260,
        height:200,
            },
})

export default CancelAppoint