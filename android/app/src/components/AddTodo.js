import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Picker } from 'react-native';
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
        placeholder="Add new task..."
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />
      <Picker
        selectedValue={priority}
        style={styles.picker}
        onValueChange={(itemValue) => setPriority(itemValue)}
      >
        <Picker.Item label="Low" value="Low" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="High" value="High" />
      </Picker>
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
      <Button title="Add" onPress={handleAdd} color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'column', padding: 16, backgroundColor: '#fff', borderRadius: 8, marginBottom: 16 },
  input: { marginBottom: 8, padding: 8, borderBottomWidth: 1, borderBottomColor: '#ddd', color: '#333' },
  picker: { height: 50, width: '100%', marginVertical: 8 },
});

export default AddTodo;
