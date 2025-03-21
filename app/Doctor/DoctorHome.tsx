import { View, Text,SafeAreaView,StyleSheet,Animated, TouchableOpacity,ScrollView,ImageBackground } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import BookTest from './BookTest'
import CustomText from '../CustomText'
import Sidebar from './Sidebar'
import Time from '../Patient/Calendar'
import Table from '../Patient/Tableau'




const PatientHome = () => {
    const [viewAll, setViewAll] = useState(false);
    const router= useRouter();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };
      
    

    const handleViewAll = () => {
        setViewAll(prevState => !prevState);
      };
     
      const toggleModal = () => {
          setModalVisible(!isModalVisible)
        }
  return (
    <ScrollView>

<SafeAreaView>
        <View className='flex flex-row justify-between p-3 fixed z-50'>
        <View>
            <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7'></Image>
        </View>
        <View className='flex flex-row gap-4'>
          <TouchableOpacity onPress={()=>router.navigate('/Patient/Doctors')}>
          <Ionicons name='search-sharp' size={25} style={{color:Colors.colors.green}}></Ionicons>
          </TouchableOpacity>
          
           <TouchableOpacity onPress={()=>router.navigate('/Doctor/notify')}>
           <Ionicons name='notifications' size={25} style={{color:Colors.colors.green}}></Ionicons>
           </TouchableOpacity>
            <TouchableOpacity onPress={toggleSidebar}>
            <Ionicons
              name='menu-sharp'
              size={25}
              style={{ color: Colors.colors.green }}
            />
          </TouchableOpacity>
        </View>
        {isSidebarVisible && <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />}
    </View>

    <View className='flex flex-row justify-between px-4'>
        <View className='flex gap-2'>
            <CustomText className='text-lg'>Good Morning, <Text style={{color:Colors.colors.green}}>Dr Mike</Text> </CustomText>
            <CustomText style={{fontFamily:'Montserrat-Medium'}}>We are glad you came back 👌</CustomText>
        </View>
        <View className='bg-gray-200' style={styles.weather}>
            <View className='flex flex-row gap-3 p-2'>
                <Ionicons name='rainy' size={30} style={{color:Colors.colors.green}} ></Ionicons>
                <CustomText style={{fontFamily:'Montserrat-Medium',
                  fontSize:17
                }}>14 °C</CustomText>
            </View>
        </View>
    </View>

    <View>
      <View className="flex flex-row justify-between px-4 pt-5">
        <CustomText className="text-lg">
          UpComing Events
        </CustomText>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={{ color: Colors.colors.blue, fontFamily:'Montserrat-SemiBold' }} className="text-lg">
            View <Text style={{ color: Colors.colors.green }}>All</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {!viewAll && (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-4 px-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <View key={index} style={styles.doctor1} className="bg-gray-200 flex flex-row justify-around p-4">
                <Image source={require('../../assets/Diagnoss/doctor.png')} />
                <View className="gap-1">
                  <CustomText>Checkup</CustomText>
                  <CustomText style={{fontFamily:'Montserrat-Medium'}}>Dr. Mike</CustomText>
                  <View className="w-15">
                    <View className="flex flex-row gap-1">
                      <View className="w-3 h-3 bg-blue-600 rounded-full" />
                      <CustomText style={{
                        fontFamily:'Montserrat-Medium',
                        bottom:1
                      }}>Approved</CustomText>
                    </View>
                    <View className="flex flex-row gap-1">
                      <Ionicons name="timer" size={15} style={{ color: Colors.colors.green }} />
                      <CustomText>2:34:01</CustomText>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}

      {viewAll && (

        <View>
<View className='pl-5 pb-2'>
    <CustomText style={{fontFamily:'Montserrat-Medium'}}>Click an event to see details
    </CustomText>
    </View>
        
        <View className="flex flex-row flex-wrap gap-4 px-4">
        {Array.from({ length: 5 }).map((_, index) => (
              <TouchableOpacity onPress={()=>router.navigate('/Patient/Details')} key={index} style={styles.doctor} className="bg-gray-200 flex flex-row justify-around p-2">
                <Image source={require('../../assets/Diagnoss/doctor.png')} style={{width:50,height:39}} />
                <View className="gap-1">
                  <CustomText>Checkup</CustomText>
                  <CustomText style={{fontFamily:'Montserrat-Medium'}}>Dr. Mike</CustomText>
                  <View className="w-15">
                    <View className="flex flex-row gap-1">
                      <View className="w-3 h-3 bg-blue-600 rounded-full" />
                      <CustomText style={{
                        fontFamily:'Montserrat-Medium',
                        bottom:1
                      }}>Approved</CustomText>
                    </View>
                    <View className="flex flex-row gap-1">
                      <Ionicons name="timer" size={15} style={{ color: Colors.colors.green }} />
                      <CustomText>2:34:01</CustomText>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        </View>
      )}
<ScrollView className="flex flex-row gap-5 px-3" showsHorizontalScrollIndicator={false} horizontal={true}>
        <View >
          <TouchableOpacity className="flex flex-row gap-3 pt-2">
          <Image source={require('../../assets/Diagnoss/icon1.png')} />
          <CustomText style={{fontFamily:'Montserrat-Medium'}}>
            Schedule New Appointment
          </CustomText>
          </TouchableOpacity>
          
        </View>
        <View>
          <TouchableOpacity className="flex flex-row gap-3 pt-2" onPress={toggleModal}>
          <Image source={require('../../assets/Diagnoss/icon2.png')} />
          <CustomText style={{fontFamily:'Montserrat-Medium'}}>
            Book a test
          </CustomText>
          </TouchableOpacity>
          <BookTest isVisible={isModalVisible} onClose={toggleModal} />
          
        </View>
      </ScrollView>
      {!viewAll &&<Time />}

      
    </View>


<View className='flex flex-row justify-between px-4 pt-3'>
    <CustomText className='text-lg'>
        Pending Appointments
    </CustomText>
    <TouchableOpacity className=''>
        <CustomText className='text-lg' style={{color:Colors.colors.blue}}>
        View All
    </CustomText>
    </TouchableOpacity>
    
</View>

<View className='pt-6 pb-3 px-3'>
  <Table/>
</View>


   


      </SafeAreaView>
    </ScrollView>
    
     
    
    
  )

}

export default PatientHome;

const styles= StyleSheet.create({

    weather:{
        width:100,
        height:50,
        borderRadius:50,
        color:Colors.colors.background,
        
    },
    font:{
fontFamily:'Montserrat-Regular',
    },
    expert:{
width:270,
height:200,
    },
    doctor:{
        width:172,
        height:110,
        borderRadius:15,
        elevation:5,
        overflow:'hidden'


    },
    doctor1:{
      width:200,
      height:110,
      borderRadius:15,
      elevation:5,
      overflow:'hidden'


  },
    halfWidthDoctor: {
        
        borderRadius:10,
        maxWidth: '45%',
        margin:'auto',
        gap:5
      },
    calendar:{
        width:350,
        height:200,
        margin:'auto',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'grey'

    }
})