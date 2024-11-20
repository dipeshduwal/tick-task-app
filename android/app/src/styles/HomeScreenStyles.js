import { StyleSheet } from 'react-native';

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

  export default styles;