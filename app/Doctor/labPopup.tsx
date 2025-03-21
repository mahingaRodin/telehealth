import Colors from '@/constants/Colors';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router';
import Doc from '../Patient/doc'

const PopupModal = ({ isVisible, onClose }) => {
    const router = useRouter();
    return (
        <ScrollView>
            <Modal 
                isVisible={isVisible}
                onBackdropPress={onClose}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalText} className='font-extrabold'>Request a lab Test</Text>
                    <View className='gap-2'>
                    <View className='gap-1'>
                        <Text>Email</Text>
                    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter your Email' className='w-[200px]'/>

  </View>
                    </View>
                    <View className='gap-1'>
                        <Text>Test Name</Text>
                    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter your Email' className='w-[200px]'/>

  </View>
                    </View>
                    <View className='gap-1'>
                        <Text>PatientID</Text>
                    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Valid PatientID' className='w-[200px]'/>

  </View>
                    </View>
                    
                    <View className='gap-1'>
                        <Text>Description</Text>
                    <View style={styles.inputContainer} className='m-auto flex flex-row-reverse justify-between'>
    <Ionicons name={'mail-outline'} size={25} color={'#8F9098'} style={styles.icon}></Ionicons>
    <TextInput placeholder='Enter your Email' className='w-[200px]'/>

  </View>
                    </View>
                    
                    </View>
                    <View className='pt-5'>
                    <Doc/>
                    </View>
                
                   
                    <View className='flex flex-row gap-5 pt-7'>
                        <LinearGradient colors={['#11CC9F', '#36BE69', '#91CE59']} style={{ borderRadius: 30 }}>
                            <TouchableOpacity className='w-[200px] h-[50px]' onPress={onClose}>
                                <Text className='text-xl m-auto text-white font-extrabold'>Send
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
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
        color: Colors.colors.gradient,
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
    closeText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PopupModal;
