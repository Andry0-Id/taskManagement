import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Btn from '../components/Btn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Login = ({ navigation }) => {
  const nav = () => navigation.navigate('SubScreen',{screen: 'TodoDay'});

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.login}>
        <View style={styles.body}>
          <Image
            source={require('../assets/tm.png')}
          />
          <Text style={{ fontSize: 35, fontWeight:"bold",color:"#10739E" }}>Task Management</Text>
          <Text style={{fontSize: 20, paddingHorizontal: 30,textAlign: 'center',fontWeight:"600"}}>"Unleash your productivity with our Task Management app, designed to streamline your workflow and keep you on track to success."</Text>
        </View>
        <View style={styles.footer}>
          <Btn
            label={"Get Started"}
            action={nav} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor:"#DAE8FC"
  },
  body: {
    flex: 8,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1
  }
});
