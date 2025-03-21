import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'

const FilePicker = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const chooseFile = async () => {
        try {
            const res = await DocumentPicker.getDocumentAsync({
                type: '*/*',
                multiple: true, 
            });
            if (res.type === 'success') {
                setSelectedFile(res);
                console.log('Selected file:', res);
            }
        } catch (err) {
            console.error('Error picking file:', err);
        }
    };

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={chooseFile}>
                <Text className='text-blue-500 text-lg top-1'>Add a report doc</Text>
                <Ionicons name='attach-sharp' size={35}></Ionicons>
            </TouchableOpacity>
            {selectedFile && (
                <Text>
                    Selected File: {selectedFile.name}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
   
    button: {
    
        borderWidth:1,
        borderColor:'#2E63EB',
        borderRadius: 100,
        width:300,
        height:45,
        display:'flex',
        flexDirection:'row-reverse',
        justifyContent:'center'
    },
   
   
});

export default FilePicker;
