import React from 'react';
import { View, Modal, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

export default CustomTimerModal;
