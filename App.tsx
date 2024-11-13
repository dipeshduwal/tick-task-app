import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './android/app/src/screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
