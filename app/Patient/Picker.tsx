import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

const DropdownSelect = ({ items, placeholder, onValueChange, selectedValue }) => {
    return (
        <View style={styles.container}>
            {placeholder && <Text style={styles.label}>{placeholder}</Text>}
            <View style={styles.dropdownContainer}>
                <RNPickerSelect
                    onValueChange={onValueChange}
                    items={items}
                    value={selectedValue}
                    style={pickerSelectStyles}
                    placeholder={{}}
                    
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      
        width:'48%'
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
       
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is not behind the icon
    },
    inputAndroid: {
        fontSize: 16,
       
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is not behind the icon
    },
    iconContainer: {
        top: 10,
        right: 12,
    },
});

export default DropdownSelect;
