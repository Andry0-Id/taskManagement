import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// * Component Button
export default function BtnTask({label,action}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={styles.button}
        onPress={action}>
            <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    width: 80,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 40,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#fff',
  },
  buttonIcon: {
    paddingRight: 0,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
});