import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/TodoItemStyles';

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

export default TodoItem;
