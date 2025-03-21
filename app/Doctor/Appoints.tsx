import { View, Text,TouchableOpacity,ScrollView,ImageBackground } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import Colors from '@/constants/Colors'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import PopupModal from './BookTest'
import Tableau from '../Patient/Tableau'
import GradientButton from '../GradientButton'
import { Link } from 'expo-router'
import CustomText from '../CustomText'
import Table from '../Patient/Tableau'

const Details = () => {
    const router= useRouter();
    const [selectedTab, setSelectedTab] = useState('completed');
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View className='flex flex-row justify-between px-2  py-4'>
        

        <TouchableOpacity onPress={()=>router.navigate('/Doctor/DoctorHome')}>
        <Ionicons name='arrow-back' size={35} color={'green'}>
        </Ionicons>
        </TouchableOpacity>
    
        <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7'></Image>
         </View>
         <View className='m-auto'>
          <Text className='text-xl text-blue-500' style={{fontFamily:'Montserrat-SemiBold'}}>Appointments</Text>
         </View>
             



         <View className='pt-4'>
      <View style={styles.container} className='bg-gray-200'>
        <TouchableOpacity
          style={[styles.child, selectedTab === 'completed' && styles.selectedChild]}
          onPress={() => setSelectedTab('completed')}
        >
          <Text className={`m-auto text-lg ${selectedTab === 'completed' ? 'text-green-500' : 'text-black'}`} style={{fontFamily:'Montserrat-Medium'}}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.child2, selectedTab === 'pending' && styles.selectedChild]}
          onPress={() => setSelectedTab('pending')}
        >
          <Text className={`m-auto text-lg ${selectedTab === 'pending' ? 'text-green-500' : 'text-black'}`} style={{fontFamily:'Montserrat-Medium'}}>Pending</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'completed' ? (
       <View>
            <View className='flex flex-row gap-5 justify-evenly pt-5'>
<Text className='text-lg text-blue-500' style={{fontFamily:'Montserrat-SemiBold'}}>Cardio Vascular Checkup</Text>
<View className='flex flex-row gap-2 w-28 h-8 rounded-2xl bg-green-100'>
<View className="w-3 h-3 bg-blue-600 rounded-full" />
<Text className="bottom-1" style={{fontFamily:'Montserrat-Medium'}}>Approved</Text>
</View>
     </View>

     <View className='flex flex-row justify-between px-5 pt-3'>
        <View>
        <Image className='pt-' source={require('../../assets/Diagnoss/nurse.png')}>
        </Image>
        <Text style={
            {
                fontStyle:'italic',
             fontFamily:'Montserrat-Medium',
                color:'blue'
            }
        }>
            Cardio Specialist
        </Text>
        </View>
        

<View className='flex flex-col gap-2 px-5'>
<View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>AppointID</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>2D3E</Text>
        </View>
        <View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>Pat.Name</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>Laurent</Text>
        </View>
        <View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>Start Time</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>2:30pm</Text>
        </View>
        <View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>End Time</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>3:20pm</Text>
        </View>
        <View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>Remaining</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>2:34:03</Text>
        </View>
</View>
        
     </View>
<View className='flex flex-row pt-6'>
    <View className='gap-1 px-2'>
        <Text className='text-lg' style={{fontFamily:'Montserrat-SemiBold'}}>Description</Text>
        <View className='w-[215px] h-[150px]  rounded-lg p-2' style={{borderWidth:1,
            borderColor:'gray'
        }}>
            <Text style={{fontFamily:'Montserrat-Medium'}}>
            A cardiovascular checkup assesses your heart's health through a series of tests and evaluations, helping to detect and prevent heart-related issues.
            </Text>
        </View>
    </View>

    <View className='gap-3'>
    <View className=''>

<GradientButton

        text="Update"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
        
      />

  

  
  </View>
        <TouchableOpacity
        className="w-[130px] h-[50px] rounded-md left-2"
        style={{borderWidth:1,
            borderColor:'blue',
        }}
        onPress={toggleModal}
      >
        <Text className="text-xl m-auto text-blue-500" style={{fontFamily:'Montserrat-Medium'}}>Remove</Text>
      </TouchableOpacity>

      <PopupModal isVisible={isModalVisible} onClose={toggleModal} />
    </View>

</View>

<TouchableOpacity className="flex flex-row gap-3 pt-6 px-3" onPress={()=>router.navigate('/Patient/BookAppoint')}>
          <Image source={require('../../assets/Diagnoss/icon1.png')} />
          <Text style={{fontFamily:'Montserrat-Medium'}}>
            Schedule New Appointment
          </Text>
        </TouchableOpacity>

        <View className='flex flex-row justify-between px-4 pt-3'>
    <CustomText className='text-lg'>
        Your appointments
    </CustomText>
    <TouchableOpacity className='' onPress={()=>router.navigate('/Patient/Doctors')}>
        <CustomText className='text-lg' style={{color:Colors.colors.blue}}>
        View All
    </CustomText>
    </TouchableOpacity>
    
</View>

<View className='pt-4 px-3 pb-3'>
  <Table/>
</View>
       </View>
    
      ) : (
        <View>
        <View className='flex flex-row gap-5 justify-evenly pt-5'>
<Text className='text-lg text-blue-500' style={{fontFamily:'Montserrat-SemiBold'}}>Cardio Vascular Checkup</Text>
<View className='flex flex-row gap-2 w-28 h-8 rounded-2xl bg-green-100'>
<View className="w-3 h-3 bg-blue-600 rounded-full" />
<Text className="bottom-1" style={{fontFamily:'Montserrat-Medium'}}>Approved</Text>
</View>
 </View>

 <View className='flex flex-row justify-between px-5 pt-3'>
    <View>
    <Image className='pt-' source={require('../../assets/Diagnoss/nurse.png')}>
    </Image>
    <Text style={
        {
            fontStyle:'italic',
         fontFamily:'Montserrat-Medium',
            color:'blue'
        }
    }>
        Cardio Specialist
    </Text>
    </View>
    

<View className='flex flex-col gap-2 px-5'>
<View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>AppointID</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>2D3E</Text>
    </View>
    <View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>Pat.Name</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>Laurent</Text>
    </View>
    <View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>Start Time</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>2:30pm</Text>
    </View>
    <View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>End Time</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>3:20pm</Text>
    </View>
    <View className='flex flex-row gap-3'>
<Text className='text-green-500 font-semibold' style={{fontFamily:'Montserrat-SemiBold'}}>Remaining</Text>
<Text className='font-extrabold'>:</Text>
<Text className='text-blue-600 font-semibold' style={{fontFamily:'Montserrat-Medium'}}>2:34:03</Text>
    </View>
</View>
    
 </View>
<View className='flex flex-row pt-6'>
<View className='gap-1 px-2'>
    <Text className='text-lg' style={{fontFamily:'Montserrat-SemiBold'}}>Description</Text>
    <View className='w-[215px] h-[150px]  rounded-lg p-2' style={{borderWidth:1,
        borderColor:'gray'
    }}>
        <Text style={{fontFamily:'Montserrat-Medium'}}>
        A cardiovascular checkup assesses your heart's health through a series of tests and evaluations, helping to detect and prevent heart-related issues.
        </Text>
    </View>
</View>

<View className='gap-3'>
<View className=''>

<GradientButton

    text="Update"
    colors={['#11CC9F', '#36BE69', '#91CE59']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    locations={[0, 0.31, 0.735]}
    style={styles.button}
    textStyle={styles.buttonText}
    
  />




</View>
    <TouchableOpacity
    className="w-[130px] h-[50px] rounded-md left-2"
    style={{borderWidth:1,
        borderColor:'blue',
    }}
    onPress={toggleModal}
  >
    <Text className="text-xl m-auto text-blue-500" style={{fontFamily:'Montserrat-Medium'}}>Remove</Text>
  </TouchableOpacity>

  <PopupModal isVisible={isModalVisible} onClose={toggleModal} />
</View>

</View>

<TouchableOpacity className="flex flex-row gap-3 pt-6 px-3" onPress={()=>router.navigate('/Patient/BookAppoint')}>
      <Image source={require('../../assets/Diagnoss/icon1.png')} />
      <Text style={{fontFamily:'Montserrat-Medium'}}>
        Schedule New Appointment
      </Text>
    </TouchableOpacity>

    <View className='flex flex-row justify-between px-4 pt-3'>
<CustomText className='text-lg'>
    Your appointments
</CustomText>
<TouchableOpacity className='' onPress={()=>router.navigate('/Patient/Doctors')}>
    <CustomText className='text-lg' style={{color:Colors.colors.blue}}>
    View All
</CustomText>
</TouchableOpacity>

</View>

<View className='pt-4 px-3 pb-3'>
<Table/>
</View>
   </View>
      )}
    </View>

     

 


    </ScrollView>
  )
}

const styles = StyleSheet.create({
    expert:{
        width:260,
        height:200,
            },
            container:{
                width:'95%',
                height:52,
               display:'flex',
               flexDirection:'row',
                margin:'auto',
                borderRadius:16,
                padding:5
            },
            child:{
                width:'47.5%',
                height:40,
                backgroundColor:'white',
                borderRadius:16,
                opacity:0.7,
                
            },
            button: {
              borderRadius: 10,
              width:135,
              height:50
            },
            buttonText: {
              fontSize: 20,
              fontFamily:'Montserrat-Regular'
              
            },
            child2:{
                width:'47.5%',
                height:40,
               opacity:0.5,
                borderRadius:16,
                
            }
})

export default Details