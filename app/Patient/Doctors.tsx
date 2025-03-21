import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Modal, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (filterModalVisible) {
        setFilterModalVisible(false);
        return true;
      } else if (selectedSpecialization) {
        setSelectedSpecialization('');
        return true;
      } else {
        navigation.navigate('PatientHome');
        return true;
      }
    });

    return () => backHandler.remove();
  }, [filterModalVisible, selectedSpecialization]);

  const doctors = [
    { id: 1, name: 'Dr Lau', specialization: 'Cardiologist', image: require('../../assets/Diagnoss/doc1.png') },
    { id: 2, name: 'Dr Lanez', specialization: 'Laryngologist', image: require('../../assets/Diagnoss/doc8.png') },
    { id: 3, name: 'Dr Nyumbayire', specialization: 'Urist', image: require('../../assets/Diagnoss/doc2.png') },
    { id: 4, name: 'Dr Kayihura', specialization: 'Optician', image: require('../../assets/Diagnoss/doc3.png') },
    { id: 5, name: 'Dr Wilson', specialization: 'Dentist', image: require('../../assets/Diagnoss/doc4.png') },
    { id: 6, name: 'Dr Patrick', specialization: 'Orthopedic', image: require('../../assets/Diagnoss/doc5.png') },
    { id: 7, name: 'Dr Ihirwe', specialization: 'Cardiologist', image: require('../../assets/Diagnoss/doc6.png') },
    { id: 8, name: 'Dr Mike', specialization: 'Cardiologist', image: require('../../assets/Diagnoss/doc7.png') },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredDoctors = doctors
    .filter((doctor) => 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
      (selectedSpecialization === '' || doctor.specialization === selectedSpecialization)
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <ScrollView className='bg-white w-[100%] h-[100%] pb-5' showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View className='px-2 pt-4 '>
        <View className='w-[100%] h-[50px] rounded-xl bg-[#e0e2ed]'>
          <View className='flex flex-row justify-between px-2 pt-2'>
            <Ionicons name='search' size={30} color={Colors.colors.green}></Ionicons>
            <TextInput
              className='w-[200px]'
              placeholder='Search a doctor'
              style={{fontFamily:'Montserrat-Medium'}}
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
        </View>
      </View>
      <View className='flex flex-row justify-between px-2 pt-3 pb-2'>
        <View className='w-[100px] h-[40px] rounded-xl' style={{ borderWidth: 1, borderColor: 'gray' }}>
          <TouchableOpacity className='flex flex-row justify-evenly px-1 pt-2' onPress={handleSort}>
            <FontAwesome name='sort' size={20} color={Colors.colors.green}></FontAwesome>
            <Text className='font-light text-md' style={{ color: Colors.colors.gradient, fontFamily:'Montserrat-Medium' }}>Sort</Text>
            <Ionicons name='chevron-down-outline' size={20} style={styles.opacity}></Ionicons>
          </TouchableOpacity>
        </View>
        <View className='w-[100px] h-[40px] rounded-xl' style={{ borderWidth: 1, borderColor: 'gray' }}>
          <TouchableOpacity className='flex flex-row justify-evenly px-1 pt-2' onPress={() => setFilterModalVisible(true)}>
            <Ionicons name='filter' size={20} color={Colors.colors.green}></Ionicons>
            <Text className='font-light text-md' style={{ color: Colors.colors.gradient, fontFamily:'Montserrat-Medium' }}>Filter</Text>
            <Ionicons name='chevron-down-outline' size={20} style={styles.opacity}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex flex-row flex-wrap justify-between px-3 pt-4 gap-2'>
        {filteredDoctors.map((doctor) => (
          <View key={doctor.id} style={{ width: '47%', height: 170, borderWidth: 1, borderRadius: 10, borderColor: '#C5C6CC' }}>
            <View className='px-1 pt-1'>
                <TouchableOpacity onPress={()=>router.navigate('/Patient/DoctorProfile')}>
                <Image source={doctor.image} style={{ width: 155, height: 122 }} />
                </TouchableOpacity>
             
              <Text className='text-blue-500  px-1' style={{
                fontFamily:'Montserrat-SemiBold'
              }}>{doctor.name}</Text>
              <View className='flex flex-row justify-between px-1'>
                <Text className='' style={{
                  fontFamily:'Montserrat-Medium'
                }}>{doctor.specialization}</Text>
                <TouchableOpacity>
                  <Image source={require('../../assets/Diagnoss/appoint.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={filterModalVisible}
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Specialization</Text>
            {['Cardiologist', 'Laryngologist', 'Urist', 'Optician', 'Dentist', 'Orthopedic'].map((specialization) => (
              <TouchableOpacity
                key={specialization}
                onPress={() => {
                  setSelectedSpecialization(specialization);
                  setFilterModalVisible(false);
                }}
                style={styles.modalOption}
              >
                <Text style={styles.modalOptionText}>{specialization}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setFilterModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.3,
    bottom: 1,
    right: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 16,
  },
  modalCancel: {
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Doctors;
