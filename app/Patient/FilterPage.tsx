// App.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PickerFilter from './Filter';

const items = [
  { id: '1', category: 'Fruits', name: 'Apple' },
  { id: '2', category: 'Fruits', name: 'Banana' },
  { id: '3', category: 'Vegetables', name: 'Carrot' },
  { id: '4', category: 'Vegetables', name: 'Broccoli' },
];

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredItems = selectedFilter === 'All'
    ? items
    : items.filter(item => item.category === selectedFilter);

  return (
    <View style={styles.container}>
      <PickerFilter
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default App;
