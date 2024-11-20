import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const PomodoroPresets = ({ setPomodoro }) => {
  return (
    <View style={styles.pomodoroContainer}>
      <Button title="25 mins" onPress={() => setPomodoro(25)} color="#fa8072" />
      <Button title="15 mins" onPress={() => setPomodoro(15)} color="#1abc9c" />
      <Button title="5 mins" onPress={() => setPomodoro(5)} color="#daa520" />
    </View>
  );
};

const styles = StyleSheet.create({
  pomodoroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
});

export default PomodoroPresets;
