import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

import TaskNotFinish from './navBottom/TaskNotFinish';
import TaskFinished from './navBottom/TaskFinished'
import AllTask from './navBottom/AllTask';

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'all', title: 'Speed Task', focusedIcon:'history',unfocusedIcon: 'history'},
  
    { key: 'finish', title: 'Daily Task', focusedIcon:'history',unfocusedIcon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    finish: TaskFinished,
    all: AllTask,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      style={styles.bottom}
      getColor={'white'}
    />
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  bottom:{
    backgroundColor:"black"
  }
})