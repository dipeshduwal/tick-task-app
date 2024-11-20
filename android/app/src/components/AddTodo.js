import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/AddTodoStyles';

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

  const getPickerStyle = () => {
    switch (priority) {
      case 'Low':
        return styles.pickerLow;
      case 'Medium':
        return styles.pickerMedium;
      case 'High':
        return styles.pickerHigh;
      default:
        return styles.pickerLow;
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
          style={[styles.picker, getPickerStyle()]}
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

export default AddTodo;
