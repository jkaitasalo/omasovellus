/*
NUMEROARVAUSPELI App.js
*/

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [answer, setAnswer] = useState('');
  const [hint, setHint] = useState('Guess a number between 1-100');
  const [guessCount, setGuessCount] = useState(0);

  const handlePress = () => {
      if (answer === '') {
        const newAnswer = Math.floor(Math.random() * 100) + 1;
        const guessNumber = parseInt(guess);

        if (guessNumber > newAnswer) {
          setHint(`Your guess ${guessNumber} is too high`);
        } else if (guessNumber < newAnswer) {
          setHint(`Your guess ${guessNumber} is too low`);
        } else {
            Alert.alert(
                'Winner!',
                `You guessed the number right in ${guessCount + 1} guesses!`,
                [
                  {
                    text: 'OK',
                    onPress: () => {
                        setHint('Guess a number between 1-100')
                        setAnswer('')
                        setGuessCount(0)
                    },
                  },
                ]
            );
        }
    setGuessCount(guessCount + 1);
  }}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hint}</Text>
      <TextInput
        style={styles.input}
        placeholder='Guess a number'
        keyboardType='numeric'
        onChangeText={(text) => setGuess(text)}
      />
      <Button style={styles.button} onPress={handlePress} title='Submit' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
