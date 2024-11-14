import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './android/app/src/screens/HomeScreen';
import TimerScreen from './android/app/src/screens/TimerScreen';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.appTitle}>Tick Task App</Text>
        <Text style={styles.quote}>“Habits are the compound interest of self-improvement.”</Text>

        <Tab.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="To-Do Lists" component={HomeScreen} />
          <Tab.Screen name="Timer" component={TimerScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8e44ad',
    fontFamily: 'Cochin',
    textAlign: 'center',
    marginBottom: 5,
  },
  quote: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
