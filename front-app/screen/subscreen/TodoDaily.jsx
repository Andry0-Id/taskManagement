import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

const TodoDaily = ({ navigation }) => {
 const daily = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

 function getBackgroundImage(day) {
    const dayToImageMap = {
      "Monday": require('../../assets/splash.jpg'),
      "Tuesday": require('../../assets/tuesday.jpg'),
      "Wednesday": require('../../assets/wednesday.jpg'),
      "Thursday": require('../../assets/thursday.jpg'),
      "Friday": require('../../assets/Friday.jpg'),
      "Saturday": require('../../assets/saturday.jpg'),
      "Sunday": require('../../assets/sunday.jpg'),
    };
    return dayToImageMap[day];
 }

 function generateDay(day) {
    return () => navigation.navigate('SubScreen', { screen: day });
 }

 return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <ScrollView>
            {daily.map(day => (
              <View style={styles.container} key={day}>
                <ImageBackground source={getBackgroundImage(day)} style={styles.imageTask} key={day}>
                  <Text style={styles.titleDay}>{day}</Text>
                  <Text style={styles.descriptionTask}>"Ameliorate Your productivity"</Text>
                  <View>
                  <Button
                    mode="elevated"
                    style={styles.btn}
                    buttonColor='#fff'
                    textColor='#000'
                    maxFontSizeMultiplier={2}
                    onPress={generateDay(day)}>Let's go</Button>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
 );
}

export default TodoDaily;

const styles = StyleSheet.create({
 titleDay: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
 },
 container: {
  flex: 1,
  borderRadius: 20,
  overflow: 'hidden',
},
 imageTask: {
    padding:30,
    margin: 10,
    justifyContent: 'center',
},
 btn:{
    margin:0,
    width:120
 },
 descriptionTask:{
    fontSize: 25,
    color:'white',
    marginBottom: 20,
    marginTop: 10
 }
});
