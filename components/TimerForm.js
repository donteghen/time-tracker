import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import TimerButton from './TimerButton';
export default function TimerForm({ id, title, project , closeEditForm, closeCreate}) {
    
    
    const submitText = id ? 'Update' : 'Create';
    const cancel = id ? closeEditForm : closeCreate
    return (
    <View style={styles.formContainer}>
        <View style={styles.attributeContainer}>
            <Text style={styles.textInputTitle}>Title</Text>
            <View style={styles.attributeContainer}>
            <TextInput style={styles.input} defaultValue={title} style={styles.textInput}/>
            </View>
        </View>
        <View style={styles.attributeContainer}>
            <Text style={styles.textInputTitle}>Project</Text>
            <View style={styles.attributeContainer}>
            <TextInput style={styles.input} defaultValue={project} style={styles.textInput}/>
            </View>
        </View>
        <View style={styles.buttonGroup}>
        <TimerButton small color="#21BA45" title={submitText} />
        <TimerButton small color="#DB2828" title="Cancel" onPress={cancel}/>
        </View>
    </View> );
}
const styles = StyleSheet.create({ formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});