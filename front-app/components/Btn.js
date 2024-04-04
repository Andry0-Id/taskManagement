import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// * Component Button
export default function Btn({label,action}) {
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
    height: 68,
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 15,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#10739E',
  },
  buttonIcon: {
    paddingRight: 0,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
});