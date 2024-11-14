import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const priorityColors = {
  Low: '#27ae60',
  Medium: '#f39c12',
  High: '#e74c3c',
};

const TodoItem = ({ todo, toggleTodo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    updateTodo(todo.id, { ...todo, title: newTitle });
    setIsEditing(false);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={styles.checkbox}>
          <Icon
            name={todo.completed ? "check-circle" : "radio-button-unchecked"}
            size={24}
            color={todo.completed ? "#4CAF50" : "#f39c12"}
          />
        </TouchableOpacity>

        <Text style={[styles.text, todo.completed && styles.completed]}>
          {todo.title}
        </Text>

        <View style={[styles.priorityBadge, { backgroundColor: priorityColors[todo.priority] }]}>
          <Text style={styles.priorityText}>{todo.priority}</Text>
        </View>

        <Text style={styles.dueDate}>Due: {todo.dueDate.toLocaleDateString()}</Text>

        <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.editButton}>
          <Icon name="edit" size={24} color="#3498db" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteTodo(todo.id)} style={styles.deleteButton}>
          <Icon name="delete" size={24} color="#e74c3c" />
        </TouchableOpacity>
      </View>

      {isEditing && (
        <Modal transparent={true} animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TextInput
                style={styles.input}
                placeholder="Edit task..."
                placeholderTextColor="#888"
                value={newTitle}
                onChangeText={setNewTitle}
              />
              <View style={styles.modalButtons}>
                <Button title="Save" onPress={handleEdit} color="#4CAF50" />
                <Button title="Cancel" onPress={() => setIsEditing(false)} color="#e74c3c" />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  checkbox: { marginRight: 8 },
  text: { fontSize: 18, color: '#333' },
  completed: { textDecorationLine: 'line-through', color: '#aaa' },
  priorityBadge: { padding: 4, borderRadius: 4, marginLeft: 8 },
  priorityText: { color: '#fff' },
  dueDate: { fontSize: 12, color: '#888', marginLeft: 8 },
  editButton: { marginLeft: 8 },
  deleteButton: { marginLeft: 8 },
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContainer: {
    width: 270,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: { backgroundColor: '#f9f9f9', padding: 10, borderRadius: 5, width: '100%', color: '#333', marginBottom: 10 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
});

export default TodoItem;
