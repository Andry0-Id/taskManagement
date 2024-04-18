import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

// To do screen
export default function Todo() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  // Handle button press to add a task
  const handleAddTask = () => {
    // Vérifiez si la valeur de la tâche n'est pas vide
    if (inputValue.trim() === '') {
      alert('Please enter a task');
      return;
    }

    // Préparez les données de la tâche
    const taskData = {
      task: inputValue,
      achievements: 0, // Assurez-vous que c'est la valeur correcte pour votre API
    };

    // Envoyez une requête POST à votre API pour ajouter la tâche
    fetch('http://192.168.223.182:8080/api/task/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau lors de l\'ajout de la tâche');
        }
        // Vérifiez si le corps de la réponse est vide
        if (response.headers.get('content-length') === '0') {
          console.log('La tâche a été ajoutée avec succès, mais sans réponse.');
          // Mettez à jour l'état des tâches pour inclure la nouvelle tâche
          setTasks([...tasks, { idTask: tasks.length + 1, task: inputValue, achievements: 0 }]);
          // Réinitialisez la valeur de l'input
          setInputValue('');
          fetchTasks();
          return; // Ne tentez pas de parser le corps de la réponse
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          console.log('Tâche ajoutée avec succès:', data);
          // Mettez à jour l'état des tâches pour inclure la nouvelle tâche
          setTasks([...tasks, { idTask: data.idTask, task: inputValue, achievements: 0 }]);
          // Réinitialisez la valeur de l'input
          setInputValue('');
        }
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout de la tâche:', error);
        alert('Une erreur est survenue lors de l\'ajout de la tâche.');
      });

  };

  const fetchTasks = useCallback(() => {
    fetch('http://192.168.223.182:8080/api/task')
      .then((response) => response.json())
      .then((data) => { setTasks(data); })
      .catch((error) => {
        console.error('Error to fetch data task', error);
      });
  }, []);

  // Fonction pour changer l'état achievements d'une tâche et mettre à jour sur le serveur
  const toggleAchievement = (idTask) => {

    const taskToUpdate = tasks.find(task => task.idTask === idTask);
    if (!taskToUpdate) {
      console.error('Tâche non trouvée');
      return;
    }

    // Mettez à jour l'état achievements de la tâche localement
    const updatedTasks = tasks.map(task =>
      task.idTask === idTask ? { ...task, achievements: !task.achievements } : task
    );
    setTasks(updatedTasks);

    // Préparez les données de la tâche à envoyer
    const taskData = {
      task: taskToUpdate.task,
      achievements: !taskToUpdate.achievements, // Inversez l'état achievements
    };
    console.log();
    // Envoyez une requête POST à votre API pour mettre à jour la tâche
    fetch(`http://192.168.223.182:8080/api/task/${idTask}`, { // Assurez-vous que l'URL est correcte
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau lors de la mise à jour de la tâche');
        }
        console.log('Tâche mise à jour avec succès');
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour de la tâche:', error);
        setTasks(tasks);
      });
  };

  const deleteTask = (idTask) => {
    // Send a DELETE request to your API to delete the task
    fetch(`http://192.168.223.182:8080/api/task/${idTask}`, {
       method: 'DELETE',
    })
       .then((response) => {
         if (!response.ok) {
           throw new Error('Erreur réseau lors de la suppression de la tâche');
         }
         console.log('Tâche supprimée avec succès');
         // Update the local state
         setTasks(tasks.filter(task => task.idTask !== idTask));
       })
       .catch((error) => {
         console.error('Erreur lors de la suppression de la tâche:', error);
       });
   };   

  useEffect(() => {
    fetch('http://192.168.223.182:8080/api/task')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
  }, [fetchTasks])

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder='Add a task'
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange} />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTask}>
          <Text style={styles.buttonLabel}>
            Add a Task
          </Text>
        </TouchableOpacity>

        <StatusBar style="none" />
        <View>
          <ScrollView>
          {
            tasks.map(({ idTask, task, achievements }) => (
                <View key={idTask} style={styles.task}>
                  <FontAwesome
                    name={achievements ? 'check-circle' : 'circle-o'}
                    color={achievements ? 'white' : 'white'}
                    onPress={() => toggleAchievement(idTask)}
                    size={30} />
                  <Text
                    style={[styles.taskLabel, { textDecorationLine: achievements ? "line-through" : "none", }]}>
                    {task}
                  </Text>
                  <Ionicons 
                    name="remove-circle-sharp"
                    onPress={() => deleteTask(idTask)} 
                    size={30} 
                    color="#fff" />
                </View>
            ))
          }
          </ScrollView>
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: "100%",
  },
  input: {
    fontSize: 18,
    borderWidth: 3,
    borderColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 16,
    width: 360,
    padding: 3,
    height: 60,
    borderRadius: 15,
    margin: 10,
  },
  button: {
    borderRadius: 15,
    width: 360,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    margin: 10,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    alignItems:"center",
    fontWeight:'bold',
  },
  task: {
    padding: 15,
    margin: 10,
    backgroundColor: "#0183CC",
    borderRadius: 15,
    width: 360,
    alignItems: 'center',
    flexDirection: "row",
    color: '#fff',
    elevation: 8,
  },
  taskLabel: {
    marginLeft: 20,
    color: "#fff",
    width: 255,
    fontSize: 20,
    fontWeight:700
  },
});
