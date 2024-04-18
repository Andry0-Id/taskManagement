import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Checkbox, Button, Modal, TextInput, List, Portal, PaperProvider } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';


const url = 'http://192.168.88.43:8080/api/task';

const AllTask = () => {
    const [checked, setChecked] = useState(false);
    const [task, setTasks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [text, setText] = useState('') 
    const [date, setDate] = useState(new Date());

    const onChange = (e, selectedDate) => {
      setDate(selectedDate);
    };
  

    const fetchTasks = useCallback(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setTasks(data); })
            .catch((error) => {
                console.error('Error to fetch data task', error);
            });
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const createTask = (taskData) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        })
            .then(() => {
                fetchTasks();
                setModalVisible(false);
            })
            .catch((error) => {
                console.error('Error creating task', error);
            });
    };

    const updateTask = (taskData) => {
        const updatedTaskData = { ...taskData, task: text };
        fetch(`${url}/${taskData.idTask}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTaskData),
        })
            .then(() => {
                fetchTasks();
                setModalVisible(false);
                setText('');
            })
            .catch((error) => {
                console.error('Error updating task', error);
            });
    };

    const deleteTask = (idTask) => {
        fetch(`${url}/${idTask}`, {
            method: 'DELETE',
        })
            .then(() => {
                fetchTasks();
            })
            .catch((error) => {
                console.error('Error deleting task', error);
            });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {task.map(({ idTask, task, achievements }) => (
                    <View style={styles.card} key={idTask}>
                        <View style={styles.iconsContainer}>
                            <Checkbox
                                status={achievements ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                color='white'
                                uncheckedColor='white'
                            />
                            <Text style={styles.titleTask}>{task}</Text>
                        </View>

                        <View style={styles.iconsContainer}>
                            <FontAwesome5
                                style={styles.btn}
                                name="edit"
                                size={24}
                                color="white"
                                onPress={() => {
                                    setSelectedTask({ idTask, task, achievements });
                                    setModalVisible(true);
                                }} />
                            <FontAwesome5
                                style={styles.btn}
                                name="trash-alt"
                                size={24}
                                color="white"
                                onPress={() => deleteTask(idTask)} />
                        </View>
                    </View>
                ))}
            </ScrollView>
            {/* Modal for updating tasks */}
            <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} style={styles.containerStyle}>
                {/* Modal content for updating tasks */}
                {selectedTask && (
                    <View>
                        <Text style={styles.upTask}>Task</Text>
                        <TextInput
                            outlineColor='#0183CC'
                            activeOutlineColor='#0183CC'
                            placeholder='Task'
                            style={styles.btn}
                            mode='outlined'
                            value={text} // Bind the TextInput to the editingTask state
                            onChangeText={txt => setText(txt)} // Update the editingTask state as the user types
                        />
                        <List.Accordion title="Degree Task">
                            <List.Item title="Low" />
                            <List.Item style={styles.low} title="Medium" />
                            <List.Item title="High" />
                        </List.Accordion>
                        <Button
                            buttonColor='#0183CC'
                            mode="contained"
                            onPress={() => updateTask(selectedTask)}>Save</Button>
                    </View>
                )}
            </Modal>
        </View>
    );
};

export default AllTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    low:{
        backgroundColor:'#0183CC'
    },
    containerStyle: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 400,
        padding: 10
    },
    upTask: {
        fontSize: 30,
        color: '#0183CC',
        alignContent: 'center',
        alignItems: 'center'
    },
    btn: {
        margin: 5,
    },
    left: {
        alignItems: 'center'
    },
    card: {
        padding: 15,
        margin: 10,
        backgroundColor: "#0183CC",
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        color: '#fff',
        elevation: 8,
    },
    titleTask: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 16,
        margin: 8
    },
    iconsContainer: {
        flexDirection: 'row', // Align icons horizontally
        justifyContent: 'flex-end', // Align icons to the right
    },
});
