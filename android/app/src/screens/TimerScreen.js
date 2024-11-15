import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

const TimerScreen = () => {
  const [taskName, setTaskName] = useState('');
  const [countdownTime, setCountdownTime] = useState(60); // default 60 seconds
  const [timeLeft, setTimeLeft] = useState(countdownTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    if (timeLeft > 0) {
      setIsRunning(!isRunning);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(countdownTime);
  };

  const handleCountdownTimeChange = (value) => {
    const parsedTime = parseInt(value, 10);
    if (!isNaN(parsedTime)) {
      setCountdownTime(parsedTime);
      setTimeLeft(parsedTime);
    }
  };

  const formattedTime = `${Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.taskInput}
        placeholder="Enter task name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        style={styles.timeInput}
        placeholder="Enter time in seconds"
        keyboardType="numeric"
        value={countdownTime.toString()}
        onChangeText={handleCountdownTimeChange}
      />
      <ProgressCircle
        style={styles.progressCircle}
        progress={timeLeft / countdownTime}
        progressColor="#3498db"
        backgroundColor="#d3d3d3"
      >
        <Text style={styles.timerText}>{formattedTime}</Text>
      </ProgressCircle>
      <View style={styles.buttonContainer}>
        <Button title={isRunning ? 'Pause' : 'Start'} onPress={handleStartPause} color="#24a0ed" />
        <Button title="Reset" onPress={handleReset} color="#1abc9c" />
      </View>
      <Text style={styles.taskDisplay}>Task: {taskName || 'No task entered'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  taskInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  timeInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  progressCircle: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  timerText: { fontSize: 30, fontWeight: 'bold', color: '#333' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '80%', marginBottom: 20 },
  taskDisplay: { fontSize: 16, color: '#333', marginTop: 10 },
});

export default TimerScreen;
