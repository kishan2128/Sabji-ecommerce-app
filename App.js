
import React from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';

const products = [
  { id: '1', name: 'Tomato', price: '₹30/kg', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Potato', price: '₹25/kg', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Onion', price: '₹40/kg', image: 'https://via.placeholder.com/100' },
];

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Vegetable Store</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, alignItems: 'center' }}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button title="Add to Cart" onPress={() => alert(`Added ${item.name} to cart`)} />
          </View>
        )}
      />
    </View>
  );
};

export default App;
    