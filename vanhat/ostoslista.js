/*
OSTOSLISTA App.js
*/

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';

export default function App() {
  const [product, setProduct] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const handleAdd = () => {
    setShoppingList([...shoppingList, product]);
  };

  const handleClear = () => {
    setShoppingList([])
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter item"
        onChangeText={(text) => setProduct(text)}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={handleAdd} title="Add"/>
        <Button style={styles.button} onPress={handleClear} title="Clear"/>
      </View>
      <Text style={{fontWeight: 'bold'}}>Shopping List:</Text>
      <FlatList
      data={shoppingList}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: '1%',
    justifyContent: 'space-around',
    width: '50%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
