import React from 'react';
import { View, Text } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import styles from '../styles/ProgressCircleStyles';

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

export default ProgressCircleComponent;
