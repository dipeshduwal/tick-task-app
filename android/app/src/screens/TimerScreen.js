import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ProgressCircle } from 'react-native-svg-charts';

const TimerScreen = () => {
  const [taskName, setTaskName] = useState('');
  const [countdownTime, setCountdownTime] = useState(60); // default 60 seconds
  const [timeLeft, setTimeLeft] = useState(countdownTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);

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
      <Text style={styles.heading}>Timer</Text>
      <View style={styles.headingUnderline} />
      <TextInput
        style={styles.taskInput}
        placeholder="Enter task name"
        placeholderTextColor="#a9a9a9"
        value={taskName}
        onChangeText={setTaskName}
      />
      <Text style={styles.pomodoroHeading}>Choose your pomodoro preset</Text>
      <View style={styles.pomodoroContainer}>
        <Button title="25 mins" onPress={() => setPomodoro(25)} color="#fa8072" />
        <Button title="15 mins" onPress={() => setPomodoro(15)} color="#1abc9c" />
        <Button title="5 mins" onPress={() => setPomodoro(5)} color="#3498db" />
      </View>
      <TouchableOpacity onPress={() => setIsPickerVisible(true)} style={styles.timeButton}>
        <Text style={styles.timeButtonText}>Set Custom Timer</Text>
      </TouchableOpacity>
      <View style={styles.progressCircleContainer}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={timeLeft / countdownTime}
          progressColor="#3498db"
          backgroundColor="#d3d3d3"
        />
        <Text style={styles.timerText}>{formattedTime}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={isRunning ? 'Pause' : 'Start'} onPress={handleStartPause} color="#fa8072" />
        <Button title="Reset" onPress={handleReset} color="#1abc9c" />
      </View>
      <Text style={styles.taskDisplay}>Task: {taskName || 'No task entered'}</Text>

      <Modal visible={isPickerVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Minutes and Seconds</Text>
            <Text style={styles.modalSubtitle}>
              ** Click on time below to pick your desired time-duration **
            </Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedMinutes}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedMinutes(itemValue)}
              >
                {Array.from({ length: 61 }, (_, i) => (
                  <Picker.Item key={i} label={`${i} mins`} value={i} />
                ))}
              </Picker>
              <Picker
                selectedValue={selectedSeconds}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedSeconds(itemValue)}
              >
                {Array.from({ length: 60 }, (_, i) => (
                  <Picker.Item key={i} label={`${i} secs`} value={i} />
                ))}
              </Picker>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button title="Set Time" onPress={handleTimePick} color="#3498db" />
              <Button title="Cancel" onPress={() => setIsPickerVisible(false)} color="#a9a9a9" />
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  headingUnderline: {
    height: 5,
    width: '50%',
    backgroundColor: '#3498db',
    borderRadius: 2.5,
    marginBottom: 10,
  },
  taskInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    color: '#333',
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  pomodoroHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  pomodoroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
  timeButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    marginTop: 10;
    marginBottom: 20,
  },
  timeButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  progressCircleContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircle: {
    height: 200,
    width: 200,
  },
  timerText: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
  taskDisplay: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
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

export default TimerScreen;
