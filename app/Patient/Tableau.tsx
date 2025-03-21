import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Table = () => {
  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>No.</Text>
        <Text style={[styles.cell, styles.header]}>AppName</Text>
        <Text style={[styles.cell, styles.header]}>Date</Text>
        <Text style={[styles.cell, styles.header]}>Time</Text>
        <Text style={[styles.cell, styles.header]}>Actions</Text>
      </View>

      {/* Table Rows */}
     
      <View style={styles.row}>
        <Text style={styles.cell}>1</Text>
        <Text style={styles.cell}>Blood cullture</Text>
        <Text style={styles.cell}>22/7</Text>
        <Text style={styles.cell}>9:30</Text>
        <View style={styles.cell} className='flex-row gap-1'>
          <Ionicons name='checkmark-circle' color={'green'} size={15}></Ionicons>
          <Ionicons name='close' color={'red'} size={15}></Ionicons>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>2</Text>
        <Text style={styles.cell}>Checkup</Text>
        <Text style={styles.cell}>22/7</Text>
        <Text style={styles.cell}>9:30</Text>
        <View style={styles.cell} className='flex-row gap-1'>
          <Ionicons name='checkmark-circle' color={'green'} size={15}></Ionicons>
          <Ionicons name='close' color={'red'} size={15}></Ionicons>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>3</Text>
        <Text style={styles.cell}>Blood cullture</Text>
        <Text style={styles.cell}>22/7</Text>
        <Text style={styles.cell}>9:30</Text>
        <View style={styles.cell} className='flex-row gap-1'>
          <Ionicons name='checkmark-circle' color={'green'} size={15}></Ionicons>
          <Ionicons name='close' color={'red'} size={15}></Ionicons>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>4</Text>
        <Text style={styles.cell}>Blood cullture</Text>
        <Text style={styles.cell}>22/7</Text>
        <Text style={styles.cell}>9:30</Text>
        <View style={styles.cell} className='flex-row gap-1'>
          <Ionicons name='checkmark-circle' color={'green'} size={15}></Ionicons>
          <Ionicons name='close' color={'red'} size={15}></Ionicons>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>5</Text>
        <Text style={styles.cell}>Blood cullture</Text>
        <Text style={styles.cell}>22/7</Text>
        <Text style={styles.cell}>9:30</Text>
        <View style={styles.cell} className='flex-row gap-1'>
          <Ionicons name='checkmark-circle' color={'green'} size={15}></Ionicons>
          <Ionicons name='close' color={'red'} size={15}></Ionicons>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: 'blue', // Border for the container
    borderRadius: 8,
    paddingHorizontal:1 // Optional: adds rounded corners to the container
  },
  row: {
    flexDirection: 'row',
    marginBottom: 2, // Space between rows
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontSize:10,
    fontFamily:'Montserrat-Medium'
  },
  header: {
    fontFamily:'Montserrat-SemiBold',
    fontSize:10,

  },
});

export default Table;
