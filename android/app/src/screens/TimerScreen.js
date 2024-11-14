import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Timer Screen</Text>
      {/* Additional Timer functionality goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  timerText: { fontSize: 24, fontWeight: 'bold', color: '#333' },
});

export default TimerScreen;
