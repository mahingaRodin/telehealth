import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet,ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import CustomText from '../CustomText';

const notificationsData = [
  { id: 1, title: 'Profile', description: 'Blood Culture', time: '2hr 20min' },
  { id: 2, title: 'Profile', description: 'Blood Culture', time: '2hr 20min' },
  { id: 3, title: 'Profile', description: 'Blood Culture', time: '2hr 20min' },
  { id: 4, title: 'Profile', description: 'Blood Culture', time: '2hr 20min' },
  { id: 5, title: 'Profile', description: 'Blood Culture', time: '2hr 20min' },
 
];

const Notifications = () => {
  const router = useRouter();
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View className='flex flex-row justify-between px-2 py-4'>
        <TouchableOpacity onPress={() => router.navigate('/Patient/PatientHome')}>
          <Ionicons name='arrow-back' size={35} color={'green'} />
        </TouchableOpacity>

        <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7' />
      </View>
      
      <View className=''>
        <Text className='text-2xl text-blue-500  m-auto' style={{
          fontFamily:'Montserrat-SemiBold'
        }}>Notifications</Text>
      </View>
      
      <View className='flex flex-row justify-end px-2'>
        <TouchableOpacity>
          <Text style={{ color: Colors.colors.green,
            fontFamily:'Montserrat-Medium' 
           }} className='text-lg'>Clear All</Text>
        </TouchableOpacity>
      </View>

      <View className='px-4 pt-3 gap-3'>
        {notificationsData.map((notification) => (
          <View key={notification.id} className='flex flex-row justify-between px-3 pt-4' style={styles.notification}>
            <Image source={require('../../assets/Diagnoss/avatar.png')} />
            
            <View>
              <Text className='text-lg text-blue-500' style={{
                fontFamily:'Montserrat-Medium'
              }}>{notification.title}</Text>
              <Text className='text-lg text-green-600 font-extralight' style={{
                fontFamily:'Montserrat-Medium'
              }}>{notification.description}</Text>
            </View>
            
            <Text className='text-[#8F9098]' style={{
              fontFamily:'Montserrat-Medium'
            }}>{notification.time}</Text>
            
            <TouchableOpacity>
              <Text className='text-blue-500 text-lg' style={{
                fontFamily:'Montserrat-Medium'
              }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  );
};

const styles = StyleSheet.create({
  notification: {
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: '100%',
    height: 80,
    borderRadius: 14,
  },
  expert:{
    width:260,
    height:200,
        },
});

export default Notifications;
