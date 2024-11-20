import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 12,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4, // For Android shadow
    },
    input: {
      padding: 12,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
      fontSize: 16,
      marginBottom: 8,
      color: '#333',
    },
    priorityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
      marginBottom: 8,
    },
    label: {
      fontSize: 16,
      color: '#333',
      marginRight: 10,
      alignItems: 'center',
    },
    picker: {
      height: 55,
      width: 160,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eaeaea',
    },
    pickerLow: {
      color: 'green',
    },
    pickerMedium: {
      color: 'orange',
    },
    pickerHigh: {
      color: 'red',
    },
    addButtonContainer: {
      marginTop: 10,
    },
  });

  export default styles;