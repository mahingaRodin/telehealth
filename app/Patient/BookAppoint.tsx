import { View, Text,ScrollView,TouchableOpacity,Image,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import GradientButton from '../GradientButton'
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { LinearGradient } from 'expo-linear-gradient'

import PopupModal from './SerchPopup'
import SubmitPopup from './submitPopup'
import Colors from '@/constants/Colors'

const BookAppoint = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('22/07/2024');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString('en-GB'); // Format as DD/MM/YYYY
    setSelectedDate(formattedDate);
    hideDatePicker();
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDateText(currentDate.toLocaleDateString());
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalShown, setModalShown] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggledModal =()=>{
    setModalShown(!isModalShown)
  }

  const showDatepicker = () => {
    setShow(true);
  };

    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    
  const handleCheckboxChange = (index) => {
    setSelectedCheckbox(index);
  };
    const router = useRouter();
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

         <View className=''>
         <Text className='text-xl text-blue-500  m-auto' style={{
          fontFamily:'Montserrat-SemiBold',
         }}>Book an appointment</Text>
         </View>

         {/* <View className='m-auto'>
         <View className='gap-1 flex flex-row justify-evenly ' style={styles.top}>
          {['Doctor', 'App Details', 'Event Details'].map((label, index) => (
        <View key={index} className="flex flex-col gap-3">
          <TouchableOpacity
             style={[
                styles.roundedButton,
                selectedCheckbox === index && styles.selectedButton,
              ]}
              onPress={() => handleCheckboxChange(index)}
          />
          <Text className='font-light' style={[styles.text, selectedCheckbox === index && styles.checkedText]}>
            {label}
          </Text>
        </View>
      ))}
  </View>
         </View> */}

         <View className='flex flex-row gap-5 px-4 pt-7'>
            <View style={styles.btn}><Text className='text-white'>1</Text></View>

            <Text className='text-lg text-blue-500' style={{fontFamily:'Montserrat-SemiBold'}}>Select Doctor From Our <Text className='text-[#2FAF64]'>Elites</Text></Text>
         </View>
         <View className='flex flex-row justify-between px-2 pt-3'>
          <View className='w-[190px] h-[50px] rounded-xl bg-gray-300 '>
            <TouchableOpacity className='flex flex-row justify-evenly px-1 pt-2' onPress={toggleModal}>
        
            <Ionicons name='search' size={30} color={Colors.colors.green}></Ionicons>
            <Text className='font-light text-lg' style={{color:Colors.colors.gradient,fontFamily:'Montserrat-Medium'}}>Search a doctor</Text>

            <PopupModal isVisible={isModalVisible} onClose={toggleModal} />
            </TouchableOpacity>
           
        
          </View>
          <View className='w-[130px] h-[50px] rounded-xl' style={{
            borderWidth:1,
            borderColor:'gray'
          }}>
            <TouchableOpacity className='flex flex-row justify-evenly px-1 pt-2' onPress={toggleModal}>
        
            <Ionicons name='filter-sharp' size={30} color={Colors.colors.green}></Ionicons>
            <Text className='font-light text-lg' style={{color:Colors.colors.gradient,fontFamily:'Montserrat-Medium'}}>Filter</Text>
            <Ionicons name='chevron-down-outline' size={25} style={styles.opacity}></Ionicons>
            </TouchableOpacity>
           
        
          </View>
         </View>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='flex flex-row pt-5 gap-3 px-3'>
          <View  style={{width:200,height:212,borderWidth:1,borderRadius:10,borderColor:'#C5C6CC'}}>
          <View className='p-1'>
          <Image source={require('../../assets/Diagnoss/expert.png')} style={{width:185,borderRadius:16,height:150}}></Image>
          <Text className='text-lg text-blue-500'style={{fontFamily:'Montserrat-SemiBold'}}>Dr Mike</Text>
          <View className='flex-row gap-1'>
            <Text className='text-sm' style={{fontFamily:'Montserrat-Medium'}}>Cardiologist</Text>
            <LinearGradient colors={['#11CC9F',
                '#36BE69','#91CE59'
            ]} style={{borderRadius:10,width:100,bottom:7}}>
            <TouchableOpacity className='w-[100px] h-[30px]'>
            <Text className='text-xl m-auto text-white font-light' style={{fontFamily:'Montserrat-Medium'}}>Select</Text>
            
        </TouchableOpacity>
            </LinearGradient>
          </View>
         </View>
          </View>
          <View  style={{width:200,height:212,borderWidth:1,borderRadius:10,borderColor:'#C5C6CC'}}>
          <View className='p-1'>
          <Image source={require('../../assets/Diagnoss/jane.png')} style={{width:185,borderRadius:16,height:150}}></Image>
          <Text className='text-lg text-blue-500'style={{fontFamily:'Montserrat-SemiBold'}}>Dr Jane</Text>
          <View className='flex-row justify-between px-1'>
            <Text className='text-sm' style={{fontFamily:'Montserrat-Medium'}}>Dentist</Text>
            <LinearGradient colors={['#11CC9F',
                '#36BE69','#91CE59'
            ]} style={{borderRadius:10,width:100,bottom:7}}>
            <TouchableOpacity className='w-[100px] h-[30px]'>
            <Text className='text-xl m-auto text-white font-light' style={{fontFamily:'Montserrat-Medium'}}>Select</Text>
            
        </TouchableOpacity>
            </LinearGradient>
          </View>
         </View>
          </View>
          <View  style={{width:200,height:212,borderWidth:1,borderRadius:10,borderColor:'#C5C6CC'}}>
          <View className='p-1'>
          <Image source={require('../../assets/Diagnoss/expert.png')} style={{width:185,borderRadius:16,height:150}}></Image>
          <Text className='text-lg text-blue-500'style={{fontFamily:'Montserrat-SemiBold'}}>Dr Mike</Text>
          <View className='flex-row gap-2.5'>
            <Text className='text-sm' style={{fontFamily:'Montserrat-Medium'}}>Cardiologist</Text>
            <LinearGradient colors={['#11CC9F',
                '#36BE69','#91CE59'
            ]} style={{borderRadius:10,width:100,bottom:7}}>
            <TouchableOpacity className='w-[100px] h-[30px]'>
            <Text className='text-xl m-auto text-white' style={{fontFamily:'Montserrat-Medium'}}>Select</Text>
            
        </TouchableOpacity>
            </LinearGradient>
          </View>
         </View>
          </View>
         
         </ScrollView>

         <View className='flex flex-row gap-10 px-4 pt-7'>
          
            <View style={styles.btn2}><Text className='text-green-400'>1</Text></View>

            <Text className='text-lg text-blue-500 font-semibold' style={{
              fontFamily:'Montserrat-SemiBold'
            }}>Add Your <Text className='text-[#2FAF64]'>Details</Text></Text>
         </View>

