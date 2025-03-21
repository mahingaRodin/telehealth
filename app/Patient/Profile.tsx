import { View, Text,ScrollView,Image,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '@/constants/Colors'
import { router, useRouter } from 'expo-router'
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDown from './Picker'
import { LinearGradient } from 'expo-linear-gradient'
import DropDown2 from './Picker2'
import { useState } from 'react'
import CustomText from '../CustomText'
import GradientButton from '../GradientButton'

const Profile = () => {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateText, setDateText] = useState('');
  
    const router= useRouter();
    const [selectedValue, setSelectedValue] = useState(null);
  
    
     
    
     
      const onChange = (event: any, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDateText(currentDate.toLocaleDateString());
      };
      const showDatepicker = () => {
        setShow(true);
      };

    const handleValueChange = (value: React.SetStateAction<null>) => {
        setSelectedValue(value);
    };
    const options = [
        { label: 'India', value: 'india' },
        { label: 'Hungary', value: 'hung' },
        { label: 'Pakistan', value: 'pak' },
    ];
    const options1 = [
        { label: 'Delhi', value: 'ind' },
        { label: 'Covich', value: 'hun' },
        { label: 'Islamabad', value: 'pa' },
    ];
    const options2 = [
      { label: 'BC2', value: '2' },
      { label: 'BC3', value: '3' },
      { label: 'BC4', value: '4' },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      <View className='flex flex-row justify-between px-2 py-4'>
        

        <TouchableOpacity onPress={()=>router.navigate('/Patient/PatientHome')}>
        <Ionicons name='arrow-back' size={35} color={'green'}>
        </Ionicons>
        </TouchableOpacity>


    
        <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7'></Image>
         </View>

         <View className=''>
         <Text className='m-auto text-xl text-blue-500' style={{fontFamily:'Montserrat-SemiBold'}}>Setup Your Profile</Text>
         </View>
         <View className='flex flex-row justify-center pt-6 pb-5'>
            <Image source={require('../../assets/Diagnoss/userP.png')}></Image>
         </View>
         <View className='flex flex-row justify-center pt-3 pb-2'>
            <Text style={{fontFamily:'Montserrat-SemiBold'}} className='text-xl text-blue-500'>Add Your <Text className='text-[#2FAF64]'>Details</Text></Text>

         </View>
         <View className='flex-row justify-between px-2'>
            <View>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>First Name <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input}>
                <TextInput style={{width:130,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='Your name' className='p-3 opacity-50' ></TextInput>
              </View>
            </View>
            <View>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>Last Name <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input}>
                <TextInput style={{width:130,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='Your name' className='p-3 opacity-50'></TextInput>
              </View>
            </View>
            
          </View>
          <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>Email <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='Your Email' className='p-3 opacity-50'></TextInput>
              </View>
            </View>
            <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>Phone Number <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='+91xxxxxxxxxxx' className='p-3 opacity-50'></TextInput>
              </View>
            </View>
            <View className='flex flex-row justify-between px-3 pt-2'>
            <DropDown
                items={options}
                placeholder="Country"
                onValueChange={handleValueChange}
                selectedValue={selectedValue}
            />
             <DropDown
                items={options1}
                placeholder="City"
                onValueChange={handleValueChange}
                selectedValue={selectedValue}
            />
            </View>
            <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>Birth Date <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='flex flex-row justify-between px-2 pt-3'>

              <TextInput
                 placeholder="DD/MM/YYYY"
                 value={dateText}
                 onFocus={showDatepicker}
                  className='p-3'></TextInput>
                
              <TouchableOpacity onPress={showDatepicker} className='pr-3 opacity-50'>
                  <Ionicons name='calendar' size={35}></Ionicons>
                </TouchableOpacity>
                {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
                

              
              </View>
            </View>
            <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>Education <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='Bachelor’s In Data Science' className='p-3 opacity-50'></TextInput>
              </View>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>Department <Text className='text-blue-500'>*</Text></Text>
              <View style={{width:'100%'}}>
                
              <DropDown2
                items={options2}
                placeholder=""
                onValueChange={handleValueChange}
                selectedValue={selectedValue}
            />
              </View>
            </View>
            <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>Occupation <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='UI/UX Designer' className='p-3 opacity-50'></TextInput>
              </View>
            </View>
            <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green,fontFamily:'Montserrat-Medium'}}>aadhar card <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='348907980-90' className='p-3 opacity-50'></TextInput>
              </View>
            </View>

        
        <View className='flex flex-row justify-between px-2 pt-9 pb-5'>
        <View className=''>

<GradientButton

        text="Save changes"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
        
      />
      
            
           
        
        </View>
        <TouchableOpacity className='w-[170px] h-[50px]' style={{borderRadius:30, borderWidth:1, borderColor:'blue',overflow:'hidden'}}>
            <Text className='m-auto text-xl font-extrabold text-blue-500' style={{fontFamily:'Montserrat-Medium'}}>Reset</Text>
        </TouchableOpacity>
  
</View>

         </ScrollView>
  )
}
const styles = StyleSheet.create({
    input:{
        width:165,
        borderRadius:15,
        height:60,
        borderWidth:1,
        borderColor:'#C5C6CC',
              },
              input1:{
                width:'97%',
                borderRadius:15,
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

export default Profile