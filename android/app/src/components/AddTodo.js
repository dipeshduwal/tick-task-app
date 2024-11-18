import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo({ title: text, priority, dueDate });
      setText('');
      setPriority('Low');
      setDueDate(new Date());
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#aaa"
        value={text}
        onChangeText={setText}
      />
      <View style={styles.priorityContainer}>
        <Text style={styles.label}>Set Priority Level:</Text>
        <Picker
          selectedValue={priority}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          onValueChange={(itemValue) => setPriority(itemValue)}
        >
          <Picker.Item label="Low" value="Low" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="High" value="High" />
        </Picker>
      </View>
      <Button title="Select Due Date" onPress={() => setShowDatePicker(true)} color="#3498db" />
      {showDatePicker && (
        <DateTimePicker
          value={dueDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDueDate(selectedDate);
          }}
        />
      )}
      <View style={styles.addButtonContainer}>
        <Button title="Add Task" onPress={handleAdd} color="#3498db" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4, // For Android shadow
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },
  priorityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: 160,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerItem: {
    fontSize: 16,
    color: '#333',
    alignItems: 'center',
  },
  addButtonContainer: {
    marginTop: 10,
  },
});

export default AddTodo;
