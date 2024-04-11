import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Btn from '../../components/Btn';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';

const TodoDaily = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const daily = ["Monday", "Tuesday", "Wednesday","Thrusday","Friday","Saturday","Sunday"]

  return (
    <SafeAreaProvider>
      <SafeAreaView style={
        [styles.todo,{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }]
      }
        >
        <View style = {styles.body}>
          <ScrollView>
          {daily.map(day => (
              <Btn 
                label={day}
                action={() => navigation.navigate('SubScreen',{screen:{day}})}
              />
          ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default TodoDaily;

const styles = StyleSheet.create({
  todo:{
    flex: 1
  },
  title:{
    fontSize: 30
  },
  body: {
    flex: 8
  },
  dailytask:{
    padding: 10,
    backgroundColor: '#10739E',
    borderRadius: 15,
    margin: 5
  },
  footer: {
    flex: 1
  }
});
