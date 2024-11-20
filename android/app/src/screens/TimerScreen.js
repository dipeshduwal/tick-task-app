import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import TaskInput from '../components/TaskInput';
import PomodoroPresets from '../components/PomodoroPresets';
import ProgressCircleComponent from '../components/ProgressCircleComponent';
import CustomTimerModal from '../components/CustomTimerModal';
import styles from '../styles/TimerScreenStyles';

const TimerScreen = () => {
  const [taskName, setTaskName] = useState('');
  const [countdownTime, setCountdownTime] = useState(60);
  const [timeLeft, setTimeLeft] = useState(countdownTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    if (timeLeft > 0) setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(countdownTime);
  };

  const handleTimePick = () => {
    const totalSeconds = selectedMinutes * 60 + selectedSeconds;
    setCountdownTime(totalSeconds);
    setTimeLeft(totalSeconds);
    setIsPickerVisible(false);
  };

  const setPomodoro = (durationInMinutes) => {
    const totalSeconds = durationInMinutes * 60;
    setCountdownTime(totalSeconds);
    setTimeLeft(totalSeconds);
    setIsRunning(false);
  };

  const formattedTime = `${Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.heading}>Pomodoro Timer</Text>
      <View style={styles.headingUnderline} />

      <TaskInput taskName={taskName} setTaskName={setTaskName} />

      <PomodoroPresets setPomodoro={setPomodoro} />

      <TouchableOpacity onPress={() => setIsPickerVisible(true)} style={styles.timeButton}>
        <Text style={styles.timeButtonText}>Set Custom Timer</Text>
      </TouchableOpacity>

      <ProgressCircleComponent 
        timeLeft={timeLeft} 
        countdownTime={countdownTime} 
        formattedTime={formattedTime} 
      />

      <View style={styles.buttonContainer}>
        <Button title={isRunning ? 'Pause' : 'Start'} onPress={handleStartPause} color="#fa8072" />
        <Button title="Reset" onPress={handleReset} color="#1abc9c" />
      </View>

      <Text style={styles.taskDisplay}>Task: {taskName || 'No task entered'}</Text>

      <CustomTimerModal
        isVisible={isPickerVisible}
        selectedMinutes={selectedMinutes}
        setSelectedMinutes={setSelectedMinutes}
        selectedSeconds={selectedSeconds}
        setSelectedSeconds={setSelectedSeconds}
        handleTimePick={handleTimePick}
        closeModal={() => setIsPickerVisible(false)}
      />
    </KeyboardAvoidingView>
  );
};

export default TimerScreen;
