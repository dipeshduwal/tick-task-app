import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TaskInput = ({ taskName, setTaskName }) => {
  return (
    <TextInput
      style={styles.taskInput}
      placeholder="Enter task name"
      placeholderTextColor="#8f8f8f"
      value={taskName}
      onChangeText={setTaskName}
    />
  );
};

const styles = StyleSheet.create({
  taskInput: {
    width: '80%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#8f8f8f',
    borderRadius: 8,
    color: '#333',
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TaskInput;
