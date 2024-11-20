import { StyleSheet } from 'react-native';

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
    modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' },
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

  export default styles;