<View className='pt-4'>

          <View className='flex-row justify-between px-2'>
            <View>
              <Text className='text-lg' style={{color:Colors.colors.green, fontFamily:'Montserrat-Medium'}}>First Name <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input}>
                <TextInput style={{width:130,height:60,paddingHorizontal:5, fontFamily:'Montserrat-Medium'}}
                placeholder='Your name' className='opacity-50 p-3'></TextInput>
              </View>
            </View>
            <View>
              <Text className='text-lg' style={{color:Colors.colors.green, fontFamily:'Montserrat-Medium'}}>Last Name <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input}>
                <TextInput style={{width:130,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='Your name' className='opacity-50 p-3'></TextInput>
              </View>
            </View>
            
          </View>

          <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green, fontFamily:'Montserrat-Medium'}}>Email <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='Your Email' className='opacity-50 p-3'></TextInput>
              </View>
            </View>
            <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green, fontFamily:'Montserrat-Medium'}}>Phone Number <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='+91xxxxxxxxxxx' className='opacity-50 p-3'></TextInput>
              </View>
            </View>


            <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green, fontFamily:'Montserrat-Medium'}}>Birth Date <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2 pt-3 flex-row flex justify-between'>

              <TextInput
                 placeholder="DD/MM/YYYY"
                 value={dateText}
                 onFocus={showDatepicker}
                  className='p-3'></TextInput>
                
              <TouchableOpacity onPress={showDatepicker} className='opacity-50 pr-3'>
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
         </View>

         <View className='flex flex-row gap-10 px-4 pt-7'>
            <View style={styles.btn2}><Text className='text-green-400'>1</Text></View>

            <Text className='text-lg text-blue-500 ' style={{fontFamily:'Montserrat-SemiBold'}}>Event <Text className='text-[#2FAF64]'>Details</Text></Text>
         </View>

         <View className='pt-4'>
 <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green, fontFamily:'Montserrat-Medium'}}>Appointment Title <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='Example.com' className='opacity-50 p-3'></TextInput>
              </View>
            </View>
            <View className='pl-2'>
              <Text className='text-lg' style={{color:Colors.colors.green, fontFamily:'Montserrat-Medium'}}>Appointment Description <Text className='text-blue-500'>*</Text></Text>
              <View style={styles.input1} className='px-2'>
                <TextInput style={{width:500,height:60,paddingHorizontal:5,fontFamily:'Montserrat-Medium'}}
                placeholder='Example.com' className='opacity-50 p-3'></TextInput>
              </View>
            </View>

         </View>
         <View className='pt-5 flex-row justify-between px-3'>
         <View className='w-[140px] h-[50px] rounded-xl' style={styles.container}>
      <TouchableOpacity className='flex flex-row gap-2  m-auto' onPress={showDatePicker}>
        <Ionicons name='filter-sharp' size={20} color={Colors.colors.green} />
        <Text className='font-light text-md' style={{ color: Colors.colors.gradient }}>{selectedDate}</Text>
        <Ionicons name='chevron-down-outline' size={20} style={styles.opacity} />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      
      />
    </View>
         

         <View>
         <View className='gap-2'>
          <Text style={{color:Colors.colors.gradient, fontFamily:'Montserrat-Medium'}} className='text-[10px]'>
          Unscheduled Time On 22/07/2024
          </Text>
          <TouchableOpacity style={styles.elevate}>
          <View className='flex flex-row gap-2 justify-center pt-2'>
            <View className='w-[50px] h-[30px]' style={{borderWidth:1, borderRadius:8
            }}>
              <Text className='m-auto text-lg' style={{fontFamily:'Montserrat-Medium'}}>2:30 am</Text>
            </View>
            <View style={styles.hr}></View>
            <View className='w-[50px] h-[30px]' style={{borderWidth:1, borderRadius:8
            }}>
              <Text className='m-auto text-lg' style={{fontFamily:'Montserrat-Medium'}}>2:30 am</Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.elevate}>
          <View className='flex flex-row gap-2 justify-center pt-2'>
            <View className='w-[50px] h-[30px]' style={{borderWidth:1, borderRadius:8
            }}>
              <Text className='m-auto text-lg'  style={{fontFamily:'Montserrat-Medium'}}>2:30 am</Text>
            </View>
            <View style={styles.hr}></View>
            <View className='w-[50px] h-[30px]' style={{borderWidth:1, borderRadius:8
            }}>
              <Text className='m-auto text-lg'  style={{fontFamily:'Montserrat-Medium'}}>2:30 am</Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.elevate}>
          <View className='flex flex-row gap-2 justify-center pt-2'>
            <View className='w-[50px] h-[30px]' style={{borderWidth:1, borderRadius:8
            }}>
              <Text className='m-auto text-lg'  style={{fontFamily:'Montserrat-Medium'}}>2:30 am</Text>
            </View>
            <View style={styles.hr}></View>
            <View className='w-[50px] h-[30px]' style={{borderWidth:1, borderRadius:8
            }}>
              <Text className='m-auto text-lg'  style={{fontFamily:'Montserrat-Medium'}}>2:30 am</Text>
            </View>
          </View>
          </TouchableOpacity>
        
          
         
        
         </View>
         </View>
        
         </View>

         <View className='w-[90%]  m-auto pt-3 pb-3'>

