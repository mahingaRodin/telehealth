import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

interface SearchPopupProps {
  isVisible: boolean;
  onClose: () => void;
}
const suggestions = [
  { name: 'Dr Jane', specialist: 'Dentist', image: require('../../assets/Diagnoss/jane.png') },
  { name: 'Dr Laurent', specialist: 'Cardiologist', image: require('../../assets/Diagnoss/jane.png') },
  { name: 'Dr Smith', specialist: 'Optist', image: require('../../assets/Diagnoss/jane.png') },
  { name: 'Dr Kazungu', specialist: 'Orthopedic', image: require('../../assets/Diagnoss/jane.png') },
];

const filterOptions = ['All', 'Dentist', 'Cardiologist', 'Optist', 'Orthopedic'];

const SearchPopup: React.FC<SearchPopupProps> = ({ isVisible, onClose }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [isSortAscending, setIsSortAscending] = useState(true);

  const filteredSuggestions = suggestions
    .filter(suggestion =>
      suggestion.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedFilter === 'All' || suggestion.specialist.toLowerCase() === selectedFilter.toLowerCase())
    )
    .sort((a, b) => {
      if (isSortAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    toggleFilterModal();
  };

  const toggleSortOrder = () => {
    setIsSortAscending(!isSortAscending);
  };

  return (
    <ScrollView>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        useNativeDriver
        hideModalContentWhileAnimating
      >
        <View style={styles.modalContent}>
          <View className='w-[100%] h-[50px] rounded-xl bg-gray-300'>
            <View className='flex flex-row justify-between px-2 pt-2'>
              <Ionicons name='search' size={30} color={Colors.colors.green}></Ionicons>
              <TextInput
             
                className='w-[200px]'
                placeholder='Search a doctor'
                value={searchQuery}
                style={{fontFamily:'Montserrat-Medium'}}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
          <View className='flex flex-row justify-between px-2 pt-3'>
            <View className='w-[100px] h-[40px] rounded-xl' style={{
              borderWidth: 1,
              borderColor: 'gray'
            }}>
              <TouchableOpacity className='flex flex-row justify-evenly px-1 pt-2' onPress={toggleSortOrder}>
                <FontAwesome name='sort' size={20} color={Colors.colors.green}></FontAwesome>
                <Text className='text-md' style={{ color: Colors.colors.gradient,fontFamily:'Montserrat-Medium' }}>
                  {isSortAscending ? 'Asc' : 'Desc'}
                </Text>
                <Ionicons name='chevron-down-outline' size={20} style={styles.opacity}></Ionicons>
              </TouchableOpacity>
            </View>
            <View className='w-[100px] h-[40px] rounded-xl' style={{
              borderWidth: 1,
              borderColor: 'gray'
            }}>
              <TouchableOpacity className='flex flex-row justify-evenly px-1 pt-2' onPress={toggleFilterModal}>
                <Ionicons name='filter' size={20} color={Colors.colors.green}></Ionicons>
                <Text className='font-light text-md' style={{ color: Colors.colors.gradient,fontFamily:'Montserrat-Medium' }}>Filter</Text>
                <Ionicons name='chevron-down-outline' size={20} style={styles.opacity}></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
          <View className='px-3'>
            <Text className='text-lg text-blue-600' style={{fontFamily:'Montserrat-SemiBold'}}>Suggestions:</Text>
          </View>
         
<View className='flex flex-row flex-wrap justify-between gap-2 px-1  pt-2 w-full'>
  {filteredSuggestions.map((suggestion, index) => (
    <View
      key={index}
      style={{ width: '47%', height: 160, borderWidth: 1, borderRadius: 10, borderColor: '#C5C6CC' }}
    >
      <View className='p-1'>
        <Image source={suggestion.image} style={{ width: '100%', borderRadius: 16, height: 100 }} />
        <Text className='text-md text-blue-500 ' style={{fontFamily:'Montserrat-SemiBold'}}>{suggestion.name}</Text>
        <View className='flex-row justify-between px-1'>
          <Text style={{ fontStyle: 'italic' }}>{suggestion.specialist}</Text>
          <LinearGradient colors={['#11CC9F', '#36BE69', '#91CE59']} style={{ borderRadius: 10, width: 50, bottom: 7 }}>
            <TouchableOpacity className='w-[50px] h-[30px] flex justify-center items-center'>
              <Text className='text-md text-white' style={{fontFamily:'Montserrat-Medium'}}>Select</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  ))}
</View>
      <View>
            <TouchableOpacity>
              <Text className='text-blue-500  text-lg m-auto' style={{fontFamily:'Montserrat-Medium'}}>View more</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          isVisible={isFilterModalVisible}
          onBackdropPress={toggleFilterModal}
          useNativeDriver
          hideModalContentWhileAnimating
        >
          <View style={styles.filterModalContent}>
            {filterOptions.map((option, index) => (
              <TouchableOpacity key={index} onPress={() => selectFilter(option)}>
                <Text style={styles.filterOption}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  filterModalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterOption: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  opacity: {
    opacity: 0.3,
    bottom: 1,
    right: 4
  },
});

export default SearchPopup;
