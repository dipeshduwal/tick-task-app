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
          <Text style={styles.appTitle}>Tick Task App</Text>
          <Text style={styles.quote}>“I am built upon the small things I do every day, the end results are not more than a byproduct of that.   - Kita Shinsuke”</Text>
        </View>

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
  headerContainer: {
    backgroundColor: '#f7f1e1',
    padding: 20,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#d1c2b8',
    fontFamily: 'Cochin',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  quote: {
    fontSize: 15,
    color: 'grey',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default App;
