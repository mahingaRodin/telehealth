import Colors from '@/constants/Colors';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useRouter } from 'expo-router';
import GradientButton from '../GradientButton';
import  Ionicons from 'react-native-vector-icons/Ionicons';

const submitPopup = ({ isVisible, onClose }) => {
    const router= useRouter();
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContent}>
        <View className='flex flex-row justify-end'>
          <View></View>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name='close-circle-sharp' size={40} color={'#2E63EB'}></Ionicons>
        </TouchableOpacity >
        </View>
       
        <Text style={styles.modalText} className='pt-4'>Appointment scheduled successfully</Text>
        <View className='flex flex-row gap-5 pt-7'>
        <View className='w-[90%]  m-auto pt-3 pb-3'>

<GradientButton
onPress={()=>router.navigate('/Patient/Details')}
        text="View"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
        
      />
  

  
  </View>

      
            
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    fontFamily:'Montserrat-Regular'
    
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color:Colors.colors.gradient,
    margin:'auto',
    fontFamily:'Montserrat-SemiBold'
  },
  closeText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default submitPopup;
