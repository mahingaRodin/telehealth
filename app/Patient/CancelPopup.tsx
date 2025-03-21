import Colors from '@/constants/Colors';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useRouter } from 'expo-router';
import GradientButton from '../GradientButton';

const PopupModal = ({ isVisible, onClose }) => {
    const router= useRouter();
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText} className='text-blue-500'>Are You Sure You Want To Cancel The Appointment</Text>
        <View className='flex flex-row gap-5 pt-7'>
        <View className='w-[45%]'>

<GradientButton

        text="No"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
        
      />

  

  
  </View>
      
         
            <TouchableOpacity className='w-[130px] h-[50px]' style={{borderRadius:30, borderWidth:1, borderColor:'blue'}} onPress={()=>router.navigate('/Patient/CancelAppoint')}>
            <Text className='text-xl m-auto text-blue-500' style={{
              fontFamily:'Montserrat-Medium'
            }}>Yes</Text>
        </TouchableOpacity>
      
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
    // color:Colors.colors.gradient,
    margin:'auto',
    fontFamily: 'Montserrat-SemiBold'
  },
  closeText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PopupModal;
