import { View, Text,SafeAreaView,StyleSheet,Animated,TextInput, TouchableOpacity,ScrollView,ImageBackground } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import BookTest from './../Patient/BookTest'
import Sidebar from '../Patient/Sidebar'
import Time from '../Patient/Calendar'
import Tableau from '../Patient/Tableau'
import { BlurView } from 'expo-blur'
import Doc from './Doc'
import { LinearGradient } from 'expo-linear-gradient'
import CustomText from './CustomText';
import Component from './component'




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
    <ScrollView className='bg-white'>

<SafeAreaView>
        <View className='flex flex-row justify-between p-3 fixed z-50'>
        <View>
            <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7'></Image>
        </View>
        <View className='flex flex-row gap-4'>
          <TouchableOpacity >
          <Ionicons name='search-sharp' size={25} style={{color:Colors.colors.green}}></Ionicons>
          </TouchableOpacity>
          
           <TouchableOpacity>
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

    <View className='flex flex-row justify-between px-2'>
        <View className='flex-col'>
            <View className='m-auto top-2'>
                <Image source={require('../../assets/Diagnoss/lab.png')}></Image></View>
            
            <Text className='text-xl' style={{
              fontFamily:'Montserrat-SemiBold',
             }}>Welcome Into <Text style={{color:Colors.colors.green}}>Dr.Mike Lab</Text> </Text>
      
        </View>
        <View className='bg-gray-200 ' style={styles.weather}>
            <View className='flex flex-row gap-3 p-2'>
                <Ionicons name='rainy' size={30} style={{color:Colors.colors.green}} ></Ionicons>
                <Text className='text-lg'
                  
              >14 °C</Text>
            </View>
        </View>
    </View>

    <View>
      <View className="flex flex-row justify-between px-4 pt-5">
        <Text className="text-lg" style={{
          fontFamily:'Montserrat-SemiBold'
        }}>
          Lab Tests        </Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={{ color: Colors.colors.blue, fontFamily:'Montserrat-Medium'}} className="text-lg">
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
                  <Text style={{fontFamily:'Montserrat-SemiBold'}}>Blood Culture</Text>
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
              <TouchableOpacity  key={index} style={styles.doctor} className="bg-gray-200 flex flex-row justify-around p-2">
                <Image source={require('../../assets/Diagnoss/doctor.png')} style={{width:50,height:39}} />
                <View className="gap-1">
                  <Text style={{fontFamily:'Montserrat-SemiBold'}}>Blood Culture</Text>
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
<View className="flex flex-row gap-5 px-3">
        <View >
          <TouchableOpacity className="flex flex-row gap-3 pt-2">
          <Image source={require('../../assets/Diagnoss/icon1.png')} />
          <Text style={{fontFamily:'Montserrat-Medium'}}>
            Add a Lab Test
          </Text>
          </TouchableOpacity>
          
        </View>
        <View>
         
          <BookTest isVisible={isModalVisible} onClose={toggleModal} />
          
        </View>
      </View>
      <View className='pt-2'>
      {/* <BlurView intensity={100} tint='light'
style={styles.container} className="m-auto pt-3 pl-2">
  <View>
  <View className='flex-row justify-between px-2'>
            <View>
              <Text className='text-lg'>First Name</Text>
              <View style={styles.input}>
                <TextInput style={{width:130,height:60,paddingHorizontal:5}}
                placeholder='Your name' className='opacity-50 p-3'></TextInput>
              </View>
            </View>
            <View>
              <Text className='text-lg'>Last Name</Text>
              <View style={styles.input}>
                <TextInput style={{width:130,height:60,paddingHorizontal:5}}
                placeholder='Your name' className='opacity-50 p-3'></TextInput>
              </View>
            </View>
            
          </View>
          <View className='pl-2'>
          <Text className='text-lg'>Email</Text>
          
          <View style={styles.inputContainer} className='flex flex-row-reverse justify-between'>
<Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
<TextInput placeholder='Enter your Email' className='w-[200px]'/>

</View>
          </View>
          <View className='pl-2 pt-3'>
          <Text className='text-lg'>Email</Text>
          
          <View style={styles.inputContainer} className='flex flex-row-reverse justify-between'>
<Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
<TextInput placeholder='Enter your Email' className='w-[200px]'/>

</View>
          </View>
          <View className='m-auto pt-5'>
            <Doc/>
          </View>
          <View className='pt-5 m-auto'>
          <LinearGradient colors={['#11CC9F',
                '#36BE69','#91CE59'
            ]} style={{borderRadius:30,width:250}}>
            <TouchableOpacity className='w-[250px] h-[50px]'>
            <Text className='text-xl m-auto text-white font-extrabold'>Submit</Text>
            
        </TouchableOpacity>
            </LinearGradient>
          </View>
     
  </View>



</BlurView> */}

      </View>
     

      
    </View>
    <View>
      <Component/>
    </View>


<View className='flex flex-row justify-between px-4 pt-3'>
    <Text className='text-lg font-extrabold'>
        Pending Tests
    </Text>
    <TouchableOpacity className='' onPress={()=>router.navigate('/Patient/Doctors')}>
        <Text className='font-extrabold text-lg' style={{color:Colors.colors.blue}}>
        View All
    </Text>
    </TouchableOpacity>
    
</View>

<View className='px-3 pt-2'>
  <Tableau/>
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
    icon:{
      top:10

    },
   
    inputContainer:{
      borderWidth:1,
      borderColor:'#8F9098',
      borderRadius:100,
      paddingHorizontal:20,
    
      width:290,
      height:55,
    },
 
    doctor1:{
      width:230,
      height:110,
      borderRadius:15,
      elevation:5,
      overflow:'hidden'


  },
    input1:{
      width:'97%',
      borderRadius:40,
      height:60,
      borderWidth:1,
      borderColor:'#C5C6CC',
            },
    expert:{
width:260,
height:200,
    },
    doctor:{
        width:172,
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
      input:{
        width:130,
        borderRadius:40,
        height:55,
        borderWidth:1,
        borderColor:'#C5C6CC',
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