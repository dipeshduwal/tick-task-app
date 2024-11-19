import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
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

        <View style={styles.headerContainer}>
          <Text style={styles.appTitle}>TickTask App</Text>
          <Text style={styles.quote}>
            “I am built upon the small things I do every day, the end results are not more than a byproduct of that.”
            - Kita Shinsuke
          </Text>
        </View>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarLabelStyle: styles.tabLabel,
            tabBarActiveBackgroundColor: '#e6f7ff',
            tabBarInactiveBackgroundColor: '#ffffff',
            tabBarStyle: styles.tabBar,
            tabBarIcon: () => null, // Explicitly remove the icon
          })}
        >
          <Tab.Screen name="To-Do Lists" component={HomeScreen} />
          <Tab.Screen name="Timer" component={TimerScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007ACC',
    fontFamily: 'Cochin',
    textAlign: 'center',
    marginBottom: 8,
  },
  quote: {
    fontSize: 14,
    color: '#4B4B4B',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007ACC',
    textAlign: 'center',
    marginBottom: 5, // Reduce the margin to fix alignment
  },
  tabBar: {
    height: 60,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default App;
