/*
LASKIN HISTORIALLA App.js
*/

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    const resultValue = parseFloat(num1) + parseFloat(num2);
    setResult(resultValue.toString());

    const calculation = `${num1} + ${num2} = ${resultValue}`
    setHistory([...history, calculation]);
  };

  const handleSubtract = () => {
    const resultValue = parseFloat(num1) - parseFloat(num2);
    setResult(resultValue.toString());

    const calculation = `${num1} - ${num2} = ${resultValue}`;
    setHistory([...history, calculation]);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        onChangeText={(text) => setNum2(text)}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={handleAdd} title="+"/>
        <Button style={styles.button} onPress={handleSubtract} title="-"/>
      </View>
      <Text style={{fontWeight: 'bold'}}>History:</Text>
      <FlatList
      data={history}
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
    padding: '2%',
    justifyContent: 'space-around',
    width: '33%',
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
