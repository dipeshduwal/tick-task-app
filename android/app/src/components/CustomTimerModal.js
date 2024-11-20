import React from 'react';
import { View, Modal, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/CustomTimerStyles';

const CustomTimerModal = ({
  isVisible,
  selectedMinutes,
  setSelectedMinutes,
  selectedSeconds,
  setSelectedSeconds,
  handleTimePick,
  closeModal,
}) => {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
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
            <Button title="Cancel" onPress={closeModal} color="#a9a9a9" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomTimerModal;
