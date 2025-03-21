
import React from 'react';
import { View, Text, Modal, TouchableOpacity, Pressable, StyleSheet } from 'react-native';

import GradientButton from '../GradientButton';
import { useRouter } from 'expo-router';

const Popup = ({ visible, onClose }:{visible:boolean, onClose:()=>void}) => {
  const router = useRouter();
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose} // For Android's back button
    >
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose}>
        <Pressable style={styles.modalContainer} onPress={() => {}}>
          <Text style={styles.modalText}>Password  was Changed Successfully!</Text>
          <View className='w-[100%] m-auto pt-9'>
   <GradientButton
onPress={()=>router.navigate('/Authentication/Login')}
        text="Return To Login"
        colors={['#11CC9F', '#36BE69', '#91CE59']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.31, 0.735]}
        style={styles.button}
        textStyle={styles.buttonText}
      />
   </View>
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dims the background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily:'Montserrat-SemiBold',
    color:'#2E63EB'
  },
  modalButton: {
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
  },
  button: {
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    fontFamily:'Montserrat-Medium'
    
  },
});

export default Popup;
