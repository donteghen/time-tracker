import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TimerButton from './TimerButton'; import TimerForm from './TimerForm';
export default function ToggleableTimer () { 
  const [isOpen, setIsOpen] = useState(false)
    return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm  closeCreate={() => setIsOpen(false)}/> : <TimerButton title="+" color="black" onPress={() => setIsOpen(true)}/>}
    </View> );
}
const styles = StyleSheet.create({ container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
}, });