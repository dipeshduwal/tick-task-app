const priorityColors = {
  Low: '#27ae60',
  Medium: '#f39c12',
  High: '#e74c3c',
};

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={styles.checkbox}>
        {todo.completed ? (
          <Icon name="check-circle" size={24} color="#4CAF50" />
        ) : (
          <Icon name="radio-button-unchecked" size={24} color="#f39c12" />
        )}
      </TouchableOpacity>

      <Text style={[styles.text, todo.completed && styles.completed]}>
        {todo.title}
      </Text>

      <View style={[styles.priorityBadge, { backgroundColor: priorityColors[todo.priority] }]}>
        <Text style={styles.priorityText}>{todo.priority}</Text>
      </View>

      <TouchableOpacity onPress={() => deleteTodo(todo.id)} style={styles.deleteButton}>
        <Icon name="delete" size={24} color="#e74c3c" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... existing styles
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 10,
  },
  priorityText: {
    color: '#fff',
    fontWeight: '600',
  },
});
