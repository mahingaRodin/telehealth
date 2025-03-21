import { View, Text,StyleSheet,Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const Time = () => {
    const currentDate = new Date().toISOString().split('T')[0];
  return (
    <View className='pt-3'>
      <View style={styles.calendarContainer}>
      <Calendar
  current={currentDate}
  markedDates={{
    [currentDate]: { selected: true, selectedColor: 'lightblue' },
  }}
  onPressArrowLeft={(subtractMonth) => subtractMonth()}
  onPressArrowRight={(addMonth) => addMonth()}
  renderArrow={(direction) => (
    <Ionicons
      name={direction === 'left' ? 'chevron-back' : 'chevron-forward'}
      size={24}
      color='blue'
    />
  )}
  onDayPress={(day) => {
    console.log('selected day', day);
  }}
  hideExtraDays={true}
  disableArrowLeft={false}
  disableArrowRight={false}
  style={styles.calendar}
  // Apply custom theme for font family and other properties
  theme={{
    textDayFontFamily: 'Montserrat-Medium',
    textMonthFontFamily: 'Montserrat-Medium',
    textDayHeaderFontFamily: 'Montserrat-Medium',
    textDayFontSize: 16,
    textMonthFontSize: 20,
    textDayHeaderFontSize: 14,
  }}
/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  calendarContainer: {
    width: Dimensions.get('window').width * 0.9, // Adjust width as needed
    borderWidth: 1,
    height: Dimensions.get('window').height *0.48,
    margin:'auto',
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white', // Optional background color for the calendar container
  },
  calendar: {
    borderRadius: 10,
  },
});

export default Time