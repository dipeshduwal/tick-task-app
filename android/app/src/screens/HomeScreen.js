import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';
import { ProgressBar } from 'react-native-paper';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
    textAlign: 'left'
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ecf0f1',
    marginBottom: 10,
    overflow: 'hidden'
  },
  search: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#2c3e50',
    borderColor: '#dcdde1',
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
    paddingVertical: 8,
    borderRadius: 8
  },
  filterText: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '600'
  },
  activeFilter: {
    fontWeight: 'bold',
    color: '#1abc9c',
    textDecorationLine: 'underline'
  },
  flatListContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4, // Android shadow
    marginBottom: 16
  },
  listEmpty: {
    fontSize: 18,
    color: '#95a5a6',
    textAlign: 'center',
    marginTop: 20
  },
});

export default HomeScreen;


export default HomeScreen;
