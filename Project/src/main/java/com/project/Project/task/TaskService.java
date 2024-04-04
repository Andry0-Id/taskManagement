package com.project.Project.task;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class TaskService {
    
    @Autowired
    private TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    /**
     * @return
     */
    public List<Task> getAllTask() {
        return taskRepository.findAll();
    }

    /**
     * @param task
     */
    @SuppressWarnings("null")
    public void postTask(Task task) {
        taskRepository.save(task);
    }

    @SuppressWarnings("null")
    public Optional<Task> getTaskById(Integer id) {
        return taskRepository.findById(id);
    }

    @SuppressWarnings("null")
    public void putTaskById(Integer id, Task task) {
        Task taskExist = taskRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Inexistante")
        );

        if(taskExist != null){
            taskExist.setTask(task.getTask());
            taskExist.setAchievements(task.isAchievements());
            taskRepository.save(taskExist);
        }

    }

    @SuppressWarnings("null")
    public void deleteTaskById(Integer id) {
        taskRepository.deleteById(id);
    }

}