<GradientButton
onPress={toggledModal}
        text="Submit"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
        
      />
<SubmitPopup isVisible={isModalShown} onClose={toggledModal} />
  

  
  </View>



         
       
       
         </ScrollView>
  )
}

const styles = StyleSheet.create({
    roundedButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderRadius: 30,
        backgroundColor: '#D4D6DD',
        
      },
      container: {
        borderWidth: 1,
        borderColor: 'gray',
      },
      elevate:{
        elevation:15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        width:180,
        height:50,
        backgroundColor:'white',
        borderRadius:10,
      },
      button: {
        borderRadius: 60,
      },
      buttonText: {
        fontSize: 20,
        fontFamily:'Montserrat-Regular'
        
      },
      hr: {
        borderBottomColor: 'lightblue',  // Color of the line
        borderBottomWidth: 1,       // Thickness of the line
        marginVertical: 10,
        width:30,       // Vertical margin for spacing
      },
      opacity:{
        opacity:0.3,
        bottom:1,
        right:4

      },
      input:{
width:165,
borderRadius:40,
height:60,
borderWidth:1,
borderColor:'#C5C6CC',
      },
      input1:{
        width:'97%',
        borderRadius:40,
        height:60,
        borderWidth:1,
        borderColor:'#C5C6CC',
              },
      btn:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        fontFamily:'Montserrat-Medium',
        borderRadius: 30,
        backgroundColor: '#2FAF64',
      },
      btn2:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderRadius: 30,
     borderWidth:1,
     borderColor:'gray'
      },
      top:{
        width:350,
        height:80,
        borderEndWidth:0.5,
        borderBottomWidth:0.5,
        borderBottomColor:'blue',
        borderEndColor:'blue',
        borderEndEndRadius:30,
        borderBottomEndRadius:30

      },
      selectedButton: {
        backgroundColor: '#2FAF64',
      },
      text: {
        fontSize: 16,
        right:9
        // other text styles
      },
      checkedText: {
        color: 'black',
        fontWeight:700
        
      },
})
export default BookAppoint