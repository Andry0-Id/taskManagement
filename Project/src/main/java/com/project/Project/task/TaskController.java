package com.project.Project.task;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@CrossOrigin("*")
@RestController
@RequestMapping(path = "task")
public class TaskController {
    
    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTask() {
        return taskService.getAllTask();
    }

    @GetMapping("{id}")
    public Optional<Task> getTaskById(@PathVariable Integer id) {
        return taskService.getTaskById(id);
    }
    
    @PostMapping("/post")
    public void postTask(@RequestBody Task task) {
        taskService.postTask(task);
    }

    @PutMapping("{id}")
    public void putTaskById(@PathVariable Integer id, @RequestBody Task task) {
        taskService.putTaskById(id, task);
    }
    
    @DeleteMapping("{id}")
    public void deleteTaskById(@PathVariable Integer id){
        taskService.deleteTaskById(id);
    }
    
}
