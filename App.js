import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';

import EditableTimer from './components/EditableTimer'
import ToggleableTimer from './components/ToggleableTimer'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimer isOpen={false}/>
        <EditableTimer id="1"
            title="Mow the lawn"
            project="House Chores"
            elapsed="8986300"
            isRunning/>
        <EditableTimer  id="2"
            title="Bake squash"
            project="Kitchen Chores"
            elapsed="3890985"
            editFormOpen/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
},title: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
},
timerList: {
  paddingBottom: 15,
},
});
