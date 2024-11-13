import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Picker } from 'react-native';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAdd = () => {
    if (text.trim()) {
      addTodo({ title: text, priority });
      setText('');
      setPriority('Low');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task..."
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />
      <Picker
        selectedValue={priority}
        style={styles.picker}
        onValueChange={(itemValue) => setPriority(itemValue)}>
        <Picker.Item label="Low" value="Low" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="High" value="High" />
      </Picker>
      <Button title="Add" onPress={handleAdd} color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    color: '#333',
  },
  picker: {
    width: 100,
    height: 50,
  },
});

export default AddTodo;
