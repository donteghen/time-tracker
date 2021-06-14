import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import uuidv4 from 'uuid/v4'
import EditableTimer from './components/EditableTimer'
import ToggleableTimer from './components/ToggleableTimer'

export default function App() {
  const [timers, setTimers] = useState([
    {
      title: 'Mow the lawn', project: 'House Chores', id: uuidv4(),
      elapsed: 5456099, isRunning: true,
      }, {
      title: 'Bake squash', project: 'Kitchen Chores', id: uuidv4(),
      elapsed: 1623695362080, isRunning: false,
      }
  ])
  const remove = (id) =>{
    const list = timers.filter(timer => timer.id !== id)
    setTimers(list)
  }
  const add = ({project, title}) =>{
    const timer = {
      id: uuidv4(), isRunning:false, project, title, elapsed:Date.now()
    }
    const list = timers.concat(timer)
    setTimers(list)
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimer/>
        {timers.map(({title, project, isRunning, elapsed, id}) => {
          return <EditableTimer 
                  key={id}
                  id={id}
                    title={title}
                    project={project}
                    elapsed={elapsed}
                    isRunning={isRunning}
                    />
        })}
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
