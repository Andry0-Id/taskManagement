import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function In() {
  return (
    <View>
      <TextInput
        style={styles.input} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 3,
        borderColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 16,
        width: 360,
        padding: 3,
        height: 60,
        borderRadius: 30,
        margin: 10,
    }
})