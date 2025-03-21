import Colors from '@/constants/Colors';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router';
import GradientButton from '../GradientButton';
import Doc from '../Patient/doc'

const PopupModal = ({ isVisible, onClose }:{isVisible:boolean, onClose:()=>void}) => {
    const router = useRouter();
    return (
        <ScrollView>
            <Modal 
                isVisible={isVisible}
                onBackdropPress={onClose}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Request a lab Test</Text>
                    <View className='gap-2'>
                    <View className='gap-1'>
                        <Text style={{fontFamily:'Montserrat-SemiBold'}}>Email</Text>
                    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter your Email' className='w-[200px]'
    style={{fontFamily:'Montserrat-Medium'}}/>

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
                        <Text style={{fontFamily:'Montserrat-SemiBold'}}>Description</Text>
                    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter your Email' className='w-[200px]' style={{fontFamily:'Montserrat-Medium'}}/>

  </View>
                    </View>
                    
                    </View>
                    <View className='pt-5'>
                    <Doc/>
                    </View>
                
                   
                    <View className='w-[90%]  m-auto pt-3 pb-3'>

<GradientButton
onPress={onClose}
        text="Send"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
        
      />

  

  
  </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
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
      button: {
        borderRadius: 60,
      },
      buttonText: {
        fontSize: 20,
        fontFamily:'Montserrat-Regular'
        
      },
    closeText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PopupModal;
