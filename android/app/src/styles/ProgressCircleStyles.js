import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    progressCircleContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    progressCircle: {
      height: 170,
      width: 170,
    },
    timerText: {
      position: 'absolute',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
  });

  export default styles;