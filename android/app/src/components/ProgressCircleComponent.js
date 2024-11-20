import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

const ProgressCircleComponent = ({ timeLeft, countdownTime, formattedTime }) => {
  return (
    <View style={styles.progressCircleContainer}>
      <ProgressCircle
        style={styles.progressCircle}
        progress={timeLeft / countdownTime}
        progressColor="#3498db"
        backgroundColor="#d3d3d3"
      />
      <Text style={styles.timerText}>{formattedTime}</Text>
    </View>
  );
};

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

export default ProgressCircleComponent;
