import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 20,
      alignItems: 'center',
      width: '90%',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalSubtitle: {
      fontSize: 14,
      color: '#383838',
      textAlign: 'center',
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 10,
    },
    picker: {
      height: 100,
      width: 170,
      color: '#383838',
    },
    modalButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 10,
    },
  });

  export default styles;