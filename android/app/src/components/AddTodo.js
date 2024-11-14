import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [reminderDate, setReminderDate] = useState(new Date());

  const handleAdd = () => {
    if (text.trim()) {
      addTodo({ title: text, priority, dueDate, reminder, reminderDate });
      setText('');
      setPriority('Low');
      setDueDate(new Date());
      setReminder(false);
      setReminderDate(new Date());
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
      <View style={styles.reminderContainer}>
        <Switch value={reminder} onValueChange={setReminder} />
        <Text style={styles.reminderText}>Set Reminder</Text>
      </View>
      {reminder && (
        <DateTimePicker
          value={reminderDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (selectedDate) setReminderDate(selectedDate);
          }}
        />
      )}
      <Button title="Add" onPress={handleAdd} color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  // existing styles
  reminderContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  reminderText: { marginLeft: 8, fontSize: 16, color: '#333' },
});

export default AddTodo;
