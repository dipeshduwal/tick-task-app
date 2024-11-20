import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ScrollView } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';
import { ProgressBar } from 'react-native-paper';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('All');

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), ...newTodo, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo =>
      todo.id === id ? updatedTodo : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    return (
      (filter === 'All' || (filter === 'Completed' && todo.completed) || (filter === 'Incomplete' && !todo.completed)) &&
      todo.title.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const progress = todos.length ? Number(((todos.filter(todo => todo.completed).length / todos.length) * 100).toFixed(2)) / 100 : 0;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>To-Do Lists</Text>
        <TextInput
          style={styles.search}
          placeholder="Search tasks..."
          placeholderTextColor="grey"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>

      <ProgressBar progress={progress} color="#3498db" style={styles.progressBar} />

      <AddTodo addTodo={addTodo} />

      <View style={styles.filterContainer}>
        {['All', 'Completed', 'Incomplete'].map(status => (
          <Text
            key={status}
            onPress={() => setFilter(status)}
            style={[
              styles.filterText,
              filter === status && styles.activeFilter
            ]}
          >
            {status}
          </Text>
        ))}
      </View>

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TodoItem todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          </ScrollView>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
