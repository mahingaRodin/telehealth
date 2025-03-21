import { View, Text,Image,TouchableOpacity,ScrollView, StyleSheet } from 'react-native'
import React, { Children } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  {useRouter}  from 'expo-router'
import Colors from '@/constants/Colors'
import { useState } from 'react'
import Tableau from '../Patient/Tableau'
import { Link } from 'expo-router'


const Lab = () => {
    const [selectedTab, setSelectedTab] = useState('completed');
    const router= useRouter();
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    <View className='flex flex-row justify-between px-2 py-4'>
      <TouchableOpacity onPress={() => router.navigate('/Doctor/DoctorHome')}>
        <Ionicons name='arrow-back' size={35} color={'green'} />
      </TouchableOpacity>

      <Image source={require('../../assets/Diagnoss/logo.png')} className='w-9 h-7' />
    </View>

    <View className=''>
      <Text className='text-2xl text-green-500  m-auto' style={{fontFamily:'Montserrat-SemiBold'}}>
        Welcome Into {'\n'} <Text className='m-auto'>The Labs</Text>
      </Text>
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
          <View className='flex-row justify-between px-3 pt-4'>
            <Text className='text-xl' style={{ color: Colors.colors.Green,fontFamily:'Montserrat-Medium' }}>Blood Culture</Text>
            <View className='w-32 px-1 h-8 bg-[#c3f1d6] rounded-full flex-row gap-1'>
              <Ionicons name='checkmark-done-circle' size={25} color={'#2FAF64'} />
              <Text style={{fontFamily:'Montserrat-Medium'}}>Completed</Text>
            </View>
          </View>

          <View className='pt-4'>
            <View className='flex flex-row justify-between px-5 pt-3'>
              <View>
                <Image className='pt-' source={require('../../assets/Diagnoss/labDoc.png')} />
                <Text className='text-blue-500' style={{ fontStyle: 'italic' }}>Blood Culture 23</Text>
              </View>

              <View className='flex flex-col gap-2 px-5'>
                <View className='flex flex-row gap-3'>
                  <Text className='text-green-500' style={{fontFamily:'Montserrat-Medium'}}>TestID</Text>
                  <Text className='font-extrabold'>:</Text>
                  <Text className='text-blue-600' style={{fontFamily:'Montserrat-Medium'}}>2D3E</Text>
                </View>
                <View className='flex flex-row gap-3'>
                  <Text className='text-green-500' style={{fontFamily:'Montserrat-Medium'}}>Dr.Name</Text>
                  <Text className='font-extrabold'>:</Text>
                  <Text className='text-blue-600' style={{fontFamily:'Montserrat-Medium'}}>Dr.Mike</Text>
                </View>
                <View className='flex flex-row gap-3'>
                  <Text className='text-green-500' style={{fontFamily:'Montserrat-Medium'}}>Test Name</Text>
                  <Text className='font-extrabold'>:</Text>
                  <Text className='text-blue-600' style={{fontFamily:'Montserrat-Medium'}}>BCD</Text>
                </View>
                <View className='flex flex-row gap-3'>
                  <Text className='text-green-500' style={{fontFamily:'Montserrat-Medium'}}>Upload Time</Text>
                  <Text className='font-extrabold'>:</Text>
                  <Text className='text-blue-600' style={{fontFamily:'Montserrat-Medium'}}>3:20pm</Text>
                </View>
              </View>
            </View>
          </View>

          <View className='flex-row gap-9 px-3 pt-3'>
            <Text className='text-lg' style={{fontFamily:'Montserrat-SemiBold'}}>Report</Text>
            <Text className='text-[#667085] text-lg' style={{fontFamily:'Montserrat-Medium'}}>Friday 2:20pm</Text>
          </View>
          <View className='pt-3 flex-row gap-5 px-2'>
            <View className='w-[170px] h-[50px] rounded-xl flex-row justify-between px-1 pt-2' style={{
                borderWidth:1,
                borderColor:'#C5C6CC',
                
            }}>
                <View className='w-8 h-8 rounded-full bg-[#F4EBFF]'>
                    <Ionicons name='document-outline' size={25} color={'#2FAF64'} style={{
                        margin:'auto'
                    }}></Ionicons>
                    
                </View>
                <View>
                        <Text className='text-md' style={{fontFamily:'Montserrat-Medium'}}>bloodCulture1.pdf</Text>
                        <Text className='font-light' style={{fontFamily:'Montserrat-Medium'}}>200 KB</Text>
                    </View>
            </View>
            <TouchableOpacity className='w-8 h-8 rounded-full bg-[#F4EBFF]'>
                    <Ionicons name='download-outline' size={25} color={'#2FAF64'} style={{
                        margin:'auto'
                    }}></Ionicons>
                    
                </TouchableOpacity>
                <TouchableOpacity className='w-[110px] h-[50px]' style={{borderRadius:10, borderWidth:1, borderColor:'blue'}}>
            <Text className='text-xl m-auto text-blue-500' style={{fontFamily:'Montserrat-Medium'}}>Remove</Text>
        </TouchableOpacity>
          </View>
          <View className='flex-row justify-between'>
          <TouchableOpacity className="flex flex-row gap-3 pt-6 px-3">
          <Image source={require('../../assets/Diagnoss/icon2.png')} />
          <Text style={{fontFamily:'Montserrat-Medium'}}>
           Add a Lab Test
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row gap-3 pt-6 px-3">
          <Image source={require('../../assets/Diagnoss/icon2.png')} />
          <Text style={{fontFamily:'Montserrat-Medium'}}>
           New Lab
          </Text>
        </TouchableOpacity>
          </View>
         
        <View className='flex m-auto pt-3'>
            <Text className='text-lg' style={{fontFamily:'Montserrat-SemiBold'}}>Your Recent Tests</Text>
        </View>
        <View className='px-2 pt-3 pb-5'>
            <Tableau/>
        </View>
        </View>
      ) : (
        <View>
          <View className='flex-row justify-between px-3 pt-5'>
            <Text className='text-xl' style={{ color: Colors.colors.Green,fontFamily:'Montserrat-SemiBold'}}>Blood Culture</Text>
            <View className='w-28 px-1 h-8 bg-[#f1c3c3] rounded-full flex-row gap-1'>
              <Ionicons name='time' size={25} color={'#AF642F'} />
              <Text style={{fontFamily:'Montserrat-Medium'}}>Waiting</Text>
            </View>
          </View>

          <View className='pt-4'>
            <View className='flex flex-row justify-between px-5 pt-3'>
              <View>
                <Image className='pt-' source={require('../../assets/Diagnoss/labDoc.png')} />
                <Text className='text-blue-500' style={{ fontStyle: 'italic' }}>Blood Culture 23</Text>
              </View>

              <View className='flex flex-col gap-2 px-5'>
                <View className='flex flex-row gap-3'>
                  <Text className='text-green-500' style={{fontFamily:'Montserrat-Medium'}}>TestID</Text>
                  <Text className='font-extrabold'>:</Text>
                  <Text className='text-blue-600' style={{fontFamily:'Montserrat-Medium'}}>2D3E</Text>
                </View>
                <View className='flex flex-row gap-3'>
                  <Text className='text-green-500' style={{fontFamily:'Montserrat-Medium'}}>Dr.Name</Text>
                  <Text className='font-extrabold'>:</Text>
                  <Text className='text-blue-600' style={{fontFamily:'Montserrat-Medium'}}>Dr.Mike</Text>
                </View>
                <View className='flex flex-row gap-3'>
                  <Text className='text-green-500' style={{fontFamily:'Montserrat-Medium'}}>Test Name</Text>
                  <Text className='font-extrabold'>:</Text>
                  <Text className='text-blue-600' style={{fontFamily:'Montserrat-Medium'}}>BCD</Text>
                </View>
                <View className='flex flex-row gap-3'>
                  <Text className='text-green-500' style={{fontFamily:'Montserrat-Medium'}}>Upload Time</Text>
                  <Text className='font-extrabold'>:</Text>
                  <Text className='text-blue-600' style={{fontFamily:'Montserrat-Medium'}}>3:20pm</Text>
                </View>
              </View>

            </View>
            <View>
<View className='flex justify-between flex-row px-3 pt-2'>
  <View>
  <Text className='font-extralight italic'
  style={{
    color:Colors.colors.gradient
  }}
>
    Test still in the lab
  </Text>
  <TouchableOpacity>
    <Link href={'/Authentication'} className='text-green-700 capitalize underline' style={{fontFamily:'Montserrat-Medium'}}>Notify me</Link>
  </TouchableOpacity>
  </View>
  <TouchableOpacity className='w-[120px] h-[50px]' style={{borderRadius:10, borderWidth:1, borderColor:'blue'}}>
            <Text className='text-xl m-auto text-blue-500 font-light' style={{fontFamily:'Montserrat-Medium'}}>Cancel</Text>
        </TouchableOpacity>

  
  
</View>

<TouchableOpacity className="flex flex-row gap-3 pt-9 px-3">
          <Image source={require('../../assets/Diagnoss/icon2.png')} />
          <Text style={{fontFamily:'Montserrat-Medium'}} >
           Add a Lab Test
          </Text>
        </TouchableOpacity>
        <View className='flex m-auto pt-3'>
            <Text className='text-lg' style={{fontFamily:'Montserrat-SemiBold'}}>Your Recent Tests</Text>
        </View>

            </View>
          </View>

          <View className='px-2 pt-3 pb-5'>
            <Tableau/>
        </View>
        
          
        </View>
      )}
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({


    container:{
        width:'95%',
        height:52,
       display:'flex',
       flexDirection:'row',
        margin:'auto',
        borderRadius:16,
        fontFamily:'Montserrat-Medium',
        padding:5
    },
    child:{
        width:'47.5%',
        height:40,
        backgroundColor:'white',
        borderRadius:16,
        opacity:0.7,
        
    },
    child2:{
        width:'47.5%',
        height:40,
       opacity:0.5,
        borderRadius:16,
        
    }
})

export default Lab