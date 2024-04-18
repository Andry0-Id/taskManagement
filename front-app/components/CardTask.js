import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Btn from './Btn'

const CardTask = ({taskName,descriptionTask,day}) => {

  // Adjusted to use a callback function
  function generateDay(day) {
    return () => navigation.navigate('SubScreen', { screen: day });
}
  return (
    <View>
        <Text style={styles.taskname}>{taskName}</Text>
        <Text>{descriptionTask}</Text>
        <Btn
            key={day}
            label={{day}}
            action={generateDay({day})}
        />
    </View>
  )
}

export default CardTask

const styles = StyleSheet.create({
    taskName:{
        fontSize: 24
    },
})