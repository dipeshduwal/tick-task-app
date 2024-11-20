import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    heading: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 3,
      marginBottom: 2,
    },
    headingUnderline: {
      height: 4,
      width: '70%',
      backgroundColor: '#3498db',
      borderRadius: 2.5,
      marginBottom: 15,
    },
    timeButton: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 8,
      marginTop: 10,
      marginBottom: 10,
    },
    timeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
      marginTop: 5,
      marginBottom: 10,
    },
    taskDisplay: {
      fontSize: 20,
      color: '#4B4B4B',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 10,
    },
  });

  export default styles;
  