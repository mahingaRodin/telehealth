// Sidebar.js
import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Dimensions, StyleSheet, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import Feather from 'react-native-vector-icons/Feather';

const screenWidth = Dimensions.get('window').width;

const Sidebar = ({ isVisible, onClose }) => {
  const sidebarAnimation = useRef(new Animated.Value(-screenWidth / 2)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.timing(sidebarAnimation, {
      toValue: isVisible ? 0 : -screenWidth / 2,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  // const handleOutsidePress = () => {
  //   onClose();
  // };

  const handleNavigation = (path) => {
    router.navigate(path);
    onClose(); // Close sidebar on navigation
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      animationType="none"
    >
      <TouchableWithoutFeedback>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Animated.View style={[styles.sidebar, { left: sidebarAnimation }]}>
          <View className='flex flex-row justify-between'>
            <Image source={require('../../assets/Diagnoss/logo.png')} className='w-6 h-5' />
            <TouchableOpacity onPress={() => handleNavigation('/Patient/Profile')}>
              <Image source={require('../../assets/Diagnoss/user.png')} className='w-8 h-8 bottom-2' />
            </TouchableOpacity>
          </View>
          <View className='pt-9 flex flex-col gap-4'>
            <TouchableOpacity
              className='flex flex-row gap-4 w-200 h-50 bg-white rounded-lg'
              style={{ elevation: 2 }}
              onPress={() => handleNavigation('/Home')}
            >
              <Ionicons name='home' size={30} color={'#2E63EB'} style={{ bottom: 5 }} />
              <Text className='text-lg font-light'>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='flex flex-row gap-4 w-200 h-50 bg-white rounded-lg'
              style={{ elevation: 2 }}
              
            >
              <FontAwesome5 name='notes-medical' size={30} color={'#2E63EB'} style={{ bottom: 5 }} />
              <Text className='text-lg font-light bottom-1'>Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='flex flex-row gap-4 w-200 h-50 bg-white rounded-lg'
              style={{ elevation: 2 }}
            
            >
              <FontAwesome6 name='user-doctor' size={30} color={'#2E63EB'} style={{ bottom: 5 }} />
              <Text className='text-lg font-light'>Doctors</Text>
            </TouchableOpacity>


            <TouchableOpacity
              className='flex flex-row gap-4 w-200 h-50 bg-white rounded-lg'
              style={{ elevation: 2 }}
              onPress={() => handleNavigation('/LabTests/labT')}
            >
              <Fontisto name='laboratory' size={30} color={'#2E63EB'} style={{ bottom: 5 }} />
              <Text className='text-lg font-light'>Lab</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='flex flex-row gap-4 w-200 h-50 bg-white rounded-lg'
              style={{ elevation: 2 }}
              onPress={() => router.navigate('/Lab/setts')}
            >
              <Ionicons name='settings-sharp' size={30} color={'#2E63EB'} style={{ bottom: 5 }} />
              <Text className='text-lg font-light'>Settings</Text>
            </TouchableOpacity>
          </View>
          <View className='flex flex-row justify-between top-56'>
            <TouchableOpacity>
              <MaterialCommunityIcons name='logout' size={35} color={'green'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.navigate('/Patient/DoctorProfile')}>
              <Feather name='help-circle' size={35} color={'green'} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        {/* Close button positioned on top of everything */}
        {isVisible && (
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name='close-circle' size={30} color={'green'} />
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 10,
    width: screenWidth / 1.7,
    height: 660,
    backgroundColor: '#fff',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 1000,
    borderRadius: 10,
    padding: 20,
    left: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  closeButton: {
    position: 'absolute',
    width:30,
    margin:'auto',
    borderRadius:10,
    height:30,
    backgroundColor:'white',
    top:8,
    right:5,
    zIndex: 2000, // Ensure it is on top
  },
});

export default Sidebar;
